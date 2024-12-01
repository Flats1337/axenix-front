from flask import Flask, request
from flask_cors import CORS, cross_origin
import random, time

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api/auth', methods=['GET'])
def Auth():
    username = request.args.get("username")
    password = request.args.get("password")

    message = {"status": "Unauthorized"}, 401
    if username == "1" and password == "1":
        message = {"token": username+password}, 200

    return message

@app.route('/api/checkToken', methods=['GET'])
def CheckToken():
    token = request.args.get("token")

    message = {"status": "Unauthorized"}, 401
    if token == "11":
        message = {"status": "ok"}, 200

    return message


@app.route('/api/addData', methods=['GET'])
def addData():
    token = request.args.get("token")

    message = {"status": "Unauthorized"}, 401
    if token == "11":
        message = {"status": "ok"}, 200

    return message


@app.route('/api/getData', methods=['GET'])
def getData():
    token = request.args.get("token")

    message = {"status": "Unauthorized"}, 401
    if token == "11":
        message = {"status": "ok"}, 200

    return message

app.run(debug=True, port=13337)