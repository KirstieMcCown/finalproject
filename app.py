# from models import create_classes
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

# from flask import Flask, render_template
# from flask import Flask, jsonify
# from sqlalchemy import create_engine
import pandas as pd
import json
try:
    from config import username
    from config import password
    from config import database
    from config import hostname
except:
    print ("No config file")
# create connection to databse
from flask-sqlalchemy import SQLAlchemy

app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or (f"postgresql://{username}:{password}@{hostname}:5432/{database}")
# engine = create_engine(f"postgresql://{username}:{password}@{hostname}:5432/{database}")
# connect = engine.connect()

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)





# Data Routes

@app.route("/yearcount", methods=["GET", "POST"])
def yearcount():
    
    data = pd.read_sql("select * from yearcount")
    # print(data)
    datatojson = data.to_json(orient = "records")
    parsed = json.loads(datatojson)
    returnjson = json.dumps(parsed, indent=4)
    return returnjson


@app.route("/averageage", methods=["GET", "POST"])
def averageage():
    
    data = pd.read_sql("select * from averageage")
    # print(data)
    datatojson = data.to_json(orient = "records")
    parsed = json.loads(datatojson)
    returnjson = json.dumps(parsed, indent=4)
    return returnjson


@app.route("/birthstate", methods=["GET", "POST"])
def birthstate():
    
    data = pd.read_sql("select * from birthstate")
    # print(data)
    datatojson = data.to_json(orient = "records")
    parsed = json.loads(datatojson)
    returnjson = json.dumps(parsed, indent=4)
    return returnjson

@app.route("/termbabiescount", methods=["GET", "POST"])
def termbabiescount():
    
    data = pd.read_sql("select * from termbabiescount")
    # print(data)
    datatojson = data.to_json(orient = "records")
    parsed = json.loads(datatojson)
    returnjson = json.dumps(parsed, indent=4)
    return returnjson

@app.route("/babiessexcount", methods=["GET", "POST"])
def babiessexcount():
    
    data = pd.read_sql("select * from babiessexcount")
    # print(data)
    datatojson = data.to_json(orient = "split")
    parsed = json.loads(datatojson)
    returnjson = json.dumps(parsed, indent=4)
    return returnjson



# HTML Page Routes

@app.route("/")
def landing():
    
    return render_template("index.html", template_folder="templates")


@app.route("/index.html", methods=["GET", "POST"])
def index():
    
    return render_template("index.html")

@app.route("/mothers.html", methods=["GET", "POST"])
def mothers():
    
    return render_template("mothers.html")

@app.route("/mothersfullmap.html", methods=["GET", "POST"])
def mothersfullmap():
    
    return render_template("mothersfullmap.html")

@app.route("/babies.html", methods=["GET", "POST"])
def babies():
    
    return render_template("babies.html")

@app.route("/babiesfullmap.html", methods=["GET", "POST"])
def babiesfullmap():
    
    return render_template("babiesfullmap.html")

@app.route("/adoptions.html", methods=["GET", "POST"])
def adoptions():
    
    return render_template("adoptions.html")

@app.route("/adoptionsfullmap.html", methods=["GET", "POST"])
def adoptionsfullmap():
    
    return render_template("adoptionsfullmap.html")

@app.route("/about.html", methods=["GET", "POST"])
def about():
    
    return render_template("about.html")

@app.route("/data.html", methods=["GET", "POST"])
def data():
    
    return render_template("data.html")



if __name__ == "__main__":
    app.run(debug=True)
