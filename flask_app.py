# 1. import Flask
from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
import config

import numpy as np

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

# create the app
app = Flask(__name__)


protocol = 'postgresql'
username = config.Username
password = config.Password
host = 'localhost'
port = 5432
database_name = 'olympics'
# configure the SQLite database, relative to the app instance folder
engine = create_engine(f'{protocol}://{username}:{password}@{host}:{port}/{database_name}')
# initialize the app with the extension
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Passenger = Base.classes.country

# 2. Create an app, being sure to pass __name__
app = Flask(__name__)


# 3. Define what to do when a user hits the index route
@app.route('/')
def index():
   return render_template('index.html')

@app.route('/visualisation1', methods=['GET', 'POST'])
def vis_1():
    return render_template('vis_1.html')

if __name__ == '__main__':
    app.run()