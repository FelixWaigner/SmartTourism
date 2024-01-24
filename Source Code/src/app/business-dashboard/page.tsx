'use client'
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function Page() {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [capacity, setCapacity] = useState(0)
  const [visitor, setVisitor] = useState(0)
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const data = {
    title: title,
    date: date,
    businessType: businessType,
    capacity: capacity,
    avgVisitor: visitor,
    category: category,
    description: description,
    status: "Processing"
  }

  const { toast } = useToast()
  const onSubmitDocument = async () => {
    const response = await fetch('/business-dashboard/documents/api', {
      method: "POST",
      body: JSON.stringify(data)
    })
    toast({
      description: "Your document has been submitted successfully",
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
                <Input onChange={(event) => setTitle(event.target.value)} id="title" type="text" placeholder="Enter document title"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input onChange={(event) => setDate(event.target.value)} id="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Business type</Label>
                <Select onValueChange={setBusinessType}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Culinary">Culinary</SelectItem>
                    <SelectItem value="Attractions">Attractions</SelectItem>
                    <SelectItem value="Shopping">Shopping</SelectItem>
                    <SelectItem value="Sports">Sports</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity">Capacity (persons)</Label>
                <Input onChange={(event) => setCapacity(parseInt(event.target.value))} id="capacity" type="number" placeholder="1000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity">Average visitors last month (persons)</Label>
                <Input onChange={(event) => setVisitor(parseInt(event.target.value))} id="capacity" type="number" placeholder="20000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select onValueChange={setCategory}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Human Resources">Human Resources</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Operations">Operations</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea onChange={(event) => setDescription(event.target.value)} id="description" placeholder="Enter document description" />
              </div>
              <div className="flex justify-end">
                <Button onClick={onSubmitDocument}>Submit Document</Button>
              </div>
            </div>
        </div>
      </main>
    </div>
  )
}

