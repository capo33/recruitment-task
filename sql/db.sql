-- Create a table called "companies"
CREATE TABLE companies(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  results JSONB[]
);

-- Insert test data
INSERT INTO companies (results) VALUES ('[{"name":"Company 1","address":"Address 1"},{"name":"Company 2","address":"Address 2"}]');

-- Delete test data
DELETE FROM companies;

-- Insert test data
INSERT INTO companies (name, businessId, registrationDate, companyForm, detailsUri)
VALUES ( 'Wendys', '1234567-8', '2019-01-01', 'Oy', 'https://www.yritysinfo.fi/fi/yritys/1234567-8');

-- Delete test data
DELETE FROM companies;
