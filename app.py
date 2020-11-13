# Import requirements
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



app = Flask(__name__)


# create connection to databse
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

Base = automap_base()

# Create the engine
engine = create_engine('postgres://fajrsjljuyknwp:9c8f96a71116dcef2ff1f166542724869d8490f7d7e7e52e299b57ae5c5ac133@ec2-34-237-166-54.compute-1.amazonaws.com:5432/dfnqlpg5f66n80')

# reflect the tables
Base.prepare(engine, reflect=True)

# mapped classes are now created with names by default
# matching that of the table name.
yearcount = Base.classes.yearcount
averageage = Base.classes.averageage
birthstate = Base.classes.birthstate
termbabiescount = Base.classes.termbabiescount
babiessexcount = Base.classes.babiessexcount

# Create session
session = Session(engine)

# App config & DB URL
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or (f"postgresql://{username}:{password}@{hostname}:5432/{database}")

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


# # Data Routes

@app.route("/yearcount", methods=["GET", "POST"])
def yearcount():

    results = db.session.query(yearcount).all()
    return jsonify(results)


@app.route("/averageage", methods=["GET", "POST"])
def averageage():
    
    results = db.session.query(averageage).all()
    return jsonify(results)


@app.route("/birthstate", methods=["GET", "POST"])
def birthstate():
    
      results = db.session.query(birthstate).all()
    return jsonify(results)

@app.route("/termbabiescount", methods=["GET", "POST"])
def termbabiescount():
    
      results = db.session.query(termbabiescount).all()
    return jsonify(results)

@app.route("/babiessexcount", methods=["GET", "POST"])
def babiessexcount():
    
      results = db.session.query(babiessexcount).all()
    return jsonify(results)



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
