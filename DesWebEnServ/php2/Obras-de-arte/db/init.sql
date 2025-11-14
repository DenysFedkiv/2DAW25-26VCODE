SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;
CREATE TABLE obras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(50) NOT NULL,
    anio_creacion SMALLINT NOT NULL,
    tipo ENUM('Pintura','Escultura','Fotografía','Grabado') NOT NULL,
    ubicacion VARCHAR(50) NOT NULL
);

INSERT INTO obras (titulo, autor, anio_creacion, tipo, ubicacion) VALUES
('La noche estrellada','Vincent van Gogh',1889,'Pintura','Sala 1'),
('David','Miguel Ángel',1504,'Escultura','Sala 2'),
('Fotografía Moonrise','Ansel Adams',1941,'Fotografía','Sala 3'),
('El Grito','Edvard Munch',1893,'Grabado','Sala 1');
