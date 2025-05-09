import AppLayout from '@/layouts/app-layout';
import { Account, BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import AccountCreateForm from './AccountCreateForm';

type AccountFormData = Omit<Account, 'id'>;

export default function AccountCreatePage() {
    const { data, setData, post, processing, errors } = useForm<AccountFormData>({
        name: '',
        description: '',
        balance: 0,
        status: false,
    });

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Listado de Cuentas', href: '/accounts' },
        { title: 'Creación de Nueva Cuenta', href: '' },
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
