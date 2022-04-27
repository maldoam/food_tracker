from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://ubuntu:51C7C`q&~yu}118tka5f6)]7%`O3LVEq@localhost/food"
db = SQLAlchemy(app)
CORS(app)

class Event(db.Model):
	product_name = db.Column(db.String(256)
	ingredients_text = db.Column(db.String(4096), nullable = False)

	def __repr__(self):
		return f"Event: {self.description}"

	def __init__(self, description):
		self.description = description

def format_event(event):
	return {
		"description": event.description, 
		"id": event.id, 
		"created_at": event.created_at
	}


# Get single Event
@app.route("/api/events/<id>", methods = ["GET"])
def get_event(id):
	event = Event.query.(.all()
	formatted_event = format_event(event)

	return {"event": formatted_event}


if __name__ == "__main__":
	app.run(debug = True)

