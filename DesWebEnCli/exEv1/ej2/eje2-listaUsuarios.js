const { Suspense } = require("react");

const listaUsuarios = [
    {
        "nombre": "Pedro Díaz",
        "notasExamenes": [
            5.2,
            7.2,
            9
        ],
        "notasPracticas": [
            8.9,
            5.9,
            2.2,
            9.9,
            2.9,
            6.3,
            3.1
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "José Martínez",
        "notasExamenes": [
            2.1,
            2.4,
            8.4
        ],
        "notasPracticas": [
            7.9,
            6.2,
            2.1,
            1.6
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Elena Gómez",
        "notasExamenes": [
            1.4,
            5.7,
            9.7
        ],
        "notasPracticas": [
            9.6
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Luis López",
        "notasExamenes": [
            2.2,
            2.9,
            2.3
        ],
        "notasPracticas": [
            8.9,
            6.2,
            5.6,
            6.3,
            1.1,
            5.2
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Carlos Ruiz",
        "notasExamenes": [
            9.2,
            9.5,
            7.3
        ],
        "notasPracticas": [
            6.4,
            1.2,
            8.1
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "José Hernández",
        "notasExamenes": [
            9.3,
            7.3,
            3.6
        ],
        "notasPracticas": [
            9.7,
            3.1,
            2.6,
            5.8,
            7.5,
            8.8,
            4.5
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "José Díaz",
        "notasExamenes": [
            8.6,
            6.1,
            2.7
        ],
        "notasPracticas": [
            4.7,
            8.9,
            2.8,
            8.1,
            8.6,
            1.8,
            10,
            7.7,
            3.9
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Lucía Díaz",
        "notasExamenes": [
            9.3,
            9.2,
            6.5
        ],
        "notasPracticas": [
            6
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Sofía García",
        "notasExamenes": [
            1.1,
            8.5,
            7.7
        ],
        "notasPracticas": [
            6.2,
            9.6,
            3.8
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "María López",
        "notasExamenes": [
            9.4,
            1.6,
            8.3
        ],
        "notasPracticas": [
            8.4,
            6.4,
            7.9,
            6.6,
            8.1,
            7.9,
            5
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Lucía López",
        "notasExamenes": [
            8.4,
            6.7,
            4.1
        ],
        "notasPracticas": [
            3.2,
            5.4,
            2.3,
            8.5,
            0.1,
            8.1,
            4.9,
            8.6,
            4.3
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "José Pérez",
        "notasExamenes": [
            3.7,
            9.8,
            0.6
        ],
        "notasPracticas": [
            9.1,
            0.5,
            7.8,
            5.5,
            7.8,
            1.6,
            9.2,
            7.8
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Carlos Rodríguez",
        "notasExamenes": [
            5.3,
            8.4,
            8.9
        ],
        "notasPracticas": [
            9.4
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "María López",
        "notasExamenes": [
            2,
            5.2,
            8.1
        ],
        "notasPracticas": [
            2.6
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Sofía Ruiz",
        "notasExamenes": [
            5.2,
            8,
            1.1
        ],
        "notasPracticas": [
            7.3,
            6.2,
            3.2,
            7
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Juan Martínez",
        "notasExamenes": [
            1.6,
            2.4,
            4.5
        ],
        "notasPracticas": [
            4.8,
            4,
            3.1,
            5.5,
            3,
            7.7
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Elena Gómez",
        "notasExamenes": [
            0.1,
            6.1,
            8.3
        ],
        "notasPracticas": [
            8.3,
            2.2,
            2.3,
            9.9,
            5.8,
            8.4,
            3.4
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "José Gómez",
        "notasExamenes": [
            7.3,
            4.4,
            8.7
        ],
        "notasPracticas": [
            5.3,
            5,
            6.5,
            8.9,
            0.6,
            5.6,
            5.5,
            0.3,
            9.9
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Juan Martínez",
        "notasExamenes": [
            9.6,
            6.5,
            7.7
        ],
        "notasPracticas": [
            1.9,
            8.9,
            5.9,
            4.7,
            8
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Elena Gómez",
        "notasExamenes": [
            8.9,
            5,
            3.2
        ],
        "notasPracticas": [
            4.7
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "María Hernández",
        "notasExamenes": [
            4.7,
            5.1,
            6.3
        ],
        "notasPracticas": [
            9.1
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Carlos Rodríguez",
        "notasExamenes": [
            2.1,
            0.5,
            0.9
        ],
        "notasPracticas": [
            3.4,
            6.9,
            6.3,
            6.4,
            0.9,
            7.1,
            9.9
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Juan López",
        "notasExamenes": [
            6.8,
            5.7,
            5.2
        ],
        "notasPracticas": [
            3.8,
            0.8,
            6.4,
            8.6,
            8.6,
            4.7,
            7.9,
            1.5,
            3.7
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Elena García",
        "notasExamenes": [
            8.4,
            2.3,
            7.8
        ],
        "notasPracticas": [
            7.7,
            0.6,
            6,
            3.6,
            6,
            6.4,
            0.7
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Luis García",
        "notasExamenes": [
            5.8,
            8.5,
            9.3
        ],
        "notasPracticas": [
            0.5,
            1.5
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "José Ruiz",
        "notasExamenes": [
            1.3,
            7.2,
            4.4
        ],
        "notasPracticas": [
            1.1,
            9.4,
            7.4,
            7.9,
            2.9,
            1.9
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Ana Ruiz",
        "notasExamenes": [
            1.5,
            1.4,
            7.3
        ],
        "notasPracticas": [
            3.3,
            7.1,
            1.9,
            6.2
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Pedro García",
        "notasExamenes": [
            7.6,
            7.4,
            7.9
        ],
        "notasPracticas": [
            9.5,
            8.5,
            1.5,
            2.4,
            5.6
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Luis Sánchez",
        "notasExamenes": [
            5.6,
            5.4,
            6
        ],
        "notasPracticas": [
            3.7,
            1.5,
            2.3,
            9.4
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Elena García",
        "notasExamenes": [
            1.8,
            3.8,
            9.5
        ],
        "notasPracticas": [
            3.2,
            1.8,
            5.2,
            2.4,
            6.6,
            5.4
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Lucía Hernández",
        "notasExamenes": [
            1.2,
            4.3,
            7.7
        ],
        "notasPracticas": [
            5.7,
            7.2,
            7.1,
            7.6
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Elena López",
        "notasExamenes": [
            2.1,
            2.9,
            0.6
        ],
        "notasPracticas": [
            9.9,
            9.2,
            6.5,
            4.4,
            7.6,
            3.5,
            9.1,
            2.5
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Luis Martínez",
        "notasExamenes": [
            8.5,
            7.6,
            3.1
        ],
        "notasPracticas": [
            1.6,
            5.6,
            3.1,
            2,
            5,
            3.3,
            9.3,
            4.3,
            5.7
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Elena Díaz",
        "notasExamenes": [
            9.6,
            3.7,
            5.4
        ],
        "notasPracticas": [
            7.1,
            6.2,
            2.7,
            5.1,
            1.6,
            8.8,
            7,
            3.5,
            8.8,
            3.6
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Juan Rodríguez",
        "notasExamenes": [
            0.3,
            4.5,
            2.8
        ],
        "notasPracticas": [
            0.9,
            3.3,
            1.6,
            2.8,
            2.9
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Luis Ruiz",
        "notasExamenes": [
            1.6,
            6.1,
            9.5
        ],
        "notasPracticas": [
            8.6
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Elena Gómez",
        "notasExamenes": [
            2.2,
            8,
            9.8
        ],
        "notasPracticas": [
            3.5,
            5,
            3.5,
            9
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Ana Martínez",
        "notasExamenes": [
            5.5,
            3.2,
            0.9
        ],
        "notasPracticas": [
            2.5,
            3.1
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Carlos Hernández",
        "notasExamenes": [
            7.8,
            7.5,
            0.6
        ],
        "notasPracticas": [
            1,
            5.6
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Lucía Díaz",
        "notasExamenes": [
            8.3,
            9.4,
            7.5
        ],
        "notasPracticas": [
            5.2,
            3.7,
            2.6,
            6.6,
            6,
            2.2,
            7.1,
            2
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Ana Ruiz",
        "notasExamenes": [
            0.4,
            0.2,
            9.4
        ],
        "notasPracticas": [
            6.4,
            5.6,
            7.7,
            3.4
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Elena Ruiz",
        "notasExamenes": [
            9.4,
            0.3,
            9.3
        ],
        "notasPracticas": [
            3,
            7.4,
            8.6,
            0.8,
            0.6,
            0.4,
            6.3,
            4.2,
            5.7,
            2
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Ana Díaz",
        "notasExamenes": [
            2.8,
            2.8,
            0.3
        ],
        "notasPracticas": [
            2.9,
            3.2,
            6.9,
            0.3,
            4.2,
            3.3,
            1.1,
            9
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Ana Martínez",
        "notasExamenes": [
            8.2,
            8.6,
            9.3
        ],
        "notasPracticas": [
            6.8,
            3.3,
            0.4,
            3.3,
            3.8,
            2.3,
            8.4,
            0.4,
            5.3
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Lucía Martínez",
        "notasExamenes": [
            3.2,
            0.4,
            8.6
        ],
        "notasPracticas": [
            8.5,
            0.1,
            5.2,
            2.9,
            9.2,
            9.4,
            9.2,
            4.5
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Pedro Ruiz",
        "notasExamenes": [
            5.9,
            7.6,
            9
        ],
        "notasPracticas": [
            9.8,
            5.3,
            8.3,
            2.9,
            6.2,
            3.6
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "María Ruiz",
        "notasExamenes": [
            9.9,
            8.8,
            8.5
        ],
        "notasPracticas": [
            9.9,
            0.6,
            0.3,
            2.5,
            0.6,
            1.8
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Sofía Pérez",
        "notasExamenes": [
            2.8,
            0.6,
            9.6
        ],
        "notasPracticas": [
            6.4,
            7.7,
            0.7
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "María Rodríguez",
        "notasExamenes": [
            5.6,
            8.1,
            2.2
        ],
        "notasPracticas": [
            9.2,
            4.2,
            2.6
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "José López",
        "notasExamenes": [
            3.8,
            4.6,
            9.5
        ],
        "notasPracticas": [
            4,
            2.3,
            5.2,
            5.4,
            9.2,
            2,
            8.7,
            6.7
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Lucía Gómez",
        "notasExamenes": [
            4.9,
            5,
            8.7
        ],
        "notasPracticas": [
            4.6,
            6.6,
            9.9,
            9.7,
            4.8,
            3.4,
            1.7
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "José Martínez",
        "notasExamenes": [
            7.1,
            2.9,
            0.6
        ],
        "notasPracticas": [
            8.4,
            7.6,
            2.4,
            9.2,
            9,
            3.4,
            2.3
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Sofía Rodríguez",
        "notasExamenes": [
            4.1,
            5.7,
            6.1
        ],
        "notasPracticas": [
            3.1,
            7.1,
            10,
            2.6
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Elena Díaz",
        "notasExamenes": [
            3,
            0,
            0.4
        ],
        "notasPracticas": [
            1.7
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Elena Díaz",
        "notasExamenes": [
            5.9,
            3,
            0.1
        ],
        "notasPracticas": [
            8.5,
            7.5,
            5.2,
            8.2,
            8.3,
            8.8,
            4.6,
            6.3,
            5.3,
            5.8
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Lucía Pérez",
        "notasExamenes": [
            5.2,
            6.1,
            7.9
        ],
        "notasPracticas": [
            0.7,
            9.2,
            2.1,
            0.3,
            1.8,
            7.1,
            4.1
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Sofía Pérez",
        "notasExamenes": [
            6.1,
            7,
            0.3
        ],
        "notasPracticas": [
            9.7,
            8.5,
            5.4,
            1.4,
            0,
            7,
            9.5
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Juan Rodríguez",
        "notasExamenes": [
            2.6,
            8,
            0.5
        ],
        "notasPracticas": [
            5.7,
            9.8,
            4.6,
            3,
            8.5
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Ana Díaz",
        "notasExamenes": [
            6.1,
            0.7,
            2.8
        ],
        "notasPracticas": [
            9.2,
            7.8,
            7.8,
            9.8,
            4.8,
            2.7,
            7.8,
            6.8
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Elena Pérez",
        "notasExamenes": [
            8.7,
            2.7,
            9.7
        ],
        "notasPracticas": [
            2.4,
            8.7,
            6.1,
            7.2,
            5.7,
            8.2,
            6.5,
            7.1,
            0.5
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Sofía Pérez",
        "notasExamenes": [
            5.7,
            3.3,
            9.5
        ],
        "notasPracticas": [
            2.4
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Ana Martínez",
        "notasExamenes": [
            4.4,
            0.9,
            1.7
        ],
        "notasPracticas": [
            3.8,
            6.1,
            5.6,
            3.9,
            0.8,
            9.4,
            7.7
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "María Ruiz",
        "notasExamenes": [
            1.5,
            2.8,
            2.7
        ],
        "notasPracticas": [
            5.6,
            3.4,
            0.9,
            2.6,
            7.5,
            1.1
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Sofía López",
        "notasExamenes": [
            0.8,
            0.6,
            8.4
        ],
        "notasPracticas": [
            5.8,
            9,
            8.1,
            6.7,
            9.6,
            9.3
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Juan López",
        "notasExamenes": [
            8.9,
            0.4,
            9.3
        ],
        "notasPracticas": [
            6.4,
            5.6,
            2.7,
            6.7
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "José Gómez",
        "notasExamenes": [
            8.4,
            1.1,
            7.7
        ],
        "notasPracticas": [
            4.3,
            5.9,
            0.5,
            4.3,
            4.3,
            8.6,
            1.3,
            2.1,
            8.7,
            7.1
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Lucía Pérez",
        "notasExamenes": [
            3.1,
            8.2,
            1.4
        ],
        "notasPracticas": [
            0.7,
            2,
            2.5
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Luis Díaz",
        "notasExamenes": [
            3.2,
            2.7,
            0.5
        ],
        "notasPracticas": [
            5.6,
            0.7,
            8.2,
            3.2,
            9,
            8.3,
            2.6,
            6.4,
            0.2
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Juan López",
        "notasExamenes": [
            1,
            3.1,
            2.3
        ],
        "notasPracticas": [
            7.8,
            8.7,
            7.4,
            2.6
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Ana Ruiz",
        "notasExamenes": [
            9.6,
            7.3,
            2.8
        ],
        "notasPracticas": [
            3.2,
            7.5,
            5.8,
            7.4,
            1.7,
            5.6,
            7.9,
            8.1,
            0.6,
            9.2
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Lucía López",
        "notasExamenes": [
            4.1,
            7.2,
            3.8
        ],
        "notasPracticas": [
            0.9,
            5.1,
            8,
            8.1,
            5.2,
            8.8
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Juan Pérez",
        "notasExamenes": [
            1.1,
            5.3,
            5
        ],
        "notasPracticas": [
            9.6,
            9.4,
            7.8,
            8.1,
            0.9
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Luis Martínez",
        "notasExamenes": [
            9.7,
            8.3,
            5.5
        ],
        "notasPracticas": [
            0.1,
            5.8,
            8.1,
            8.2
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Sofía Rodríguez",
        "notasExamenes": [
            3.5,
            1.1,
            3.6
        ],
        "notasPracticas": [
            0.3,
            2.9,
            4.5,
            6
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Ana García",
        "notasExamenes": [
            2.5,
            3.8,
            9.6
        ],
        "notasPracticas": [
            5.8,
            7.6,
            2.8,
            5.9,
            6,
            5.3,
            5.3,
            9.5,
            3.2,
            3.7
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Carlos Hernández",
        "notasExamenes": [
            4.9,
            4.3,
            9.4
        ],
        "notasPracticas": [
            2.1,
            7.5,
            1.3,
            4.8,
            9.6,
            8.3,
            0.3,
            2.4
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Sofía Díaz",
        "notasExamenes": [
            0.5,
            6.7,
            1.3
        ],
        "notasPracticas": [
            8.4,
            6
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Carlos Díaz",
        "notasExamenes": [
            6.8,
            6.2,
            6.3
        ],
        "notasPracticas": [
            5
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Elena Sánchez",
        "notasExamenes": [
            7.8,
            6.6,
            3.9
        ],
        "notasPracticas": [
            0.6
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Sofía Martínez",
        "notasExamenes": [
            8.7,
            0.5,
            9.5
        ],
        "notasPracticas": [
            3.6,
            1.6
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Juan López",
        "notasExamenes": [
            5.2,
            4.8,
            7.5
        ],
        "notasPracticas": [
            2.8,
            4.6,
            5,
            2.5,
            0,
            8.2,
            7.7,
            9.9,
            0
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Ana Gómez",
        "notasExamenes": [
            7.7,
            3,
            8.4
        ],
        "notasPracticas": [
            1,
            7
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "José García",
        "notasExamenes": [
            6.4,
            5.1,
            9.4
        ],
        "notasPracticas": [
            4.9,
            3.4,
            5.2,
            1.9,
            9.3,
            4,
            6.3
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "María Martínez",
        "notasExamenes": [
            3.9,
            0.2,
            1.4
        ],
        "notasPracticas": [
            3.9
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Ana Rodríguez",
        "notasExamenes": [
            2.3,
            6.6,
            8.3
        ],
        "notasPracticas": [
            9.2,
            8.7,
            6.4,
            5.7,
            3.9
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Elena Díaz",
        "notasExamenes": [
            4.1,
            9.1,
            3.5
        ],
        "notasPracticas": [
            9.5
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Juan Rodríguez",
        "notasExamenes": [
            2.3,
            0.5,
            2.7
        ],
        "notasPracticas": [
            5.3,
            3.1,
            7,
            0.2,
            6,
            5.6,
            7.7,
            6.5,
            1.8
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Luis Pérez",
        "notasExamenes": [
            0.9,
            5.3,
            8.1
        ],
        "notasPracticas": [
            8.2
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Ana Sánchez",
        "notasExamenes": [
            1,
            4.4,
            1.8
        ],
        "notasPracticas": [
            7.7,
            9.4,
            2.6,
            4.7,
            6.5,
            7.7,
            3.5,
            8.1,
            6.1,
            3.8
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "María García",
        "notasExamenes": [
            6.1,
            1.5,
            4.9
        ],
        "notasPracticas": [
            6.8,
            7.5,
            9.1,
            7.6,
            4.6
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Pedro Hernández",
        "notasExamenes": [
            4.2,
            4.8,
            4.1
        ],
        "notasPracticas": [
            9.3,
            2.5,
            3.4,
            5.1,
            4.1,
            9.4
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Elena Pérez",
        "notasExamenes": [
            2.5,
            4.3,
            1.8
        ],
        "notasPracticas": [
            1.4,
            6.2
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Ana Hernández",
        "notasExamenes": [
            1,
            5,
            1.7
        ],
        "notasPracticas": [
            6.5,
            0.2,
            8.1
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "Luis García",
        "notasExamenes": [
            9.5,
            3.3,
            8
        ],
        "notasPracticas": [
            2.2,
            5.3,
            1.8
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Carlos Díaz",
        "notasExamenes": [
            2.2,
            8.6,
            9
        ],
        "notasPracticas": [
            8.5
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Juan López",
        "notasExamenes": [
            7.5,
            2.6,
            0.7
        ],
        "notasPracticas": [
            2.1,
            6.9,
            0.7,
            1.4,
            6.8
        ],
        "curso": "2DAW-VESPERTINO"
    },
    {
        "nombre": "Pedro Rodríguez",
        "notasExamenes": [
            6.4,
            2.9,
            9.8
        ],
        "notasPracticas": [
            4.3,
            0.1,
            7.6,
            5.3,
            1.9,
            2.6,
            9.1,
            9.9,
            9.4
        ],
        "curso": "2DAW-DIURNO"
    },
    {
        "nombre": "María García",
        "notasExamenes": [
            2.2,
            5.6,
            8.6
        ],
        "notasPracticas": [
            6.5,
            8.1,
            9.8,
            4.4,
            2,
            4,
            4.5,
            0.1
        ],
        "curso": "1DAW"
    },
    {
        "nombre": "Lucía López",
        "notasExamenes": [
            2,
            4.7,
            4
        ],
        "notasPracticas": [
            9.7,
            2.4,
            2.1,
            4.8,
            5.5,
            1.9,
            1.2
        ],
        "curso": "1DAW"
    }
];


function mostrarSuspensos() {
    for(let usuario of listaUsuarios) {
        let notaEM = 0;
        let notaPM = 0;

        for(let nota of usuario["notasExamenes"]) {
            notaEM += nota;
        }

        notaEM /= usuario["notasExamenes"].length;

        if(usuario["notasPracticas"].length < 10) {
            notaPM = 0;
        }
        else {
            for(let nota of usuario["notasPracticas"]) {
                notaEM += nota;
            }
            notaPM /= usuario["notasPracticas"];
        }

        notaF = (notaEM * 0.6) + (notaPM * 0.4);

        let suspenso = true;

        if(notaF < 5) suspenso = true;
        else suspenso = false;

        if(suspenso) console.log(usuario["nombre"] + " es suspenso")
        else console.log(usuario["nombre"] + " es aprobado")
    }


}