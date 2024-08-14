CREATE TABLE IF NOT EXISTS internships (
    id SERIAL PRIMARY KEY NOT NULL,
    job_title VARCHAR(255) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    job_type VARCHAR(50),
    stipend VARCHAR(100) NOT NULL,
    duration VARCHAR(50) NOT NULL,
    apply_link VARCHAR(255),
    internship_logo_url VARCHAR(255)
);