# Librería principal, libreria para renderear codigos html

from flask import Flask, render_template, redirect, url_for,request
from src.functions import getCo2
import json


app = Flask(__name__)
@app.route('/') # Decorador de python
def fn_index():

    return render_template('entradaDatos.html')

@app.route('/resultados', methods=['GET','POST'])
def fn_resultados():
    print(request.method)
    if request.method == "POST":
        r = request.form
        print(r)
        values,eq = getCo2(float(r['Agua']),float(r['Electricidad']),float(r['Gasolina']),float(r['Gas']))
        loaded_json = json.loads(values)
        print(values)
        print(loaded_json)
        print(eq)
        context = {'result':loaded_json,'co2':eq}
        return render_template('resultados.html',**context)
    else:
        return redirect(url_for('fn_index'))

if __name__ == '__main__':
    app.run(debug=True)

