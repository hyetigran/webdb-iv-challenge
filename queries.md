# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

<!-- I only retrieved 65 records. -->

SELECT Products.ProductName, Categories.CategoryName
FROM Products
INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT Orders.OrderID, Shippers.ShipperName
FROM Orders
INNER JOIN Shippers
ON Orders.ShipperID = Shippers.ShipperID
AND Orders.OrderDate <= '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT
p.productname,
od.quantity
FROM
orderdetails as od
JOIN
products as p
ON
p.productid = od.productid
AND
od.orderid = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT
o.orderid,
c.customername,
e.lastname
FROM
orders as o
JOIN
employees as e
ON
o.employeeid = e.employeeid
JOIN
customers as c
ON
o.customerid = c.customerid

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT
c.categoryname,
count(p.categoryid) as 'Product Count'
FROM
categories as c
JOIN
products as p
ON
p.categoryid = c.categoryid
GROUP BY
c.categoryname

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

SELECT
o.orderid,
count(od.productid) as 'Item Count'
FROM
orders as o
JOIN
orderdetails as od
ON od.orderid = o.orderid
GROUP BY od.orderid
