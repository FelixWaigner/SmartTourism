from flask import Flask, url_for

app = Flask(__name__)

@app.route('/chatbot/<string:question>')
def chatbot(question: str) -> str:
    print(type(question))
    return question

