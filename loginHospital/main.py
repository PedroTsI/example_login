from flask import Flask, jsonify, request, session
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS #pip install -U flask-cors
from datetime import timedelta

import psycopg2 #pip install psycopg2 
import psycopg2.extras

app = Flask(__name__)

app.config['SECRET_KEY'] = 'cairocoders-ednalan'

app.config['PERMANENT_SESSION_LIFETIME'] =  timedelta(minutes=10)
CORS(app) 

DB_HOST = "localhost"
DB_NAME = "hospitalcare"
DB_USER = "postgres"
DB_PASS = "Pedrogmr1"

conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST)  

@app.route('/')
def home():
    passhash = generate_password_hash('cairocoders')
    print(passhash)
    if 'username' in session:
        username = session['username']
        return jsonify({'message' : 'You are already logged in', 'username' : username})
    else:
        resp = jsonify({'message' : 'Unauthorized'})
        resp.status_code = 401
        return resp

@app.route('/login', methods=['POST'])
def login():
    _json = request.json
    _username = _json['username']
    _password = _json['password']
    print(_password)
    # validate the received values
    if _username and _password:
        #check user exists          
        cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

        sql = "SELECT * FROM useraccount WHERE username=%s"
        sql_where = (_username,)

        cursor.execute(sql, sql_where)
        row = cursor.fetchone()
        username = row['username']
        password = row['password']
        if row:
            if check_password_hash(password, _password):
                session['username'] = username
                cursor.close()
                return jsonify({'message' : 'Usuario logado com Sucesso'})
            else:
                resp = jsonify({'message' : 'Bad Request - Senha invalida'})
                resp.status_code = 400
                return resp
    else:
        resp = jsonify({'message' : 'Bad Request - Credenciais Invalidas'})
        resp.status_code = 400
        return resp

@app.route('/logout')
def logout():
    if 'username' in session:
        session.pop('username', None)
    return jsonify({'message' : 'Logout feito com sucesso'})

@app.route('/register', methods=['POST'])
def register():
    _json = request.json
    _username = _json['username']
    _password = _json['password']

    if _username and _password:
        # Verificar se o usuário já existe
        cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

        sql = "SELECT * FROM useraccount WHERE username=%s"
        sql_where = (_username,)

        cursor.execute(sql, sql_where)
        row = cursor.fetchone()

        if row:
            resp = jsonify({'message': 'Bad Request - Usuario já existente'})
            resp.status_code = 400
            return resp
        else:
            # Criar um novo usuário
            hashed_password = generate_password_hash(_password)
            insert_sql = "INSERT INTO useraccount (username, password) VALUES (%s, %s)"
            insert_values = (_username, hashed_password)
            cursor.execute(insert_sql, insert_values)
            conn.commit()
            cursor.close()
            session['username'] = _username
            return jsonify({'message': 'Usuario Registrado com Sucesso.'})
    else:
        resp = jsonify({'message': 'Bad Request - invalid credentials'})
        resp.status_code = 400
        return resp

if __name__ == "__main__":
    app.run()