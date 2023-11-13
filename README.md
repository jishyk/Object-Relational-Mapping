# E-Commerce Backend

## Description

This project is the backend for an e-commerce site, developed using Node.js, Express.js, and Sequelize, interacting with a MySQL database. It's designed to manage a product catalog including categories, products, and tags.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Database Setup](#database-setup)
4. [Seeding the Database](#seeding-the-database)
5. [API Routes](#api-routes)
    - [Categories](#categories)
    - [Products](#products)
    - [Tags](#tags)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)
8. [License](#license)

## Installation

To install the necessary dependencies, execute the following command:

```bash
npm install 
```

# Usage

To start the application, run:

```bash
npm start
```
Make sure to set up and seed the database before starting the server

# Database Setup

1: Create a .env file in the root directory with your MySQL credentials:
```bash
DB_NAME='ecommerce_db'
DB_USER='your_mysql_username'
DB_PASSWORD='your_mysql_password'
```

2: Run schema.sql in the MySQL shell to create your database:
```bash
DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db;
```
