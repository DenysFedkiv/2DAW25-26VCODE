USE tareas_db;

SET NAMES utf8mb4;

SET CHARACTER SET utf8mb4;
-- Eliminar tabla si existe
DROP TABLE IF EXISTS tareas;
CREATE TABLE tareas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descripcion TEXT,
    prioridad ENUM('alta', 'media', 'baja') DEFAULT 'media',
    completada BOOLEAN DEFAULT FALSE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- ========================================
-- DATOS DE EJEMPLO
-- ========================================

INSERT INTO tareas (titulo, descripcion, prioridad, completada) VALUES
('Estudiar AJAX y Fetch API', 'Repasar conceptos de comunicación asíncrona con JavaScript', 'alta', 0),
('Completar ejercicios de PHP', 'Terminar los ejercicios del tema 7 sobre APIs REST', 'alta', 0),
('Hacer la compra', 'Leche, pan, frutas y verduras', 'media', 0),
('Llamar al dentista', 'Pedir cita para revisión anual', 'media', 1),
('Revisar correos', 'Responder correos pendientes del trabajo', 'baja', 1),
('Preparar presentación', 'Crear slides para la reunión del viernes', 'alta', 0),
('Ejercicio físico', 'Ir al gimnasio o salir a correr', 'media', 0),
('Leer documentación Bootstrap', 'Estudiar sistema de grid y componentes', 'baja', 0),
('Actualizar portfolio', 'Añadir proyectos recientes al portfolio personal', 'media', 0),
('Backup de archivos', 'Hacer copia de seguridad de documentos importantes', 'alta', 1),
('Practicar SQL', 'Resolver ejercicios de consultas complejas', 'media', 0),
('Limpiar escritorio', 'Organizar archivos y carpetas del ordenador', 'baja', 0),
('Reunión con equipo', 'Daily standup meeting a las 10:00', 'alta', 1),
('Investigar frameworks JS', 'Comparar React, Vue y Angular', 'baja', 0),
('Pagar facturas', 'Luz, agua e internet del mes', 'alta', 0);

