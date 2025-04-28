import AppLayout from '@/layouts/app-layout';
import { Account, BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import AccountCreateForm from '../create/AccountCreateForm';

export default function AccountEditPage({ account }: { account: Account }) {
    const { data, setData, put, processing, errors } = useForm<Account>({
        ...account,
    });

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Listado de Cuentas', href: '/accounts' },
        { title: 'Edición de Cuenta', href: '' },
    ];

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/accounts/${account.id}`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Editar Cuenta" />
            <div className="flex justify-center p-4">
                <AccountCreateForm data={data} setData={setData} submit={submit} processing={processing} errors={errors} />
            </div>
        </AppLayout>
    );
}
