-- NOTE: The Kaaveri Steels application appears to use a single `cms_content` table
-- for all dynamic modules, distinguished by a `module` column.
-- Adding a new module like 'csr' would involve inserting rows with `module = 'csr'`
-- into the existing `cms_content` table rather than creating a new table.

-- The following SQL script is provided to illustrate the likely structure of this
-- shared content table, based on the application's code. You can adapt this if you
-- prefer a separate table for CSR events.

CREATE TABLE IF NOT EXISTS `cms_content` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `module` VARCHAR(50) NOT NULL COMMENT 'e.g., products, blogs, csr',
  `slug` VARCHAR(255) UNIQUE,
  `title` VARCHAR(255) NOT NULL,
  `short_description` TEXT,
  `content` LONGTEXT,
  `cover_image` VARCHAR(255),
  `file_url` VARCHAR(255),
  `video_url` VARCHAR(255),
  `status` VARCHAR(20) NOT NULL DEFAULT 'draft',
  `featured` BOOLEAN NOT NULL DEFAULT FALSE,
  `sort_order` INT NOT NULL DEFAULT 0,
  `extra_data` JSON,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_module_status` (`module`, `status`),
  INDEX `idx_module_slug` (`module`, `slug`)
) COMMENT='Generic table for dynamic content modules';

-- Example of adding a CSR event:
-- INSERT INTO `cms_content` (module, slug, title, short_description, content, status, extra_data)
-- VALUES (
--   'csr',
--   'tree-plantation-drive-2026',
--   'Tree Plantation Drive 2026',
--   'Our annual initiative to enhance green cover in our community.',
--   '<p>Full details about the event...</p>',
--   'published',
--   '{"event_date": "2026-07-22"}'
-- );