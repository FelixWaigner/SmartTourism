import { Button, Label, Textarea } from "flowbite-react"
import React, { useState } from "react"

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("")

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    // Handle the form submission, e.g., send data to an API
    console.log("Feedback submitted:", feedback)
  }

  return (
    <div className="mx-auto mt-5 mb-24 container">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Your comments" />
        </div>
        <Textarea
          id="comment"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Please enter your feedback here..."
          rows={4}
          required
        />
        <div className="mt-2">
          <Button color="success" type="submit" pill>Submit Feedback</Button>
        </div>
      </form>
    </div>
  )
}

export default FeedbackForm