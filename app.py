from flask import Flask, render_template
from flask import Flask, jsonify
from sqlalchemy import create_engine
import pandas as pd
from config import username
from config import password
from config import database
from config import hostname
import json

app = Flask(__name__)

# create connection to databse
engine = create_engine(f"postgresql://{username}:{password}@{hostname}:5432/{database}")
connect = engine.connect()

# Data Routes

@app.route("/yearcount")
def yearcount():
    
    data = pd.read_sql("select * from yearcount", connect)
    # print(data)
    datatojson = data.to_json(orient = "records")
    parsed = json.loads(datatojson)
    returnjson = json.dumps(parsed, indent=4)
    return returnjson


@app.route("/averageage")
def averageage():
    
    data = pd.read_sql("select * from averageage", connect)
    # print(data)
    datatojson = data.to_json(orient = "records")
    parsed = json.loads(datatojson)
    returnjson = json.dumps(parsed, indent=4)
    return returnjson


@app.route("/birthstate")
def birthstate():
    
    data = pd.read_sql("select * from birthstate", connect)
    # print(data)
    datatojson = data.to_json(orient = "records")
    parsed = json.loads(datatojson)
    returnjson = json.dumps(parsed, indent=4)
    return returnjson

@app.route("/termbabiescount")
def termbabiescount():
    
    data = pd.read_sql("select * from termbabiescount", connect)
    # print(data)
    datatojson = data.to_json(orient = "records")
    parsed = json.loads(datatojson)
    returnjson = json.dumps(parsed, indent=4)
    return returnjson

@app.route("/babiessexcount")
def babiessexcount():
    
    data = pd.read_sql("select * from babiessexcount", connect)
    # print(data)
    datatojson = data.to_json(orient = "split")
    parsed = json.loads(datatojson)
    returnjson = json.dumps(parsed, indent=4)
    return returnjson



# HTML Page Routes

@app.route("/")
def landing():
    
    return render_template("index.html", template_folder="templates")


@app.route("/index.html")
def index():
    
    return render_template("index.html")

@app.route("/mothers.html")
def mothers():
    
    return render_template("mothers.html")

@app.route("/mothersfullmap.html")
def mothersfullmap():
    
    return render_template("mothersfullmap.html")

@app.route("/babies.html")
def babies():
    
    return render_template("babies.html")

@app.route("/babiesfullmap.html")
def babiesfullmap():
    
    return render_template("babiesfullmap.html")

@app.route("/adoptions.html")
def adoptions():
    
    return render_template("adoptions.html")

@app.route("/adoptionsfullmap.html")
def adoptionsfullmap():
    
    return render_template("adoptionsfullmap.html")

@app.route("/about.html")
def about():
    
    return render_template("about.html")

@app.route("/data.html")
def data():
    
    return render_template("data.html")



if __name__ == "__main__":
    app.run(debug=True)
