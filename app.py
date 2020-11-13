# from models import create_classes
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)


try:
    from config import username
    from config import password
    from config import database
    from config import hostname
except:
    print("No config file")
    
# create connection to databse
from flask_sqlalchemy import SQLAlchemy
# import pandas as pd
# import json
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

engine = create_engine(DB_URI)

session = Session(engine)


app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or (f"postgresql://{username}:{password}@{hostname}:5432/{database}")

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
Pet = create_classes(db)



# # Data Routes

@app.route("/yearcount", methods=["GET", "POST"])
def yearcount():
    results = db.session.query(yearcount).all()
    return jsonify(yearcount)

    # data = pd.read_sql("select * from yearcount")
    # # print(data)
    # datatojson = data.to_json(orient = "records")
    # parsed = json.loads(datatojson)
    # returnjson = json.dumps(parsed, indent=4)
    # return returnjson


# @app.route("/averageage")
# def averageage():
    
#     data = pd.read_sql("select * from averageage")
#     # print(data)
#     datatojson = data.to_json(orient = "records")
#     parsed = json.loads(datatojson)
#     returnjson = json.dumps(parsed, indent=4)
#     return returnjson


# @app.route("/birthstate")
# def birthstate():
    
#     data = pd.read_sql("select * from birthstate")
#     # print(data)
#     datatojson = data.to_json(orient = "records")
#     parsed = json.loads(datatojson)
#     returnjson = json.dumps(parsed, indent=4)
#     return returnjson

# @app.route("/termbabiescount")
# def termbabiescount():
    
#     data = pd.read_sql("select * from termbabiescount")
#     # print(data)
#     datatojson = data.to_json(orient = "records")
#     parsed = json.loads(datatojson)
#     returnjson = json.dumps(parsed, indent=4)
#     return returnjson

# @app.route("/babiessexcount")
# def babiessexcount():
    
#     data = pd.read_sql("select * from babiessexcount")
#     # print(data)
#     datatojson = data.to_json(orient = "split")
#     parsed = json.loads(datatojson)
#     returnjson = json.dumps(parsed, indent=4)
#     return returnjson



# HTML Page Routes

@app.route("/")
def landing():
    
    return render_template("index.html")




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
