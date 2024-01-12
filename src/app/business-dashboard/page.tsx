'use client'
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
export default function Page() {
  const { toast } = useToast()
  return (
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <div className="w-full flex-1">
            <h1 className="font-semibold text-lg md:text-2xl">Welcome to MalanGo system</h1>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <h3 className="text-lg font-light md:text-m">Please submit your required documents for Business</h3>
        </main>
      </div>
  )
}

