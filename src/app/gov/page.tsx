'use client'
import Link from "next/link";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardContent, Card, CardTitle } from "@/components/ui/card";
import { BarChart } from "@/components/ui/BarChart";
import { FrameIcon } from "@/components/ui/FrameIcon";
import { PieChart } from "@/components/ui/PieChart";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4" href="#">
          <FrameIcon className="w-6 h-6" />
          <span className="sr-only">Density Dashboard</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Home
          </Link>
          <Link className="font-bold" href="#">
            Dashboard
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Reports
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Settings
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button className="rounded-full ml-auto" size="icon" variant="ghost">
            <Avatar className="h-9 w-9">
              <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
              <span className="sr-only">Toggle user menu</span>
            </Avatar>
          </Button>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="max-w-6xl w-full mx-auto grid gap-2">
          <h1 className="font-semibold text-3xl">User Density Dashboard</h1>
          <Card className="p-0 overflow-hidden">
            <CardHeader>
              <CardDescription className="text-sm font-medium">Map Visualization</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <BarChart className="w-full aspect-[16/9]" />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 max-w-6xl w-full mx-auto">
          <Card className="p-0 overflow-hidden">
            <CardHeader>
              <CardDescription className="text-sm font-medium">Average Density</CardDescription>
              <CardTitle className="text-2xl">158 people/sq mi</CardTitle>
            </CardHeader>
          </Card>
          <Card className="p-0 overflow-hidden">
            <CardHeader>
              <CardDescription className="text-sm font-medium">Peak Density</CardDescription>
              <CardTitle className="text-2xl">312 people/sq mi</CardTitle>
            </CardHeader>
          </Card>
          <Card className="p-0 overflow-hidden">
            <CardHeader>
              <CardDescription className="text-sm font-medium">Demographic Information</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart className="w-full aspect-[16/9]" />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}