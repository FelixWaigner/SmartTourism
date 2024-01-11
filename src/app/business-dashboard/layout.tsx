import Link from "next/link"
import { SidebarNav } from "@/components/navigation/business-sidenav"

const sidebarNavItems = [
    {
        title: 'Home',
        href: '/business-dashboard'
    },
    {
        title: 'Document',
        href: '/business-dashboard/documents'
    },
    {
        title: 'Submitted Documents',
        href: '/business-dashboard/submitted'
    }
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
                <Link className="flex items-center gap-2 font-semibold" href="/business-dashboard">
                  <span className="">Alun-alun Malang</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                {/* <nav className="grid items-start px-4 text-sm font-medium">
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="/business-dashboard"
                  >
                    Home
                  </Link>
                  <Link
                    className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                    href="/business-dashboard/documents"
                  >
                    Documents
                  </Link>
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="/business-dashboard/submitted"
                  >
                    Submitted Documents
                  </Link>
                </nav> */}
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