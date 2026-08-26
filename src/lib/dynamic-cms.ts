import { ResultSetHeader, RowDataPacket } from "mysql2";
import { getPool } from "@/lib/mysql";
import { clearCacheByPrefix, getOrSetCache } from "@/lib/server-cache";

export const MODULE_TABLES = {
  products: "products",
  mediaEvents: "media_events",
  blogs: "blogs",
  projects: "projects",
  careers: "careers",
  dealers: "dealers",
  galleries: "galleries",
  brochures: "brochures",
  popups: "popups",
  certifications: "certifications",
  csr: "csr",
  aboutUs: "about_us",
  pages: "pages",
  calculators: "calculators",
  aboutHero: "aboutHero",
} as const;

export type ModuleKey = keyof typeof MODULE_TABLES;
const PUBLIC_LIST_CACHE_TTL_MS = 5 * 60 * 1000;
const PUBLIC_DETAIL_CACHE_TTL_MS = 10 * 60 * 1000;
let dynamicCmsBootstrapPromise: Promise<void> | null = null;

export type ContentInput = {
  title: string;
  slug?: string;
  short_description?: string | null;
  content?: string | null;
  cover_image?: string | null;
  file_url?: string | null;
  video_url?: string | null;
  status?: "draft" | "published";
  featured?: boolean;
  sort_order?: number;
  meta_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string | null;
  og_image?: string | null;
  extra_data?: Record<string, unknown> | null;
};

