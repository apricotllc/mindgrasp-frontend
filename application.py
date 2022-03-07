
from flask import Flask, jsonify
from flask import render_template, redirect
from flask import request
from flask import render_template_string
from flask import send_from_directory
from flask_cors import CORS
import traceback

'''

 > Use the following to run server locally:

            pip3.7 install -r requirements.txt

            # mac
            export FLASK_APP=application.py
            python3.7 -m flask run

            # windows
            set FLASK_APP=application.py
            py -3.7 -m flask run

'''


app = Flask(__name__, static_folder='static', template_folder='templates')


@app.route('/', methods=['GET'])
def blank():
    return redirect("home", code=302)

@app.route('/mindgrasp-home', methods=['GET'])
def home():
    if request.method == "GET":
        return render_template("mindgrasp-home.html")

@app.route('/apricot-home', methods=['GET'])
def welcome():
    if request.method == "GET":
        return render_template("apricot-home.html")