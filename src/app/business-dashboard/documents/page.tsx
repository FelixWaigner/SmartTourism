'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import data from '@/app/data/business-data.json'
import { promises as fs } from "fs"

export default function Page() {
  const { toast } = useToast()
  const tempData = JSON.parse(JSON.stringify(data))

  const newData = {
    "title": "test",
    "date": "2024-01-05",
    "businessType": "Culinary",
    "capacity": 500,
    "category": "Finance",
    "description": "Annual report",
    "status": "Processing"
  }

  tempData.push(newData)
  fs.writeFile("@/app/data/business-data.json", JSON.stringify(tempData), function(err: any) {
    if (err) {
        console.log(err);
    }
  })

  function click(){
    toast({
      description: "Your message has been sent.",
    })
  }
  return (
      <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">Submit Document</h1>
        </div>
        <div className="border shadow-sm rounded-lg">
            <div className="grid gap-4 p-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" type="text" placeholder="Enter document title"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Business type</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="culinary">Culinary</SelectItem>
                    <SelectItem value="attractions">Attractions</SelectItem>
                    <SelectItem value="shopping">Shopping</SelectItem>
                    <SelectItem value="sports ">Sports</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity">Capacity (persons)</Label>
                <Input id="capacity" type="number" placeholder="1000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="hr">Human Resources</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter document description" />
              </div>
              <div className="flex justify-end">
                <Button onClick={click}>Submit Document</Button>
              </div>
            </div>
        </div>
      </main>
    </div>
  )
}