import { Alert, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Account, type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { CircleAlert, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import AccountTable from './AccountTable';

interface AccountProps {
    accounts: Account[];
}

interface PageProps extends Record<string, unknown> {
    flash?: {
        message?: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Listado de Cuentas',
        href: '/accounts',
    },
];

export default function AccountListPage({ accounts }: AccountProps) {
    const { flash } = usePage<PageProps>().props;
    const [showFlash, setShowFlash] = useState(!!flash?.message);

    useEffect(() => {
        if (flash?.message) {
            setShowFlash(true);
            const timer = setTimeout(() => {
                setShowFlash(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [flash?.message]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Accounts" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {showFlash && flash?.message && (
                    <Alert variant={'destructive'}>
                        <CircleAlert />
                        <AlertTitle>{flash.message}</AlertTitle>
                    </Alert>
                )}
                <div className="flex items-center justify-between">
                    <Link href="/accounts/create">
                        <Button className="flex items-center gap-2">
                            <Plus /> Crear nueva cuenta
                        </Button>
                    </Link>
                </div>
                <AccountTable accounts={accounts} />
            </div>
        </AppLayout>
    );
}
