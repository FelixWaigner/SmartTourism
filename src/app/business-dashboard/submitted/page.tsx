'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { SearchIcon } from "@/components/icon/search"
import data from '@/app/data/business-data.json'


export default function Page() {
  // const fetchJoe = async () => {
  //   const response = await fetch('/api/business', {
  //     method: "POST"
  //   })
  //   const data = await response.json()
  //   console.log(data.data)
  // }
  function checkStatus(stats: string){
    if (stats === "Approved") {
      return (
        <div className="text-green-600">
          {stats}
        </div>
      )
    } else if (stats === "Processing") {
      return (
        <div className="text-orange-400">
          {stats}
        </div>
      )
    }
  };

  return (
      <div className="flex flex-col">
      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                placeholder="Search documents..."
                type="search"
              />
            </div>
          </form>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">Submitted Documents</h1>
        </div>
        <div className="border shadow-sm rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {data.map((dat: { title: string; date: string; description: string; category: string; status: string}) => (
              <TableRow key={dat.title}>
                <TableCell className="font-medium">{dat.title}</TableCell>
                <TableCell>{dat.date}</TableCell>
                <TableCell>{dat.description}</TableCell>
                <TableCell>{dat.category}</TableCell>
                <TableCell>{checkStatus(dat.status)}</TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  )
}