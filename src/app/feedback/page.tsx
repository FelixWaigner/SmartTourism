"use client"

import React, { useState } from "react"
import FeedbackForm from "@/components/feedback/FeedbackForm"

export default function Feedback() {
  return (
    <div>
      <h3 className="mt-10 font-bold">Feedback</h3>
      <FeedbackForm />
    </div>
  )
}