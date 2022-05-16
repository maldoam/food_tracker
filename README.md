# Food Tracker
A web application that tracks Food Allergies <br>
uses Flask for the backend and React.js for the frontend <br>
<br>
**Live at http://3.91.176.125/ until December 2022** <br>

The data was sourced from the Open food facts database at https://world.openfoodfacts.org/data as a JSONL file

## Installation requirements
- Node.js and npm
- Python pip

## How to install
- Install `flask`, `flask-sqlalchemy`, `Flask-Cors` using pip
- In `/client/` 
  - Delete `package-lock.json` and the `/node_modules/` folder
  - run `npm install`

## How to run
- In `/server/`
  - run `python3 app.py` to start backend
- In `/client/`
  - run `npm start` to start frontend
