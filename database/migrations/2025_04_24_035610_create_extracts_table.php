<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('extracts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('account_number');
            $table->string('date_range');
            $table->foreignId('account_id')
                ->constrained('accounts');
            $table->string('file');
            $table->float('total_credits');
            $table->float('total_debits');
            $table->float('amount_in_transit');
            $table->float('amount_consulted');
            $table->float('frozen_amount');
            $table->float('overdrawn_amount');
            $table->float('available_amount');
            $table->float('total_amount');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('extracts');
    }
};
