import { ResultSetHeader, RowDataPacket } from "mysql2";
import { getPool } from "@/lib/mysql";
import { hashPassword, verifyPassword } from "@/lib/password";

export type AdminUserRecord = {
  id: number;
  email: string;
  enabledModules: string[];
  status: "active" | "disabled";
  createdAt: string;
  updatedAt: string;
};

type AdminUserRow = RowDataPacket & {
  id: number;
  email: string;
  password_hash: string;
  enabled_modules: string | null;
  status: "active" | "disabled";
  created_at: string;
  updated_at: string;
};

let adminUsersBootstrapPromise: Promise<void> | null = null;

export async function ensureAdminUsersTable(): Promise<void> {
  if (adminUsersBootstrapPromise) {
    return adminUsersBootstrapPromise;
  }

  adminUsersBootstrapPromise = getPool().query(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(190) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        enabled_modules JSON NULL,
        status ENUM('active', 'disabled') NOT NULL DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `).then(() => undefined);

  try {
    await adminUsersBootstrapPromise;
  } catch (error) {
    adminUsersBootstrapPromise = null;
    throw error;
  }
}

function toRecord(row: AdminUserRow): AdminUserRecord {
  let enabledModules: string[] = [];
  try {
    enabledModules = row.enabled_modules ? JSON.parse(row.enabled_modules) : [];
  } catch {
    enabledModules = [];
  }

  return {
    id: row.id,
    email: row.email,
    enabledModules,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function listAdminUsers(): Promise<AdminUserRecord[]> {
  await ensureAdminUsersTable();
  const [rows] = await getPool().query<AdminUserRow[]>(
    "SELECT * FROM admin_users ORDER BY created_at DESC",
  );
  return rows.map(toRecord);
}

export async function createAdminUser(input: {
  email: string;
  password: string;
  enabledModules: string[];
}): Promise<number> {
  await ensureAdminUsersTable();

  const [result] = await getPool().execute<ResultSetHeader>(
    `INSERT INTO admin_users (email, password_hash, enabled_modules, status) VALUES (?, ?, ?, 'active')`,
    [input.email.trim().toLowerCase(), hashPassword(input.password), JSON.stringify(input.enabledModules)],
  );

  return result.insertId;
}

export async function updateAdminUser(
  id: number,
  input: { email?: string; password?: string; enabledModules?: string[]; status?: "active" | "disabled" },
): Promise<void> {
  await ensureAdminUsersTable();

  const sets: string[] = [];
  const values: (string | number)[] = [];

  if (input.email !== undefined) {
    sets.push("email = ?");
    values.push(input.email.trim().toLowerCase());
  }
  if (input.password) {
    sets.push("password_hash = ?");
    values.push(hashPassword(input.password));
  }
  if (input.enabledModules !== undefined) {
    sets.push("enabled_modules = ?");
    values.push(JSON.stringify(input.enabledModules));
  }
  if (input.status !== undefined) {
    sets.push("status = ?");
    values.push(input.status);
  }

  if (sets.length === 0) return;

  values.push(id);
  await getPool().execute(`UPDATE admin_users SET ${sets.join(", ")} WHERE id = ?`, values);
}

export async function deleteAdminUser(id: number): Promise<boolean> {
  await ensureAdminUsersTable();
  const [result] = await getPool().execute<ResultSetHeader>("DELETE FROM admin_users WHERE id = ?", [id]);
  return result.affectedRows > 0;
}

export async function verifyAdminLogin(email: string, password: string): Promise<AdminUserRecord | null> {
  await ensureAdminUsersTable();

  const [rows] = await getPool().query<AdminUserRow[]>(
    "SELECT * FROM admin_users WHERE email = ? LIMIT 1",
    [email.trim().toLowerCase()],
  );

  const row = rows[0];
  if (!row || row.status !== "active") return null;
  if (!verifyPassword(password, row.password_hash)) return null;

  return toRecord(row);
}
