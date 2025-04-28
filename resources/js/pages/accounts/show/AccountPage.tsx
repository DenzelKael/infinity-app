import { Badge } from '@/components/ui/badge';
import AppLayout from '@/layouts/app-layout';
import { Account } from '@/types';
import { Head } from '@inertiajs/react';

interface AccountPageProps {
    account: Account;
}

const breadcrumbs = [
    {
        title: 'Listado de Cuentas',
        href: '/accounts',
    },
    {
        title: 'Detalles de Cuenta',
        href: '',
    },
];

export default function AccountPage({ account }: AccountPageProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Cuenta: ${account.name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex justify-center p-4">
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold">{account.name}</h2>
                        <p className="text-sm text-gray-600">{account.description}</p>
                        <div className="mt-2 flex justify-between text-lg font-medium">
                            <span>Balance:</span>
                            <span>${account.balance}</span>
                        </div>
                        <div className="mt-2 flex justify-between text-lg font-medium">
                            <span>Estado:</span>
                            <Badge variant={account.status ? 'default' : 'destructive'}>{account.status ? 'Activo' : 'Inactivo'}</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
