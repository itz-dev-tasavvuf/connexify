import { SiteHeader } from '@/components/site-header';
import { DashboardNav } from '@/components/dashboard/dashboard-nav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-1 container grid gap-12 md:grid-cols-[200px_1fr] py-8">
        <aside className="hidden md:block">
          <DashboardNav />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}