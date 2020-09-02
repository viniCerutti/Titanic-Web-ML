from flask import Flask, render_template
from flask import request, jsonify
from flask_cors import CORS, cross_origin
import server.logistic_regression as lr
import os

app = Flask(__name__, static_url_path="/", static_folder='./client/build')
CORS(app)

@app.route("/predict",methods=['POST'])
def predict():
	model = lr.LogisticModel('server/model.pkl')
	data = {}
	if request.method == 'POST':
		data = model.predict(request.get_json())
	return jsonify(data)

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
	app.run()