import { SideBar, TopBar } from "@/modules/dashboard";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SideBar />

      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <TopBar />
        <div className="px-6 lg:px-8 py-6 lg:py-8">
          {children}
        </div>
      </div>

    </div>
  );
}