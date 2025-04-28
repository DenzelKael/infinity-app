<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAccountRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'nullable|string|max:255',  // El nombre puede ser nulo si no se actualiza
            'description' => 'nullable|string|max:500',  // Descripción es opcional
            'balance' => 'nullable|numeric|min:0',  // Saldo puede ser nulo si no se actualiza
            'status' => 'nullable|boolean',  // El estado puede ser nulo si no se actualiza
        ];
    }

    public function messages(): array
    {
        return [
            'name.string' => 'El nombre debe ser una cadena de texto.',
            'name.max' => 'El nombre no debe exceder los 255 caracteres.',

            'description.string' => 'La descripción debe ser una cadena de texto.',
            'description.max' => 'La descripción no debe exceder los 500 caracteres.',

            'balance.numeric' => 'El saldo debe ser un número.',
            'balance.min' => 'El saldo no puede ser negativo.',

            'status.boolean' => 'El estado debe ser verdadero o falso.',
        ];
    }
}
