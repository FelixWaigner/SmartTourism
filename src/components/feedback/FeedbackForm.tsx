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
        <button
          className="w-full relative text-white bg-green-400 hover-bg-green-500 focus:outline-none focus:ring-4 focus-ring-green-300 font-medium rounded-full text-sm px-5 py-3.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800 mt-5"
          type="submit"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  )
}

export default FeedbackForm