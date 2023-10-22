from flask import Flask
from constants import ServerConstants

app = Flask(__name__)

@app.get('/')
def hello_world():
    return ServerConstants.INTRO

if __name__ == '__main__':
    app.run(debug=True)
