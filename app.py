# Import requirements
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)


# try:
#     from config import username
#     from config import password
#     from config import database
#     from config import hostname
# except:
#     print("No config file")



app = Flask(__name__)


# create connection to databse
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

Base = automap_base()


# Create the engine
engine = create_engine("postgresql://master:HJC2019DKSTDH@project.cdgek8t95yas.ap-southeast-2.rds.amazonaws.com:5432/mothersandbabies")

# Create session
session = Session(engine)

# reflect the tables
Base.prepare(engine, reflect=True)

# mapped classes are now created with names by default
# matching that of the table name.
yearCount = Base.classes.yearcount
# Averageage = Base.classes.averageage
# Birthstate = Base.classes.birthstate
# Termbabiescount = Base.classes.termbabiescount
# Babiessexcount = Base.classes.babiessexcount
# adoptionbyageandgender = Base.classes.adoptionbyageandgender


# App config & DB URL
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or ("postgresql://master:HJC2019DKSTDH@project.cdgek8t95yas.ap-southeast-2.rds.amazonaws.com:5432/mothersandbabies")

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)




if __name__ == "__main__":
    app.run(debug=True)
