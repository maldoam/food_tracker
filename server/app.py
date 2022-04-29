from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://ubuntu:51C7C`q&~yu}118tka5f6)]7%`O3LVEq@localhost/food"
db = SQLAlchemy(app)
CORS(app)

class Food(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(256), nullable = False)
    ingredients_text = db.Column(db.String(4096), nullable = False)

    def __repr__(self):
        return f"Food: {self.product_name}"

    def __init__(self, product_name):
        self.product_name = product_name

def format_food(food):
    return {
        "id": food.id,
        "product_name": food.product_name,
        "ingredients_text": food.ingredients_text
    }

# Get Foods based on ingredient
@app.route("/api/food/<ingredient>", methods = ["GET"])
def get_foods(ingredient):
    foods = db.query(Food).filter(Food.ingredients_text.like('%' + ingredient + '%')).all()
    foods_list = []

    for food in foods:
        foods_list.append(format_food(food))

    return {"foods": foods_list}

if __name__ == "__main__":
    app.run(debug = True)

