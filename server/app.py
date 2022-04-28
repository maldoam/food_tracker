from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://ubuntu:51C7C`q&~yu}118tka5f6)]7%`O3LVEq@localhost/food"
db = SQLAlchemy(app)
CORS(app)

class Event(db.Model):
	product_name = db.Column(db.String(256), nullable = False)
	ingredients_text = db.Column(db.String(4096), nullable = False)

	def __repr__(self):
		return f"Event: {self.description}"

	def __init__(self, description):
		self.description = description

def format_event(event):
	return {
		"product_name": event.product_name,
		"ingredients_text": event.ingredients_text
	}

# Get all Events
@app.route("/api/events/<id>", methods = ["GET"])
def get_events(id):
	events = db.query(Event).filter(Event.ingredients_text.like('%' + id + '%')).all()
	event_list = []

	for event in events:
		event_list.append(format_event(event))

	return {"events": event_list}

if __name__ == "__main__":
	app.run(debug = True)

