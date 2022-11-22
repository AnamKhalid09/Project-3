# 1. import Flask
from flask import Flask, render_template

# 2. Create an app, being sure to pass __name__
app = Flask(__name__)


# 3. Define what to do when a user hits the index route
@app.route('/')
def dash():
   return render_template('dash.html')

if __name__ == '__main__':
    app.run()