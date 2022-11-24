import psycopg2
from flask import Flask, render_template
import config
import json
app = Flask(__name__)

def get_db_connection():
    conn = psycopg2.connect(host='localhost',
                            database='olympics',
                            user= config.Username,
                            password= config.Password)
    return conn


@app.route('/')
def index():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(r"""SELECT cs.country, cs.population, cs.gdp, co.summer_total, co.winter_total, co.total_participation, co.total_won
                FROM country_socioeconomic as cs
                INNER JOIN country_olympics as co
                ON cs.country=co.country;""")
    country_olympics = cur.fetchall()
    country_olympics_json = json.dumps(country_olympics)
    # cur.close()
    # conn.close()
    return country_olympics_json

if __name__ == "__main__":
    app.run(debug=True)
