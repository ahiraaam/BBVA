# Librería principal, libreria para renderear codigos html
from flask import Flask, render_template, redirect, url_for, request, jsonify
from src.functions import getCo2
import json
from wsgiref.simple_server import make_server

from flask_cors import CORS, cross_origin
from datetime import timedelta
from flask import make_response, request, current_app
from functools import update_wrapper

app = Flask(__name__)


@ app.route('/')  # Decorador de python
def fn_index():

    return render_template('entradaDatos.html')


@ app.route('/resultados', methods=['GET', 'POST'])
def fn_resultados():
    print("Request,", request)
    if request.method == "POST":
        r = request.get_json()
        print("holaaa")
        values, eq = getCo2(float(r['Agua']), float(
            r['Electricidad']), float(r['Gasolina']), float(r['Gas']))
        loaded_json = json.loads(values)
        print(values)
        print(loaded_json)
        print(eq)
        context = {'result': loaded_json, 'co2': eq}
        return build_actual_response(jsonify({'name': 'Eric'}))
    else:
        return redirect(url_for('fn_index'))


def build_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response


def build_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


if __name__ == '__main__':
    app.run(debug=True)
