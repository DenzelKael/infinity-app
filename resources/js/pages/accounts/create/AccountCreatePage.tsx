import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import AccountCreateForm from './AccountCreateForm';

export default function AccountCreatePage() {
    const { data, setData, post, processing, errors } = useForm<{
        name: string;
        description: string;
        balance: number;
        status: boolean;
    }>({
        name: '',
        description: '',
        balance: 0,
        status: false,
    });

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Gestión de Cuentas', href: '/accounts' },
        { title: 'Creacion de Nueva Cuenta', href: '' },
    ];

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/accounts');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Accounts" />
            <div className="flex justify-center p-4">
                <AccountCreateForm data={data} setData={setData} submit={submit} processing={processing} errors={errors} />
            </div>
        </AppLayout>
    );
}
