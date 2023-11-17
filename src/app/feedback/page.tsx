"use client"

import React, { useState } from "react"
import FeedbackForm from "@/components/feedback/FeedbackForm"

export default function Feedback() {
  return (
    <div className="mx-auto container min-h-screen bg-contain font-sans subpixel-antialiased">
      <h3 className="mt-10 font-bold">Feedback</h3>
      <FeedbackForm />
    </div>
  )
}