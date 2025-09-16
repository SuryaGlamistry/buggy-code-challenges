//MYSQL-1
//Write an SQL query to fetch the name and salary of employees whose salary is greater 
//than 50,000, ordered by salary descending.
Table: employees(id, name, department, salary)

//MYSQL-2
//Given a orders table with columns:
// orders(id, customer_id, order_date, amount)
// Write a query to find the top 3 customers who spent the most in the year 2024, along 
// with their total spending.

//MYSQL-3
//Given a products table with columns:
// products(id, name, category, price)
// Write a query to find the average price of products in each category, 
// but only for categories with more than 5 products.   

//MYSQL-4
// Find the customer name and their total spent in 2024 for the top 3 spenders.
// Tables:
// • customers(id, name)
// • orders(id, customer_id, order_date, amount)

//MYSQL-5
// Given this schema:
// Users(id, name, email) 
// Orders(id, userId, createdAt) 
// OrderItems(id, orderId, productId, quantity) 
// Products(id, name, price)
// 1. Write a SQL query to return the top 3 users by total spend (sum of price * 
// quantity).
// 2. Write a query to find users who placed no orders in the last 30 days.
// 3. If the Orders table grows to millions of rows, how would you optimize these 
// queries? (indexes, query plans, caching)

