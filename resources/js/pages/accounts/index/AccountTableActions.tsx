import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Link, useForm } from '@inertiajs/react';
import { Eye, SquarePen, Trash } from 'lucide-react';

interface AccountTableActionsProps {
    accountId: number;
}

export default function AccountTableActions({ accountId }: AccountTableActionsProps) {
    const { delete: destroy } = useForm();

    const handleDelete = () => {
        if (confirm('¿Estás seguro de que quieres eliminar esta cuenta?')) {
            destroy(`/accounts/${accountId}`, {
                onSuccess: () => {},
                onError: (error) => {},
            });
        }
    };

    return (
        <TooltipProvider>
            <div className="flex space-x-2">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link preserveScroll href={`/accounts/${accountId}`} className="text-blue-500 hover:text-blue-700">
                            <Eye />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Ver Cuenta</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link preserveScroll href={`/accounts/${accountId}/edit`} className="text-green-500 hover:text-green-700">
                            <SquarePen />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Editar Cuenta</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
                            <Trash />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Eliminar Cuenta</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    );
}
