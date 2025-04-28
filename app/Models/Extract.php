<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Extract extends Model
{
    /** @use HasFactory<\Database\Factories\ExtractFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'account_number',
        'date_range',
        'account_id',
        'file',
        'total_credits',
        'total_debits',
        'amount_in_transit',
        'amount_consulted',
        'frozen_amount',
        'overdrawn_amount',
        'available_amount',
        'total_amount',
    ];

    public function account()
    {
        return $this->belongsTo(Account::class, 'id_account');
    }
}
