import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Link, useForm } from '@inertiajs/react';
import { Eye, Trash } from 'lucide-react';

interface AccountTableActionsProps {
    accountId: number;
}

export default function AccountTableActions({ accountId }: AccountTableActionsProps) {
    // Usamos useForm para manejar el formulario de eliminación
    const { delete: destroy } = useForm();

    const handleDelete = () => {
        if (confirm('¿Estás seguro de que quieres eliminar esta cuenta?')) {
            // Llamamos a destroy para realizar la eliminación de la cuenta
            destroy(`/accounts/${accountId}`, {
                onSuccess: () => {
                    alert('Cuenta eliminada');
                    // Aquí podrías redirigir al usuario o actualizar la interfaz según sea necesario
                },
                onError: (error) => {
                    alert('Error al eliminar la cuenta');
                    console.error(error);
                },
            });
        }
    };

    return (
        <TooltipProvider>
            <div className="flex space-x-2">
                <Tooltip>
                    <TooltipTrigger>
                        <Link preserveScroll href={`/accounts/${accountId}`} className="text-link">
                            <Eye />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Ver Cuenta</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <button onClick={handleDelete} className="text-red-500">
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
