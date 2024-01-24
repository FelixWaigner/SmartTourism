import Link from "next/link"
import { SidebarNav } from "@/components/navigation/business-sidenav"

const sidebarNavItems = [
    {
        title: 'Visitor data',
        href: '/government-dashboard/'
    },
    {
        title: 'Business data',
        href: '/government-dashboard/business-data'
    },
]

export default function BusinessLayout({children,
}: {
  children: React.ReactNode
}) {
    return (
      <>
        <main className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] bg-white">
          <div className="hidden border-r lg:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-6">
                <Link className="flex items-center gap-2 font-semibold" href="/government-dashboard">
                  <span className="">Goverment</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <aside className="px-4">
                  <SidebarNav items={sidebarNavItems} />
                </aside>
              </div>
            </div>
          </div>
          {children}
        </main>
        
      </>
    )
  }