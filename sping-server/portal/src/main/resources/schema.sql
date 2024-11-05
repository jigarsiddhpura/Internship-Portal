CREATE TABLE IF NOT EXISTS internships (
    id SERIAL PRIMARY KEY NOT NULL,
    job_title VARCHAR(255) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    stipend INT NOT NULL,
    job_type VARCHAR(50),
    skills VARCHAR(255),
    eligibility VARCHAR(255),
    positions_open INT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    apply_link VARCHAR(255),
    internship_logo_url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS research (
    id SERIAL PRIMARY KEY NOT NULL,
    topic VARCHAR(255) NOT NULL,
    eligibility VARCHAR(255),
    skills VARCHAR(255),
    apply_link VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users (
    sap_id VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contact VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    is_new BOOLEAN,
    PRIMARY KEY (sap_id)
);