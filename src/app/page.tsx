'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'flowbite-react'


export default function Home() {
  return (
    <main className="flex flex-row items-center p-24">
      <div className="mx-auto flex flex-row space-x-4">
        <Link href='/login'>
          <Button color='dark'>Login</Button>
        </Link>
        <Link href='/signup'>
          <Button color='dark'>Signup</Button>
        </Link>
      </div>
    </main>
  )
}
