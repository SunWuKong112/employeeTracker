DROP DATABASE IF EXISTS business_organizer;

CREATE DATABASE business_organizer;

USE business_organizer;
CREATE TABLE departments (
id INTEGER NOT NULL PRIMARY KEY,
department_name VARCHAR(50)
);

USE business_organizer;
CREATE TABLE employee_role (
role_id INTEGER NOT NULL PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL(22,2),
dep_id INTEGER
);

USE business_organizer;
CREATE TABLE employee (
employee_id INTEGER NOT NULL PRIMARY KEY,
first_name VARCHAR(25),
last_name VARCHAR(25),
employee_role_id INTEGER,
manager_id INTEGER NULL
);

SELECT * FROM departments;
INSERT INTO departments (id, department_name)
VALUE (6, "MI6");