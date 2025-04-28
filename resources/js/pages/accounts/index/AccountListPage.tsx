import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Account, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import AccountTable from './AccountTable';

interface AccountProps {
    accounts: Account[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Gestión de Cuentas',
        href: '/accounts',
    },
];

export default function AccountListPage({ accounts }: AccountProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Accounts" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <a href="/accounts/create">
                        <Button className="flex items-center gap-2">
                            <Plus /> Crear nueva cuenta
                        </Button>
                    </a>
                </div>
                <AccountTable accounts={accounts} />
            </div>
        </AppLayout>
    );
}
