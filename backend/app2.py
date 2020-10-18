import requests
from src.functions import getCo2, getRecommendation
import json
from flask import Flask, render_template, request, jsonify, make_response
app = Flask(__name__)

valores = {'agua': 1200,
           'electricidad': 8000,
           'gasolina': 2000,
           'gas': 1500}


@app.route('/', methods=['OPTIONS', 'POST'])
def greeting():
    global valores
    if request.method == 'OPTIONS':
        return build_preflight_response()
    elif request.method == 'POST':
        r = request.get_json()
        print(r)
        valores = r
        print(valores)
        values, eq = getCo2(float(r['agua']), float(
            r['electricidad']), float(r['gasolina']), float(r['gas']))
        loaded_json = json.loads(values)
        print("vaaal", loaded_json)
        #print("Values", loaded_json["agua"])
        # query user with req['id']
        for key, value in loaded_json.items():
            print(key, value)
        print(type(loaded_json))

        # for demonstration, we assume the username to be Eric
        # return build_actual_response(jsonify({'agua': loaded_json["agua"], 'electricidad': loaded_json["electricidad"], 'gasolina': loaded_json["gasolina"], 'gas': loaded_json["gascilindro"]}))
        return build_actual_response(jsonify(loaded_json))


@app.route('/recomendaciones', methods=['GET'])
def recomendaciones():
    global valores
    if request.method == 'OPTIONS':
        return build_preflight_response()
    elif request.method == 'GET':
        print("valores puestos para la nueva etapa")
        print(valores)
        advice = getRecommendation(
            float(valores['agua']), float(valores['electricidad']), float(valores['gasolina']), float(valores['gas']))

        for key, value in advice.items():
            print(key, value)

    return build_actual_response(jsonify(advice))


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
    app.run(host='0.0.0.0', debug=True)
