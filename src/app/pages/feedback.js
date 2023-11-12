import React, { useState } from 'react';

export default function FeedbackPage() {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // 这里添加发送反馈到后端的代码，例如使用fetch API
        console.log(feedback);
    };

    return (
        <div>
            <h1>User Feedback</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Please enter your feedback here..."
                    rows="4"
                    required
                />
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
}

