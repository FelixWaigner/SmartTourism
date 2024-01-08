'use client'
import Link from 'next/link'
import { Button } from 'flowbite-react'


export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-1 min-h-screen justify-center">
        <Link href='/dashboard'>
          <Button color='success'>Login as tourist</Button>
        </Link>
        <Link href='/gov'>
          <Button color='success'>Login as government</Button>
        </Link>
        <Link href='/business'>
          <Button color='success'>Login as business</Button>
        </Link>
    </main>
  )
}
