import { Card } from "@tremor/react";

interface Props {
  supplier: {
    id: string;
    supplier_name: string;
    debt: number;
  };
}

export function SupplierCard({ supplier }: Props) {
  return (
    <div
      className="hover:shadow-xl transition duration-300 ease-in-out"
    >
      <Card
        className="mx-auto max-w-xs rounded-xl shadow-lg bg-white p-4 flex flex-col items-center justify-center"
      >
        <img src="https://t4.ftcdn.net/jpg/02/94/25/71/360_F_294257124_lTMpgGMKp03SjzXnMnWfpogrDw7H46Gf.jpg" alt="Supplier" />
        <h2 className="font-semibold">{supplier.supplier_name}</h2>
        <p>Saldo: {supplier.debt}</p>
      </Card>
    </div>
  );
}