# # Data Routes

@app.route("/yearcount", methods=["GET", "POST"])
def yearcount():

    results = db.session.query(yearCount).all()
    return Response(generate(), jsonify(results))


# @app.route("/averageage", methods=["GET", "POST"])
# def averageage():
    
#     results = db.session.query(Averageage).all()
#     return jsonify(results)


# @app.route("/birthstate", methods=["GET", "POST"])
# def birthstate():
    
#     results = db.session.query(Birthstate).all()
#     return jsonify(results)

# @app.route("/termbabiescount", methods=["GET", "POST"])
# def termbabiescount():
    
#     results = db.session.query(Termbabiescount).all()
#     return jsonify(results)

# @app.route("/babiessexcount", methods=["GET", "POST"])
# def babiessexcount():
    
#     results = db.session.query(Babiessexcount).all()
#     return jsonify(results)


# @app.route("/adoptionbyageandgender", methods=["GET", "POST"])
# def adoptionbyageandgender():
    
#     results = db.session.query(adoptionbyageandgender).all()
#     return jsonify(results)



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

