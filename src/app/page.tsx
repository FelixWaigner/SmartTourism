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
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Link href="/login">
            <span className="link">Login</span>
          </Link>
        </div>

        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Link href="/signup">
            <span className="link">Sign Up</span>
          </Link>
        </div>
      </div> */}

    </main>
  )
}
