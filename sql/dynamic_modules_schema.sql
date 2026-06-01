-- --------------------------------------------------------
-- Database Schema for KAAVERI Steels
-- --------------------------------------------------------

-- Table structure for `quote_requests`
CREATE TABLE IF NOT EXISTS quote_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    product_type VARCHAR(255) NOT NULL,
    quantity VARCHAR(100) NOT NULL,
    company VARCHAR(255) DEFAULT NULL,
    location VARCHAR(255) DEFAULT NULL,
    notes TEXT DEFAULT NULL,
    name VARCHAR(120) NOT NULL,
    company VARCHAR(160) NULL,
    email VARCHAR(160) NOT NULL,
    phone VARCHAR(40) NOT NULL,
    product_type VARCHAR(120) NOT NULL,
    quantity VARCHAR(80) NOT NULL,
    location VARCHAR(160) NULL,
    notes TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table structure for `certifications`
CREATE TABLE IF NOT EXISTS certifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    issuedBy VARCHAR(255) NOT NULL,
    issueDate DATE DEFAULT NULL,
    file VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table structure for `cms_uploads`
CREATE TABLE IF NOT EXISTS cms_uploads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    file_name VARCHAR(255) NOT NULL,
    file_url VARCHAR(255) NOT NULL,
    file_type VARCHAR(100) DEFAULT NULL,
    file_size INT DEFAULT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table structure for `product_questions`
CREATE TABLE IF NOT EXISTS product_questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category ENUM('TMT', 'Structural') NOT NULL DEFAULT 'TMT',
    question VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
