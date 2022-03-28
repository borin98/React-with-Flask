from flask import Flask

app = Flask(__name__)

@app.route("/test")
def test():
    return ({"text_example": ["hello World !!", "react with flask is easy", ":D"]})

if(__name__ == "__main__"):
    app.run(debug=True)