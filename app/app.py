from flask import Flask, render_template, request, redirect, url_for, session, jsonify

app = Flask(__name__)
app.secret_key = "test123"

# Mock user database
users = {
    "admin": {"password": "admin123", "name": "Admin User"},
    "user1": {"password": "pass123", "name": "Test User"}
}

@app.route("/")
def home():
    if "username" in session:
        return render_template("dashboard.html", user=session["username"])
    return render_template("login.html")

@app.route("/login", methods=["POST"])
def login():
    username = request.form["username"]
    password = request.form["password"]
    
    if username in users and users[username]["password"] == password:
        session["username"] = username
        return redirect(url_for("home"))
    return render_template("login.html", error="Invalid credentials")

@app.route("/logout")
def logout():
    session.pop("username", None)
    return redirect(url_for("home"))

@app.route("/api/button-click", methods=["POST"])
def button_click():
    return jsonify({"message": "Button clicked successfully!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)