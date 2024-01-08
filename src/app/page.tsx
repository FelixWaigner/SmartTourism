'use client'
import Link from 'next/link'
import { Button } from 'flowbite-react'


export default function Home() {
  return (
    <div className="flex flex-col mx-auto max-w-[350px] space-y-6 justify-center min-h-screen">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">MalanGo</h1>
        <p className="text-gray-500 dark:text-gray-400">Select your user type to proceed</p>
      </div>
      <div className="flex flex-col space-y-2">
        <Link href='/dashboard'>
          <Button className="w-full flex space-y-2 items-center gap-2">
            Tourist
          </Button>
        </Link>
        <Link href='/gov'>
          <Button className="w-full flex space-y-2 items-center gap-2">
            Government
          </Button>
        </Link>
        <Link href='/business'>
          <Button className="w-full flex space-y-2 items-center gap-2">
            Business
          </Button>
        </Link>
      </div>
    </div>
  )
}

