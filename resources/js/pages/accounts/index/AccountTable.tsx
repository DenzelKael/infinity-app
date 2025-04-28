import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Account } from '@/types';
import AccountTableActions from './AccountTableActions';

interface AccountTableProps {
    accounts: Account[];
}

export default function AccountTable({ accounts }: AccountTableProps) {
    return (
        <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
            <Table>
                <TableCaption>Lista de cuentas.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Saldo</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {accounts.map((account) => (
                        <TableRow key={account.id}>
                            <TableCell className="font-medium">{account.id}</TableCell>
                            <TableCell>
                                <div className="font-semibold">{account.name}</div>
                                <div className="text-muted-foreground text-sm">{account.description}</div>
                            </TableCell>
                            <TableCell>
                                <Badge variant={account.status ? 'default' : 'destructive'}>{account.status ? 'Active' : 'Inactive'}</Badge>
                            </TableCell>
                            <TableCell className="text-right">Bs. {account.balance.toFixed(2)}</TableCell>
                            <TableCell className="text-right">
                                <AccountTableActions accountId={account.id} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
