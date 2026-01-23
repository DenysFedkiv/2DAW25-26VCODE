<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Producto>
 */
class ProductoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // fake()->sentence(2): Crea una frase de 2 palabras (ej: "Zapatos Rojos")
            'nombre' => fake()->sentence(2),
            // fake()->text(): Crea un párrafo de texto aleatorio
            'descripcion' => fake()->text(),
            // fake()->randomFloat(2, 5, 100): Decimal con 2 decimales, entre 5 y 100
            'precio' => fake()->randomFloat(2, 5, 100),
            // fake()->numberBetween(0, 50): Número entero
            'stock' => fake()->numberBetween(0, 50),
        ];
    }
}
