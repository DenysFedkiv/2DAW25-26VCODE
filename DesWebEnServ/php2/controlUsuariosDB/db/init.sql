USE productos_db

SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'usuario') DEFAULT 'usuario'
);

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL
);

INSERT INTO productos (nombre, precio, stock) VALUES ('Laptop Lenovo IdeaPad', 650.00, 12);
INSERT INTO productos (nombre, precio, stock) VALUES ('Mouse inalámbrico Logitech', 22.50, 50);
INSERT INTO productos (nombre, precio, stock) VALUES ('Teclado mecánico Redragon', 45.99, 30);
INSERT INTO productos (nombre, precio, stock) VALUES ('Monitor Samsung 24"', 180.00, 20);
INSERT INTO productos (nombre, precio, stock) VALUES ('Disco SSD Kingston 480GB', 55.00, 40);
INSERT INTO productos (nombre, precio, stock) VALUES ('Memoria RAM 8GB DDR4', 32.00, 25);
INSERT INTO productos (nombre, precio, stock) VALUES ('Auriculares HyperX Cloud', 75.00, 18);
INSERT INTO productos (nombre, precio, stock) VALUES ('Silla gamer Cougar', 199.99, 8);
INSERT INTO productos (nombre, precio, stock) VALUES ('Tarjeta gráfica GTX 1660', 299.00, 5);
INSERT INTO productos (nombre, precio, stock) VALUES ('Router TP-Link AC1200', 42.99, 22);
INSERT INTO productos (nombre, precio, stock) VALUES ('Impresora HP DeskJet 2700', 69.99, 14);
INSERT INTO productos (nombre, precio, stock) VALUES ('Webcam Logitech C920', 89.00, 10);
INSERT INTO productos (nombre, precio, stock) VALUES ('Tablet Samsung Galaxy A8', 210.00, 9);
INSERT INTO productos (nombre, precio, stock) VALUES ('Smartwatch Xiaomi Mi Band 7', 48.00, 35);
INSERT INTO productos (nombre, precio, stock) VALUES ('Cargador USB-C 25W Samsung', 19.99, 60);