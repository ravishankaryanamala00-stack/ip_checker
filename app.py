from flask import Flask, request, jsonify, render_template
import socket

app = Flask(__name__, template_folder="templates", static_folder="static")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/check-ip")
def check_ip():
    ip = request.args.get("ip")
    try:
        socket.gethostbyaddr(ip)
        status = "✅ Valid / Reachable"
    except Exception as e:
        status = f"❌ Invalid or Unreachable ({str(e)})"
    return jsonify({"status": status})

if __name__ == "__main__":
    app.run(debug=True)