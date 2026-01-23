-- Forzar codificación UTF-8
SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;
SET collation_connection = 'utf8mb4_unicode_ci';

-- Opcional: limpiar la tabla antes de insertar datos
-- (úsalo solo si sabes que quieres borrar lo anterior)
-- TRUNCATE TABLE productos;

INSERT INTO productos (nombre, descripcion, precio, stock, imagen, created_at, updated_at) VALUES
(
  'Teclado mecánico RGB',
  'Teclado mecánico con retroiluminación RGB y switches de alta precisión.',
  89.99,
  15,
  'productos/teclado.avif', NOW(), NOW()
),
(
  'Ratón inalámbrico',
  'Ratón ergonómico inalámbrico con sensor óptico de alta precisión.',
  29.90,
  32,
  'productos/raton.webp', NOW(), NOW()
),
(
  'Monitor 24 pulgadas',
  'Monitor Full HD de 24 pulgadas ideal para trabajo y entretenimiento.',
  179.50,
  8,
  'productos/monitor.jpg', NOW(), NOW()
),
(
  'Auriculares con micrófono',
  'Auriculares estéreo con micrófono integrado para videollamadas y juegos.',
  49.99,
  20,
  'productos/suriculares.jpg', NOW(), NOW()
),
(
  'Disco duro externo 1TB',
  'Disco duro externo portátil de 1TB para copias de seguridad.',
  64.95,
  12,
  'productos/disco-duro.jpg', NOW(), NOW()
),
(
  'Memoria USB 64GB',
  'Memoria USB de 64GB con alta velocidad de transferencia.',
  12.50,
  50,
  'productos/memoria.avif', NOW(), NOW()
),
(
  'Portátil 15 pulgadas',
  'Ordenador portátil de 15 pulgadas con procesador de última generación.',
  749.00,
  5,
  'productos/portatil-gaming.jpg', NOW(), NOW()
),
(
  'Impresora multifunción',
  'Impresora multifunción con escáner y copiadora incluidos.',
  129.99,
  7,
  'productos/impresora.webp', NOW(), NOW()
),
(
  'Altavoces Bluetooth',
  'Altavoces Bluetooth portátiles con sonido potente y batería recargable.',
  39.95,
  18,
  'productos/altavoces.webp', NOW(), NOW()
),
(
  'Webcam Full HD',
  'Cámara web Full HD ideal para streaming y videoconferencias.',
  55.00,
  14,
  'productos/webcam.jpg', NOW(), NOW()
),
(
  'Silla ergonómica',
  'Silla ergonómica de oficina con respaldo ajustable.',
  199.99,
  6,
  'productos/silla.webp', NOW(), NOW()
),
(
  'Alfombrilla gaming',
  'Alfombrilla gaming de gran tamaño con base antideslizante.',
  19.90,
  40,
  'productos/alfombrilla-gaming.png', NOW(), NOW()
),
(
  'Cargador USB-C',
  'Cargador rápido USB-C compatible con múltiples dispositivos.',
  24.99,
  25,
  'productos/cargador-usb-c.png', NOW(), NOW()
),
(
  'Soporte para portátil',
  'Soporte de aluminio para portátil que mejora la ventilación.',
  34.50,
  16,
  'productos/soporte-portatil.png', NOW(), NOW()
),
(
  'Router Wi-Fi',
  'Router Wi-Fi de alta velocidad para redes domésticas y pequeñas oficinas.',
  89.00,
  9,
  'productos/router-wifi.png', NOW(), NOW()
);
