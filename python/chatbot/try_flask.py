from flask import Flask, url_for
from model import ask_chatbot
app = Flask(__name__)

@app.route('/chatbot/<string:question>')
def chatbot(question: str) -> str:
    response = ask_chatbot(question)
    return response

