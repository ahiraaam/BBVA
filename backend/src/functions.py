from src.constants import *

import json

def convertMoneyToWaste(water,electricity,oil_cyl,gasoline):
    water_me = water/water_price
    electricity_me =  electricity / electricity_price
    #oil_est_me = oil_est / oil_price_est
    oil_cyl_me = oil_cyl / oil_price_cyl
    gasoline_me = gasoline / gasoline_price
    water_me *= month2year
    electricity_me *= month2year
    #oil_est_me *= month2year
    oil_cyl_me *= month2year
    gasoline_me *= month2year
    return water_me,electricity_me,oil_cyl_me,gasoline_me

def getCo2(water,electricity,oil_cyl,gasoline):
    water, electricity, oil_cyl, gasoline = convertMoneyToWaste(water,electricity,oil_cyl,gasoline)
    water_co2 = water*water_2_co2
    electricity_co2 = electricity*electricity_2_co2
    #oil_est_co2 = oil_est * oil_est_2_co2
    oil_cyl_co2 = oil_cyl * oil_cyl_2_co2
    gasoline_co2 = gasoline * gasoline_2_co2

    co2_eq = sum([water_co2/ton,electricity_co2/ton,oil_cyl_co2/ton,gasoline_co2/ton])
    values = {'agua':water_co2/ton,
              'electricidad':electricity_co2/ton,
              'gas cilindro':oil_cyl/ton,
              'gasolina':gasoline_co2/ton}

    json_object = json.dumps(values, indent=5)

    return json_object,co2_eq






