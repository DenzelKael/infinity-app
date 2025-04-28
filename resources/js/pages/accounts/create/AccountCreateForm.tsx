import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

type Props = {
    data: {
        name: string;
        description: string;
        balance: number;
        status: boolean;
    };
    setData: (field: string, value: any) => void;
    submit: (e: React.FormEvent) => void;
    processing: boolean;
    errors: Record<string, string>;
};

export default function AccountCreateForm({ data, setData, submit, processing, errors }: Props) {
    const [localErrors, setLocalErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: Record<string, string> = {};

        if (!data.name.trim()) {
            newErrors.name = 'El nombre es obligatorio.';
        }

        if (!data.description.trim()) {
            newErrors.description = 'La descripción es obligatoria.';
        }

        if (isNaN(data.balance) || data.balance < 0) {
            newErrors.balance = 'El monto inicial debe ser un número positivo.';
        }

        if (Object.keys(newErrors).length > 0) {
            setLocalErrors(newErrors);
            return;
        }

        setLocalErrors({});
        submit(e);
    };

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Crear nueva cuenta</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Ingresa el nombre de la cuenta"
                        />
                        {localErrors.name && <div className="text-sm text-red-500">{localErrors.name}</div>}
                        {errors.name && <div className="text-sm text-red-500">{errors.name}</div>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Descripción</Label>
                        <Input
                            id="description"
                            type="text"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            placeholder="Ingresa una descripción"
                        />
                        {localErrors.description && <div className="text-sm text-red-500">{localErrors.description}</div>}
                        {errors.description && <div className="text-sm text-red-500">{errors.description}</div>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="balance">Monto Inicial</Label>
                        <Input
                            id="balance"
                            type="number"
                            value={data.balance}
                            onChange={(e) => setData('balance', parseFloat(e.target.value))}
                            placeholder="Ingresa el monto inicial"
                        />
                        {localErrors.balance && <div className="text-sm text-red-500">{localErrors.balance}</div>}
                        {errors.balance && <div className="text-sm text-red-500">{errors.balance}</div>}
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="status">Activo</Label>
                        <Checkbox id="status" checked={data.status} onCheckedChange={(checked: boolean) => setData('status', checked)} />
                        {errors.status && <div className="text-sm text-red-500">{errors.status}</div>}
                    </div>

                    <div className="grid gap-2">
                        <Button type="submit" disabled={processing} className="w-full">
                            {processing ? 'Creando cuenta...' : 'Crear cuenta'}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
