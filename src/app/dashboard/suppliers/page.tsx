import { SupplierList } from "@/modules/suppliers/components/SupplierList";
import { TopMenu } from "@/modules/suppliers/components/TopMenu";

export const metadata = {
  title: 'Suppliers Page',
  description: 'Suppliers Page',
};

export default function SuppliersPage() {

  return (
    <div className="flex flex-col gap-4">
      <TopMenu />
      <SupplierList />
    </div>
  );
}