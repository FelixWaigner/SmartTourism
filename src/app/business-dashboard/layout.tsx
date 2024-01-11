import Link from "next/link"
import { FileIcon } from "@/components/icon/file"
import { LineChartIcon } from "@/components/icon/line-chart"
import { HomeIcon } from "@/components/icon/home"
import { FolderIcon } from "@/components/icon/folder"

const sidebarNavItems = [
    {
        title: 'Home',
        href: '/business-dashboard/home'
    },
    {
        title: 'Document',
        href: '/business-dashboard/document'
    },
    {
        title: 'Analytics',
        href: '/business-dashboard/analytics'
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
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <FolderIcon className="h-6 w-6" />
              <span className="">Alun-alun Malang</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <FileIcon className="h-4 w-4" />
                Documents
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <LineChartIcon className="h-4 w-4" />
                Submitted Documents
              </Link>
            </nav>
          </div>
        </div>
      </div>
            {children}
        </main>
        
      </>
    )
  }