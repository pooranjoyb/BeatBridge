from flask import Flask

from constants import Server

app = Flask(__name__)

@app.get('/')
def hello_world():
    return Server.INTRO

if __name__ == '__main__':
    app.run(debug=True)
