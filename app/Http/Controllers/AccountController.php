<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Http\Requests\StoreAccountRequest;
use App\Http\Requests\UpdateAccountRequest;

class AccountController extends Controller
{
    public function index()
    {
        $accounts = Account::all();
        return inertia('accounts/index/AccountListPage', ['accounts' => $accounts]);
    }

    public function create()
    {
        return inertia('accounts/create/AccountCreatePage');
    }

    public function store(StoreAccountRequest $request)
    {
        Account::create($request->validated());
        return to_route('accounts.index')->with('message', 'Cuenta creada correctamente.');
    }

    public function show(Account $account)
    {
        return inertia('accounts/show/AccountPage', ['account' => $account]);
    }

    public function edit(Account $account)
    {
        return inertia('accounts/edit/AccountEditPage', ['account' => $account]);
    }

    public function update(UpdateAccountRequest $request, Account $account)
    {
        $data = $request->only(['name', 'description', 'balance', 'status']);
        dd($data);
        $account->update(array_filter($data));

        return to_route('accounts.index')->with('message', 'Cuenta actualizada correctamente.');
    }


    public function destroy(Account $account)
    {
        $account->delete();
        return to_route('accounts.index')->with('message', 'Cuenta eliminada correctamente.');
    }
}
