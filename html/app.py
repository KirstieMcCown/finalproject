from flask import Flask, render_template
from flask import Flask, jsonify
from sqlalchemy import create_engine
import pandas as pd
from config import username
from config import password
from config import database

app = Flask(__name__)

# create connection to databse
engine = create_engine(f"postgresql://{username}:{password}@localhost:5432/{database}")
conn=engine.connect()


# @app.route("/")
# def datatest():
    
    # data = pd.read_sql("SELECT * FROM spcs",conn)
    # #print(data)
    # datatojson = data.to_json(orient="records")
    # #print(type(datatojson))
    # return datatojson

@app.route("/index.html")
def html():
    
    return render_template("index.html")

@app.route("/mothers.html")
def mothers():
    
    return render_template("mothers.html")

@app.route("/babies.html")
def babies():
    
    return render_template("babies.html")

@app.route("/adoptions.html")
def adoptions():
    
    return render_template("adoptions.html")

@app.route("/data.html")
def data():
    
    return render_template("data.html")



if __name__ == "__main__":
    app.run(debug=True)
