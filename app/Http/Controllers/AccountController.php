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
        return to_route('accounts.index');
    }

    public function show(Account $account)
    {
        return inertia('accounts/show/AccountPage', ['account' => $account]);
    }

    public function edit(Account $account)
    {
        //
    }

    public function update(UpdateAccountRequest $request, Account $account)
    {
        //
    }

    public function destroy(Account $account)
    {
        $account->delete();
        return to_route('accounts.index');
    }
}
