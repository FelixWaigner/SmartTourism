// src/pages/api/feedback.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        // 处理POST请求
        console.log(req.body); // 您需要在这里处理反馈信息
        // 响应请求
        res.status(200).json({ message: 'Feedback received' });
    } else {
        // 处理其他请求类型
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

