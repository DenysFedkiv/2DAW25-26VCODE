const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Datos iniciales - Frutas y Verduras
let productos = [
    {
        id: 1,
        nombre: "Manzana",
        categoria: "fruta",
        precio: 2.00,
        url: "https://upload.wikimedia.org/wikipedia/commons/0/06/Red_apple_fruits.jpg"
    },
    {
        id: 2,
        nombre: "Plátano",
        categoria: "fruta",
        precio: 2.00,
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Cavendish_Banana_DS.jpg"
    },
    {
        id: 3,
        nombre: "Naranja",
        categoria: "fruta",
        precio: 1.80,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/2560px-Orange-Fruit-Pieces.jpg"
    },
    {
        id: 4,
        nombre: "Fresa",
        categoria: "fruta",
        precio: 5.00,
        url: "https://upload.wikimedia.org/wikipedia/commons/1/14/Strawberries-1239306.jpg"
    },
    {
        id: 5,
        nombre: "Uva",
        categoria: "fruta",
        precio: 3.50,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/1200px-Table_grapes_on_white.jpg"
    },
    {
        id: 6,
        nombre: "Sandía",
        categoria: "fruta",
        precio: 1.50,
        url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Watermelon_slices_BNC.jpg"
    },
    {
        id: 7,
        nombre: "Mango",
        categoria: "fruta",
        precio: 4.00,
        url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Mango-21549.jpg"
    },
    {
        id: 8,
        nombre: "Piña",
        categoria: "fruta",
        precio: 2.00,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pineapple.jpg/1200px-Pineapple.jpg"
    },
    {
        id: 9,
        nombre: "Kiwi",
        categoria: "fruta",
        precio: 3.00,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/2560px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg"
    },
    {
        id: 10,
        nombre: "Pera",
        categoria: "fruta",
        precio: 2.50,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Pear_DS.jpg/2560px-Pear_DS.jpg"
    },
    {
        id: 11,
        nombre: "Zanahoria",
        categoria: "verdura",
        precio: 1.00,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/2560px-Vegetable-Carrot-Bundle-wStalks.jpg"
    },
    {
        id: 12,
        nombre: "Brócoli",
        categoria: "verdura",
        precio: 2.50,
        url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Broccoli_and_cross_section_edit.jpg"
    },
    {
        id: 13,
        nombre: "Tomate",
        categoria: "verdura",
        precio: 2.00,
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tomato_%281%29.jpg"
    },
    {
        id: 14,
        nombre: "Lechuga",
        categoria: "verdura",
        precio: 1.50,
        url: "https://upload.wikimedia.org/wikipedia/commons/2/22/Cos_lettuce_2017_A1.jpg"
    },
    {
        id: 15,
        nombre: "Espinaca",
        categoria: "verdura",
        precio: 3.00,
        url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Spinach_Plant_Nourishment_Meal_Fresh_Healthy_Bio.jpg"
    },
    {
        id: 16,
        nombre: "Patata",
        categoria: "verdura",
        precio: 1.20,
        url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Picture_of_many_potatoes.jpg"
    },
    {
        id: 17,
        nombre: "Cebolla",
        categoria: "verdura",
        precio: 1.50,
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Yellow_onions_vegetables.jpg"
    },
    {
        id: 18,
        nombre: "Pimiento",
        categoria: "verdura",
        precio: 2.50,
        url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Green-orange-yellow_bell_pepper_2017_C.jpg"
    },
    {
        id: 19,
        nombre: "Pepino",
        categoria: "verdura",
        precio: 1.80,
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Cucumber_from_Denmark.jpg"
    },
    {
        id: 20,
        nombre: "Calabacín",
        categoria: "verdura",
        precio: 1.80,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Zucchini-572542.jpg/2560px-Zucchini-572542.jpg"
    }
];

// Contador para IDs
let nextId = 21;

// ==================== RUTAS ====================

// GET - Obtener todos los productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

// GET - Obtener productos por categoría (frutas o verduras)
app.get('/productos/categoria/:categoria', (req, res) => {
    const { categoria } = req.params;
    const filtrados = productos.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());
    res.json(filtrados);
});

// GET - Obtener un producto por ID
app.get('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);

    if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(producto);
});

// POST - Crear un nuevo producto
app.post('/productos', (req, res) => {
    const { nombre, categoria, precio, url } = req.body;

    // Validación básica
    if (!nombre || !categoria || precio === undefined || !url) {
        return res.status(400).json({ error: 'Faltan campos obligatorios: nombre, categoria, precio, url' });
    }

    const nuevoProducto = {
        id: nextId++,
        nombre,
        categoria,
        precio: parseFloat(precio),
        url
    };

    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

// PUT - Actualizar un producto completo
app.put('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    const { nombre, categoria, precio, url } = req.body;

    // Validación: PUT requiere todos los campos
    if (!nombre || !categoria || precio === undefined || !url) {
        return res.status(400).json({ error: 'PUT requiere todos los campos: nombre, categoria, precio, url' });
    }

    productos[index] = {
        id,
        nombre,
        categoria,
        precio: parseFloat(precio),
        url
    };

    res.json(productos[index]);
});

// PATCH - Actualizar parcialmente un producto
app.patch('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    const { nombre, categoria, precio, url } = req.body;

    // Actualizar solo los campos proporcionados
    if (nombre !== undefined) productos[index].nombre = nombre;
    if (categoria !== undefined) productos[index].categoria = categoria;
    if (precio !== undefined) productos[index].precio = parseFloat(precio);
    if (url !== undefined) productos[index].url = url;

    res.json(productos[index]);
});

// DELETE - Eliminar un producto
app.delete('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    const eliminado = productos.splice(index, 1)[0];
    res.json({ mensaje: 'Producto eliminado', producto: eliminado });
});

// Ruta raíz - Información de la API
app.get('/', (req, res) => {
    res.json({
        mensaje: 'API Frutería - Gestión de Productos',
        endpoints: {
            'GET /productos': 'Obtener todos los productos',
            'GET /productos/:id': 'Obtener un producto por ID',
            'GET /productos/categoria/:categoria': 'Filtrar por categoría (fruta/verdura)',
            'POST /productos': 'Crear un nuevo producto',
            'PUT /productos/:id': 'Actualizar un producto completo',
            'PATCH /productos/:id': 'Actualizar parcialmente un producto',
            'DELETE /productos/:id': 'Eliminar un producto'
        }
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🍊 API Frutería corriendo en http://localhost:${PORT}`);
    console.log(`📦 ${productos.length} productos cargados (10 frutas, 10 verduras)`);
});
