import { Button, Label, Textarea } from 'flowbite-react';
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Handle the form submission, e.g., send data to an API
    console.log('Feedback submitted:', feedback);
  };

  return (
    <div className="max-w-md">
      <div className='text-2xl text-center font-bold'>Feedback Form</div>
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your comments" />
      </div>
      <Textarea value={feedback} onChange={e => setFeedback(e.target.value)} id="comment" placeholder="Leave a comment..." required rows={4} />
      <Button onClick={handleSubmit} color='dark' className='mt-5'>Post comments</Button>
    </div>
  );
};

export default FeedbackForm;