type ContentRow = RowDataPacket & {
  id: number;
  title: string;
  slug: string;
  short_description: string | null;
  content: string | null;
  cover_image: string | null;
  file_url: string | null;
  video_url: string | null;
  status: "draft" | "published";
  featured: number;
  sort_order: number;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  og_image: string | null;
  extra_data: string | null;
  created_at: string;
  updated_at: string;
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function safeModule(module: string): ModuleKey {
  if (module in MODULE_TABLES) {
    return module as ModuleKey;
  }

  throw new Error("Invalid module.");
}

function baseContentTable(tableName: string): string {
  return `
    CREATE TABLE IF NOT EXISTS ${tableName} (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(220) NOT NULL,
      slug VARCHAR(240) NOT NULL UNIQUE,
      short_description TEXT NULL,
      content LONGTEXT NULL,
      cover_image VARCHAR(500) NULL,
      file_url VARCHAR(500) NULL,
      video_url VARCHAR(500) NULL,
      status ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
      featured TINYINT(1) NOT NULL DEFAULT 0,
      sort_order INT NOT NULL DEFAULT 0,
      meta_title VARCHAR(255) NULL,
      meta_description TEXT NULL,
      meta_keywords TEXT NULL,
      og_image VARCHAR(500) NULL,
      extra_data JSON NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_status (status),
      INDEX idx_featured (featured),
      INDEX idx_sort (sort_order)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `;
}

let dynamicCmsTablesCreated = false;

export async function ensureDynamicCmsTables(): Promise<void> {
  if (dynamicCmsTablesCreated) {
    return;
  }
  if (dynamicCmsBootstrapPromise) {
    return dynamicCmsBootstrapPromise;
  }

  dynamicCmsBootstrapPromise = (async () => {
    const pool = getPool();

    const baseTableNames = [
      "products", "media_events", "blogs", "projects", "careers",
      "galleries", "brochures", "popups", "certifications", "csr",
      "about_us", "pages", "calculators", "aboutHero"
    ];

    // Create base content tables concurrently
    await Promise.all(baseTableNames.map(name => pool.query(baseContentTable(name))));

    // Alter table columns concurrently (ignore errors if columns exist)
    const alterQueries: string[] = [];
    for (const table of Object.values(MODULE_TABLES)) {
      alterQueries.push(`ALTER TABLE ${table} ADD COLUMN meta_keywords TEXT NULL`);
      alterQueries.push(`ALTER TABLE ${table} ADD COLUMN og_image VARCHAR(500) NULL`);
    }
    await Promise.allSettled(alterQueries.map(sql => pool.query(sql)));

    // Create auxiliary tables concurrently
    await Promise.all([
      pool.query(`
        CREATE TABLE IF NOT EXISTS product_categories (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(160) NOT NULL,
          slug VARCHAR(180) NOT NULL UNIQUE,
          status ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
          sort_order INT NOT NULL DEFAULT 0,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
      `),
      pool.query(`
        CREATE TABLE IF NOT EXISTS blog_categories (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(160) NOT NULL,
          slug VARCHAR(180) NOT NULL UNIQUE,
          status ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
          sort_order INT NOT NULL DEFAULT 0,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
      `),
      pool.query(`
        CREATE TABLE IF NOT EXISTS blog_tags (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(160) NOT NULL,
          slug VARCHAR(180) NOT NULL UNIQUE,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
      `),
      pool.query(`
        CREATE TABLE IF NOT EXISTS dealers (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(220) NOT NULL,
          slug VARCHAR(240) NOT NULL UNIQUE,
          short_description TEXT NULL,
          content LONGTEXT NULL,
          cover_image VARCHAR(500) NULL,
          file_url VARCHAR(500) NULL,
          video_url VARCHAR(500) NULL,
          city VARCHAR(120) NULL,
          state VARCHAR(120) NULL,
          phone VARCHAR(60) NULL,
          email VARCHAR(190) NULL,
          map_url VARCHAR(500) NULL,
          status ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
          featured TINYINT(1) NOT NULL DEFAULT 0,
          sort_order INT NOT NULL DEFAULT 0,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          INDEX idx_location (city, state)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
      `),
      pool.query(`
        CREATE TABLE IF NOT EXISTS job_applications (
          id INT AUTO_INCREMENT PRIMARY KEY,
          career_id INT NULL,
          name VARCHAR(180) NOT NULL,
          email VARCHAR(190) NOT NULL,
          phone VARCHAR(60) NULL,
          resume_url VARCHAR(500) NULL,
          cover_letter TEXT NULL,
          status ENUM('new', 'reviewed', 'shortlisted', 'rejected') NOT NULL DEFAULT 'new',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          INDEX idx_status (status)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
      `),
      pool.query(`
        CREATE TABLE IF NOT EXISTS enquiries (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(180) NOT NULL,
          email VARCHAR(190) NOT NULL,
          phone VARCHAR(60) NULL,
          enquiry_type VARCHAR(120) NOT NULL,
          product_name VARCHAR(220) NULL,
          message TEXT NULL,
          status ENUM('new', 'in_progress', 'resolved') NOT NULL DEFAULT 'new',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          INDEX idx_status (status)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
      `),
      pool.query(`
        CREATE TABLE IF NOT EXISTS gallery_items (
          id INT AUTO_INCREMENT PRIMARY KEY,
          gallery_id INT NOT NULL,
          title VARCHAR(220) NOT NULL,
          item_type ENUM('photo', 'video', 'project') NOT NULL DEFAULT 'photo',
          file_url VARCHAR(500) NOT NULL,
          thumbnail_url VARCHAR(500) NULL,
          sort_order INT NOT NULL DEFAULT 0,
          status ENUM('draft', 'published') NOT NULL DEFAULT 'published',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          INDEX idx_gallery (gallery_id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
      `),
      pool.query(`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(180) NOT NULL,
          email VARCHAR(190) NOT NULL,
          phone VARCHAR(60) NULL,
          subject VARCHAR(220) NULL,
          message TEXT NOT NULL,
          status ENUM('new', 'resolved') NOT NULL DEFAULT 'new',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          INDEX idx_status (status)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
      `),
      pool.query(`
        CREATE TABLE IF NOT EXISTS seo_meta (
          id INT AUTO_INCREMENT PRIMARY KEY,
          page_key VARCHAR(180) NOT NULL UNIQUE,
          title VARCHAR(255) NULL,
          description TEXT NULL,
          keywords TEXT NULL,
          og_image VARCHAR(500) NULL,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
      `),
      pool.query(`
        CREATE TABLE IF NOT EXISTS cms_uploads (
          id INT AUTO_INCREMENT PRIMARY KEY,
          file_name VARCHAR(255) NOT NULL,
          mime_type VARCHAR(120) NOT NULL,
          file_data LONGBLOB NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
      `),
      pool.query(`
        CREATE TABLE IF NOT EXISTS settings (
          id INT AUTO_INCREMENT PRIMARY KEY,
          setting_key VARCHAR(180) NOT NULL UNIQUE,
          setting_value JSON NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
      `),
    ]);

    // Optional column additions
    const specificAlters = [
      "ALTER TABLE dealers ADD COLUMN cover_image VARCHAR(500) NULL",
      "ALTER TABLE dealers ADD COLUMN taluka VARCHAR(120) NULL",
      "ALTER TABLE dealers ADD COLUMN file_url VARCHAR(500) NULL",
      "ALTER TABLE dealers ADD COLUMN video_url VARCHAR(500) NULL",
      "ALTER TABLE dealers ADD COLUMN latitude VARCHAR(60) NULL",
      "ALTER TABLE dealers ADD COLUMN longitude VARCHAR(60) NULL",
      "ALTER TABLE dealers ADD COLUMN meta_title VARCHAR(255) NULL",
      "ALTER TABLE dealers ADD COLUMN meta_description TEXT NULL",
      "ALTER TABLE dealers ADD COLUMN meta_keywords TEXT NULL",
      "ALTER TABLE dealers ADD COLUMN og_image VARCHAR(500) NULL",
      "ALTER TABLE aboutHero ADD COLUMN slug VARCHAR(240) NULL",
      "ALTER TABLE aboutHero ADD COLUMN short_description TEXT NULL",
      "ALTER TABLE aboutHero ADD COLUMN content LONGTEXT NULL",
      "ALTER TABLE aboutHero ADD COLUMN cover_image VARCHAR(500) NULL",
      "ALTER TABLE aboutHero ADD COLUMN file_url VARCHAR(500) NULL",
      "ALTER TABLE aboutHero ADD COLUMN video_url VARCHAR(500) NULL",
      "ALTER TABLE aboutHero ADD COLUMN status ENUM('draft', 'published') NOT NULL DEFAULT 'published'",
      "ALTER TABLE aboutHero ADD COLUMN featured TINYINT(1) NOT NULL DEFAULT 0",
      "ALTER TABLE aboutHero ADD COLUMN sort_order INT NOT NULL DEFAULT 0",
      "ALTER TABLE aboutHero ADD COLUMN meta_title VARCHAR(255) NULL",
      "ALTER TABLE aboutHero ADD COLUMN meta_description TEXT NULL",
      "ALTER TABLE aboutHero ADD COLUMN extra_data JSON NULL",
    ];

    await Promise.allSettled(specificAlters.map(sql => pool.query(sql)));
    dynamicCmsTablesCreated = true;
  })();

  try {
    await dynamicCmsBootstrapPromise;
  } catch (error) {
    console.error("dynamicCms bootstrap error:", error);
    // Don't reset promise so we don't spam queries repeatedly on every request
  }
}

export type ListModuleOptions = {
  status?: string;
  q?: string;
  limit?: number;
  city?: string;
  taluka?: string;
};

async function queryModuleItems(moduleName: string, options?: ListModuleOptions): Promise<ContentRow[]> {
  const limit = Math.min(Math.max(options?.limit ?? 5000, 1), 5000);
  if (moduleName === "dealers") {
    const where: string[] = [];
    const params: Array<string> = [];
    if (options?.status) {
      where.push("status = ?");
      params.push(options.status);
    }
    if (options?.city && options.city !== "All") {
      where.push("LOWER(TRIM(city)) = LOWER(TRIM(?))");
      params.push(options.city);
    }
    if (options?.taluka && options.taluka !== "All") {
      where.push("LOWER(TRIM(taluka)) = LOWER(TRIM(?))");
      params.push(options.taluka);
    }
    if (options?.q) {
      where.push("(title LIKE ? OR short_description LIKE ? OR city LIKE ? OR taluka LIKE ? OR state LIKE ?)");
      params.push(`%${options.q}%`, `%${options.q}%`, `%${options.q}%`, `%${options.q}%`, `%${options.q}%`);
    }
    const sql = `SELECT id,title,slug,short_description,content,cover_image,file_url,video_url,status,featured,sort_order,meta_title,meta_description,meta_keywords,og_image, JSON_OBJECT('city', IFNULL(city, ''), 'taluka', IFNULL(taluka, ''), 'state', IFNULL(state, ''), 'phone', IFNULL(phone, ''), 'email', IFNULL(email, ''), 'map_url', IFNULL(map_url, ''), 'latitude', IFNULL(latitude, ''), 'longitude', IFNULL(longitude, '')) as extra_data,created_at,updated_at FROM dealers ${where.length ? `WHERE ${where.join(" AND ")}` : ""} ORDER BY featured DESC, sort_order ASC, updated_at DESC LIMIT ${limit}`;
    const [rows] = await getPool().query<ContentRow[]>(sql, params);
    return rows;
  }

  const moduleKey = safeModule(moduleName);
  const table = MODULE_TABLES[moduleKey];
  const where: string[] = [];
  const params: Array<string> = [];

  if (options?.status) {
    where.push("status = ?");
    params.push(options.status);
  }

  if (options?.q) {
    where.push("(title LIKE ? OR short_description LIKE ?)");
    params.push(`%${options.q}%`, `%${options.q}%`);
  }

  const sql = `SELECT * FROM ${table} ${where.length ? `WHERE ${where.join(" AND ")}` : ""} ORDER BY featured DESC, sort_order ASC, updated_at DESC LIMIT ${limit}`;
  const [rows] = await getPool().query<ContentRow[]>(sql, params);
  return rows;
}

export async function listModuleItems(moduleName: string, options?: ListModuleOptions): Promise<ContentRow[]> {
  const limit = Math.min(Math.max(options?.limit ?? 5000, 1), 5000);
  const cacheKey = `dynamic-cms:list:${moduleName}:${limit}:${options?.status || ""}:${options?.city || ""}:${options?.taluka || ""}:${options?.q || ""}`;

  return getOrSetCache(cacheKey, PUBLIC_LIST_CACHE_TTL_MS, async () => {
    try {
      await ensureDynamicCmsTables();
      return await queryModuleItems(moduleName, { ...options, limit });
    } catch (err) {
      console.error(`listModuleItems query error for ${moduleName}:`, err);
      return [];
    }
  });
}

export async function getDealerFilters(): Promise<{
  cities: { name: string; count: number }[];
  talukas: { city: string; taluka: string; count: number }[];
  total: number;
}> {
  const cacheKey = "dynamic-cms:dealer-filters";
  return getOrSetCache(cacheKey, PUBLIC_LIST_CACHE_TTL_MS, async () => {
    try {
      await ensureDynamicCmsTables();
      const [cityRows] = await getPool().query<RowDataPacket[]>(
        `SELECT TRIM(city) as city, COUNT(*) as count 
         FROM dealers 
         WHERE status = 'published' AND city IS NOT NULL AND TRIM(city) != '' 
         GROUP BY TRIM(city) 
         ORDER BY TRIM(city) ASC`
      );
      const [talukaRows] = await getPool().query<RowDataPacket[]>(
        `SELECT TRIM(city) as city, TRIM(taluka) as taluka, COUNT(*) as count 
         FROM dealers 
         WHERE status = 'published' AND taluka IS NOT NULL AND TRIM(taluka) != '' 
         GROUP BY TRIM(city), TRIM(taluka) 
         ORDER BY TRIM(taluka) ASC`
      );
      const [totalRows] = await getPool().query<RowDataPacket[]>(
        "SELECT COUNT(*) as total FROM dealers WHERE status = 'published'"
      );

      return {
        cities: cityRows.map((r) => ({ name: String(r.city), count: Number(r.count) })),
        talukas: talukaRows.map((r) => ({ city: String(r.city), taluka: String(r.taluka), count: Number(r.count) })),
        total: Number(totalRows[0]?.total ?? 0),
      };
    } catch (err) {
      console.error("getDealerFilters error:", err);
      return { cities: [], talukas: [], total: 0 };
    }
  });
}

export async function getAdminModuleItemById(moduleName: string, id: number): Promise<ContentRow | null> {
  await ensureDynamicCmsTables();

  if (moduleName === "dealers") {
    const [rows] = await getPool().query<ContentRow[]>(
      `SELECT id,title,slug,short_description,content,cover_image,file_url,video_url,status,featured,sort_order,meta_title,meta_description,meta_keywords,og_image, JSON_OBJECT('city', IFNULL(city, ''), 'taluka', IFNULL(taluka, ''), 'state', IFNULL(state, ''), 'phone', IFNULL(phone, ''), 'email', IFNULL(email, ''), 'map_url', IFNULL(map_url, ''), 'latitude', IFNULL(latitude, ''), 'longitude', IFNULL(longitude, '')) as extra_data,created_at,updated_at FROM dealers WHERE id = ? LIMIT 1`,
      [id],
    );
    return rows[0] ?? null;
  }

  const moduleKey = safeModule(moduleName);
  const table = MODULE_TABLES[moduleKey];
  const [rows] = await getPool().query<ContentRow[]>(`SELECT * FROM ${table} WHERE id = ? LIMIT 1`, [id]);
  return rows[0] ?? null;
}

export async function createModuleItem(moduleName: string, input: ContentInput): Promise<number> {
  await ensureDynamicCmsTables();

  const slug = slugify(input.slug || input.title || "item");

  if (moduleName === "dealers") {
    const [result] = await getPool().execute<ResultSetHeader>(
      `INSERT INTO dealers (title, slug, short_description, content, cover_image, file_url, video_url, city, taluka, state, phone, email, map_url, latitude, longitude, status, featured, sort_order, meta_title, meta_description, meta_keywords, og_image)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        input.title,
        slug,
        input.short_description ?? null,
        input.content ?? null,
        input.cover_image ?? null,
        input.file_url ?? null,
        input.video_url ?? null,
        String(input.extra_data?.city ?? "") || null,
        String(input.extra_data?.taluka ?? "") || null,
        String(input.extra_data?.state ?? "") || null,
        String(input.extra_data?.phone ?? "") || null,
        String(input.extra_data?.email ?? "") || null,
        String(input.extra_data?.map_url ?? "") || null,
        String(input.extra_data?.latitude ?? "") || null,
        String(input.extra_data?.longitude ?? "") || null,
        input.status ?? "draft",
        input.featured ? 1 : 0,
        input.sort_order ?? 0,
        input.meta_title ?? null,
        input.meta_description ?? null,
        input.meta_keywords ?? null,
        input.og_image ?? null,
      ],
    );
    clearCacheByPrefix("dynamic-cms:");
    return result.insertId;
  }

  const moduleKey = safeModule(moduleName);
  const table = MODULE_TABLES[moduleKey];

  const [result] = await getPool().execute<ResultSetHeader>(
    `INSERT INTO ${table} (title, slug, short_description, content, cover_image, file_url, video_url, status, featured, sort_order, meta_title, meta_description, meta_keywords, og_image, extra_data)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      input.title,
      slug,
      input.short_description ?? null,
      input.content ?? null,
      input.cover_image ?? null,
      input.file_url ?? null,
      input.video_url ?? null,
      input.status ?? "draft",
      input.featured ? 1 : 0,
      input.sort_order ?? 0,
      input.meta_title ?? null,
      input.meta_description ?? null,
      input.meta_keywords ?? null,
      input.og_image ?? null,
      input.extra_data ? JSON.stringify(input.extra_data) : null,
    ],
  );

  clearCacheByPrefix("dynamic-cms:");
  return result.insertId;
}

export async function updateModuleItem(moduleName: string, id: number, input: ContentInput): Promise<boolean> {
  await ensureDynamicCmsTables();
  const slug = slugify(input.slug || input.title || "item");

  if (moduleName === "dealers") {
    const [result] = await getPool().execute<ResultSetHeader>(
      `UPDATE dealers SET title=?, slug=?, short_description=?, content=?, cover_image=?, file_url=?, video_url=?, city=?, taluka=?, state=?, phone=?, email=?, map_url=?, latitude=?, longitude=?, status=?, featured=?, sort_order=?, meta_title=?, meta_description=?, meta_keywords=?, og_image=? WHERE id=?`,
      [
        input.title,
        slug,
        input.short_description ?? null,
        input.content ?? null,
        input.cover_image ?? null,
        input.file_url ?? null,
        input.video_url ?? null,
        String(input.extra_data?.city ?? "") || null,
        String(input.extra_data?.taluka ?? "") || null,
        String(input.extra_data?.state ?? "") || null,
        String(input.extra_data?.phone ?? "") || null,
        String(input.extra_data?.email ?? "") || null,
        String(input.extra_data?.map_url ?? "") || null,
        String(input.extra_data?.latitude ?? "") || null,
        String(input.extra_data?.longitude ?? "") || null,
        input.status ?? "draft",
        input.featured ? 1 : 0,
        input.sort_order ?? 0,
        input.meta_title ?? null,
        input.meta_description ?? null,
        input.meta_keywords ?? null,
        input.og_image ?? null,
        id,
      ],
    );
    const updated = result.affectedRows > 0;
    if (updated) {
      clearCacheByPrefix("dynamic-cms:");
    }
    return updated;
  }

  const moduleKey = safeModule(moduleName);
  const table = MODULE_TABLES[moduleKey];

  const [result] = await getPool().execute<ResultSetHeader>(
    `UPDATE ${table} SET title=?, slug=?, short_description=?, content=?, cover_image=?, file_url=?, video_url=?, status=?, featured=?, sort_order=?, meta_title=?, meta_description=?, meta_keywords=?, og_image=?, extra_data=? WHERE id=?`,
    [
      input.title,
      slug,
      input.short_description ?? null,
      input.content ?? null,
      input.cover_image ?? null,
      input.file_url ?? null,
      input.video_url ?? null,
      input.status ?? "draft",
      input.featured ? 1 : 0,
      input.sort_order ?? 0,
      input.meta_title ?? null,
      input.meta_description ?? null,
      input.meta_keywords ?? null,
      input.og_image ?? null,
      input.extra_data ? JSON.stringify(input.extra_data) : null,
      id,
    ],
  );

  const updated = result.affectedRows > 0;
  if (updated) {
    clearCacheByPrefix("dynamic-cms:");
  }
  return updated;
}

export async function deleteModuleItem(moduleName: string, id: number): Promise<boolean> {
  await ensureDynamicCmsTables();

  if (moduleName === "dealers") {
    const [result] = await getPool().execute<ResultSetHeader>("DELETE FROM dealers WHERE id = ?", [id]);
    const deleted = result.affectedRows > 0;
    if (deleted) {
      clearCacheByPrefix("dynamic-cms:");
    }
    return deleted;
  }

  const moduleKey = safeModule(moduleName);
  const table = MODULE_TABLES[moduleKey];
  const [result] = await getPool().execute<ResultSetHeader>(`DELETE FROM ${table} WHERE id = ?`, [id]);
  const deleted = result.affectedRows > 0;
  if (deleted) {
    clearCacheByPrefix("dynamic-cms:");
  }
  return deleted;
}


async function queryPublicModuleItemBySlug(moduleName: string, slug: string): Promise<RowDataPacket | null> {
  if (moduleName === "dealers") {
    const [rows] = await getPool().query<RowDataPacket[]>(
      `SELECT id,title,slug,short_description,content,cover_image,file_url,video_url,status,featured,sort_order,meta_title,meta_description,meta_keywords,og_image, JSON_OBJECT('city', IFNULL(city, ''), 'taluka', IFNULL(taluka, ''), 'state', IFNULL(state, ''), 'phone', IFNULL(phone, ''), 'email', IFNULL(email, ''), 'map_url', IFNULL(map_url, ''), 'latitude', IFNULL(latitude, ''), 'longitude', IFNULL(longitude, '')) as extra_data,created_at,updated_at FROM dealers WHERE slug = ? AND status = 'published' LIMIT 1`,
      [slug],
    );
    return rows[0] ?? null;
  }

  const moduleKey = safeModule(moduleName);
  const table = MODULE_TABLES[moduleKey];
  const [rows] = await getPool().query<RowDataPacket[]>(
    `SELECT * FROM ${table} WHERE slug = ? AND status = 'published' LIMIT 1`,
    [slug],
  );

  return rows[0] ?? null;
}

export async function getPublicModuleItemBySlug(moduleName: string, slug: string): Promise<RowDataPacket | null> {
  const cacheKey = `dynamic-cms:detail:${moduleName}:${slug}`;
  return getOrSetCache(cacheKey, PUBLIC_DETAIL_CACHE_TTL_MS, async () => {
    await ensureDynamicCmsTables();
    return queryPublicModuleItemBySlug(moduleName, slug);
  });
}

// Uncached — used only to build <title>/<meta> tags, which must always reflect the latest saved SEO data.
export async function getPublicModuleItemMetaBySlug(moduleName: string, slug: string): Promise<RowDataPacket | null> {
  await ensureDynamicCmsTables();
  return queryPublicModuleItemBySlug(moduleName, slug);
}

export type PageSeoRow = RowDataPacket & {
  id: number;
  page_key: string;
  title: string | null;
  description: string | null;
  keywords: string | null;
  og_image: string | null;
  updated_at: string;
  created_at: string;
};

export async function listPageSeoEntries(): Promise<PageSeoRow[]> {
  await ensureDynamicCmsTables();
  const [rows] = await getPool().query<PageSeoRow[]>("SELECT * FROM seo_meta");
  return rows;
}

export async function getPageSeoEntry(pageKey: string): Promise<PageSeoRow | null> {
  await ensureDynamicCmsTables();
  // Always read fresh — this feeds <title>/<meta> tags directly, so it must never serve stale cache.
  const [rows] = await getPool().query<PageSeoRow[]>("SELECT * FROM seo_meta WHERE page_key = ? LIMIT 1", [pageKey]);
  return rows[0] ?? null;
}

export async function upsertPageSeoEntry(
  pageKey: string,
  input: { title?: string | null; description?: string | null; keywords?: string | null; og_image?: string | null },
): Promise<void> {
  await ensureDynamicCmsTables();
  await getPool().execute(
    `INSERT INTO seo_meta (page_key, title, description, keywords, og_image)
     VALUES (?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE title = VALUES(title), description = VALUES(description), keywords = VALUES(keywords), og_image = VALUES(og_image)`,
    [pageKey, input.title ?? null, input.description ?? null, input.keywords ?? null, input.og_image ?? null],
  );
}
