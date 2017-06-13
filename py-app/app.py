import os
import sys
import json
from flask import Flask, request, abort, jsonify
from flask_cors import cross_origin

import pymongo
from bson.objectid import ObjectId
from mods.utility import set_password


app = Flask(__name__)

db_url = os.environ['SBCON_DB']

@app.route('/', methods=['GET'])
@cross_origin()
def index():
    return  "Hello World!"

def save_data(data, collection):
	client = pymongo.MongoClient(db_url)
	db = client.get_default_database()
	coll = db[collection]
	id  = coll.insert_one(data)
	print("Saved")
	client.close()

def newEncoder(o):
    if type(o) == ObjectId:
        return str(o)
    return o.__str__


def get_data(collection):
	client = pymongo.MongoClient(db_url)
	db = client.get_default_database()
	coll = db[collection]
	return json.dumps({"data":list(coll.find())},  default=newEncoder )




@app.route('/api/v1.0/teams/', methods=['POST', 'GET', 'PUT'])
@cross_origin()
def create_team():
	if request.method == "GET":
		return get_data('teams')

	elif request.method =="POST":
		if not request.json and not "data" in request.json: 
			abort(400)

		try:
			res = request.get_json()
			res = res.get('data')
			pswd = set_password(res.get('password'))
			data = {
				"name": res.get('name'),
				"picture_url" : res.get('picture_url'),
				"password": pswd,
				"members" : res.get('members'),
				"desc": res.get('desc')
			}
			save_data(data, "teams")
			return (jsonify({"response":"success"}), 200)

		except Exception as e:
			print(e)
			return {"error": "Invalid Parameters"}
    

if __name__ == '__main__':
    app.run()



