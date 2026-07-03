# Hospital Database Management System

## Overview

This project is a Hospital Database Management System developed using Node.js and MySQL. It demonstrates how to connect a Node.js application to a MySQL database and perform basic database operations such as creating databases, creating tables, inserting records, retrieving data, and deleting records.

## Features

- MySQL database connectivity
- Database creation
- Table creation
- Insert records into tables
- Display records
- Delete records
- CRUD operations using SQL
- Console output using Node.js

## Technologies Used

- Node.js
- MySQL
- mysql2
- JavaScript
- VS Code

## Project Structure

```
hospital_project/
│
├── dbhospital.js
├── package.json
├── package-lock.json
├── node_modules/
└── README.md
```

## Database

**Database Name**

```
hospital3
```

## Tables

- patient
- doctor
- staff

## Table Structure

### Patient

- pid
- pname
- age
- gender

### Doctor

- did
- dname
- age
- gender

### Staff

- eid
- ename
- age
- gender

## Operations Performed

- Create Database
- Create Tables
- Insert Records
- View Records
- Delete Records
- Retrieve Data

## Installation

Clone the repository:

```bash
git clone https://github.com/saniyaahamad/hospital_project.git
```

Go to the project directory:

```bash
cd hospital_project
```

Install dependencies:

```bash
npm install
```

Install MySQL package:

```bash
npm install mysql2
```

Update your MySQL credentials in `dbhospital.js`:

```javascript
host: "localhost",
user: "root",
password: "your_password",
database: "hospital3"
```

Run the project:

```bash
node dbhospital.js
```

## Sample SQL Operations

- CREATE DATABASE
- CREATE TABLE
- INSERT
- SELECT
- DELETE

## Output

The application displays:

- Patient records
- Doctor records
- Staff records

using the terminal with JavaScript.

