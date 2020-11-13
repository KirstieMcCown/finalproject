# Import requirements
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request)


# create connection to databse
# from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine

# # Create the engine
# engine = create_engine("postgresql:///mothersandbabies.db", pool_pre_ping=True)

# # Create session
# session = Session(engine)
# connection = engine.connect()


# Base = automap_base()

# # reflect the tables
# Base.prepare(engine, reflect=True)

# mapped classes are now created with names by default matching that of the table name.
# yearCount = Base.classes.yearcount

app = Flask(__name__)

# Remove tracking modifications
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)

# app.config.from_object(os.environ['APP_SETTINGS'])

# Create the engine
# engine = create_engine("postgresql://master:HJC2019DKSTDH@project.cdgek8t95yas.ap-southeast-2.rds.amazonaws.com:5432/mothersandbabies")


# App config & DB URL
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or ("postgresql:///mothersandbabies")

# SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', '') or ("postgres://fajrsjljuyknwp:9c8f96a71116dcef2ff1f166542724869d8490f7d7e7e52e299b57ae5c5ac133@ec2-34-237-166-54.compute-1.amazonaws.com:5432/dfnqlpg5f66n80")




# Data Routes

@app.route("/yearcount")
def yearcount():
    
    data = pd.read_sql("select * from yearcount")
    # print(data)
    datatojson = data.to_json(orient = "records")
    parsed = json.loads(datatojson)
    returnjson = json.dumps(parsed, indent=4)
    return returnjson


@app.route("/averageage")
def averageage():
    
    data = pd.read_sql("select * from averageage")
    # print(data)
    datatojson = data.to_json(orient = "records")
    parsed = json.loads(datatojson)
    returnjson = json.dumps(parsed, indent=4)
    return returnjson


@app.route("/birthstate")
def birthstate():
    
    data = pd.read_sql("select * from birthstate")
    # print(data)
    datatojson = data.to_json(orient = "records")
    parsed = json.loads(datatojson)
    returnjson = json.dumps(parsed, indent=4)
    return returnjson

@app.route("/termbabiescount")
def termbabiescount():
    
    data = pd.read_sql("select * from termbabiescount")
    # print(data)
    datatojson = data.to_json(orient = "records")
    parsed = json.loads(datatojson)
    returnjson = json.dumps(parsed, indent=4)
    return returnjson

@app.route("/babiessexcount")
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
