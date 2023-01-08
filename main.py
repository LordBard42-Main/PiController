from flask import Flask, render_template
app = Flask(__name__)
@app.route("/")
def index():
   templateData = {
      'title' : 'Solar Panel Controls',
      'time': timeString
      }
   return render_template('index.html', **templateData)
if __name__ == "__main__":
   app.run(host='0.0.0.0', port=80, debug=True)
