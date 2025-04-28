<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Account>
 */
class AccountFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->company(),
            'description' => $this->faker->sentence(10),
            'balance' => $this->faker->randomFloat(2, 0, 10000), // dos decimales, entre 0 y 10000
            'status' => $this->faker->boolean(80), // 80% de probabilidad de que sea true
        ];
    }
}
