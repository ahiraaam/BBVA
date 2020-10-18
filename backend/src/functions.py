from src.constants import *

import json


def convertMoneyToWaste(water, electricity, oil_cyl, gasoline):
    water_me = water/water_price
    electricity_me = electricity / electricity_price
    #oil_est_me = oil_est / oil_price_est
    oil_cyl_me = oil_cyl / oil_price_cyl
    gasoline_me = gasoline / gasoline_price
    water_me *= month2year
    electricity_me *= month2year
    #oil_est_me *= month2year
    oil_cyl_me *= month2year
    gasoline_me *= month2year
    return water_me, electricity_me, oil_cyl_me, gasoline_me


def getCo2(water, electricity, oil_cyl, gasoline, co2_limit=20):
    water, electricity, oil_cyl, gasoline = convertMoneyToWaste(
        water, electricity, oil_cyl, gasoline)
    water_co2 = (water*water_2_co2)/ton
    electricity_co2 = (electricity*electricity_2_co2)/ton
    oil_cyl_co2 = (oil_cyl * oil_cyl_2_co2)/ton
    gasoline_co2 = (gasoline * gasoline_2_co2)/ton

    co2_eq = sum([water_co2, electricity_co2, oil_cyl_co2, gasoline_co2])

    if co2_eq > co2_limit:
        co2_eq = co2_eq

    values = {'PorcentajeAgua': round((water_co2/co2_eq)*100, 2),
              'PorcentajeElectricidad': round((electricity_co2 / co2_eq) * 100, 2),
              'PorcentajeGas': round((oil_cyl_co2 / co2_eq) * 100, 2),
              'PorcentajeGasolina': round((gasoline_co2 / co2_eq) * 100, 2),
              'agua CO2': water_co2,
              'electricidad CO2': electricity_co2,
              'gas cilindro CO2': oil_cyl_co2,
              'gasolina CO2': gasoline_co2,
              'CO2EquivalenteAnual': round(co2_eq, 2)
              }

    json_object = json.dumps(values, indent=5)

    return json_object, co2_eq


def getRecommendation(waterCost, electricityCost, oilCost, gasolineCost):

    if waterCost < 5000:
        waterAdvice = """
        Recuerda aprovechar al máximo la iluminación natural. 
        Utiliza los toldos para evitar el impacto del sol. 
        Reemplaza tus bombillas incandescentes por LED.
        Monitorea el estado de maquinaria y electrónicos. 
        Manten el aire acondicionado cercano a los 20°C.
        Aprende más sobre el internet de las cosas y 
        su eficiencia energética aquí: 
        https://www.bbva.com/es/internet-las-cosas-iot/
                        """
    else:
        waterAdvice = """
        ¿Te imaginas salvar la vida de miles árboles al año? 
        Puedes reducir hasta en un 99% tus emisiones de CO2 
        relacionadas a tu consumo eléctrico implementando un 
        sistema solar en tu techo. Solicita tu rédito para 
        Sistemas Fotovoltaicos con BBVA aquí:
                    """

    if electricityCost < 1000:
        electricityAdvice = """
        Instala grifos con temporizador o detector de movimientos para evitar que queden abiertos.
        Coloca en los grifos difusores y limitadores de presión para disminuir la cantidad de agua utilizada.
        Motiva a tus colaboradores a ahorrar el agua como propósito personal y empresarial.
        Instala sistemas para reutilizar el agua.
        Da clic aquí para obtener más consejos relacionados al ahorro del agua: https://www.bbva.com/es/trucos-ahorrar-agua/
        """
    else:
        electricityAdvice = """
        ¡Eres capaz de ahorrar el agua suficiente para proveer a 
        cientos de escuelas en el país con este recurso! 
        Te proponemos instalar un sistema de purificación, 
        captación pluvial y manejo de aguas residuales a través 
        de la adquisión de un sistema completo. Da clic aquí para 
        cotizar el financiamiento adecuado con nosotros y reducir 
        significativamente la huella hídrica de tu empresa: 
        """

    if gasolineCost < 10000:
        gasolineAdvice = """
        Comparte tus viajes a la oficina.
        Monitorea el estado de los vehículos que utilices.
        Analiza y optimiza las rutas de los colaboradores.
        Reduce el tiempo de utilización del aire acondicionado.
        Facilita el acceso para ciclistas en las inmediaciones 
        de la empresa, premiando a quienes más se comprometan a 
        llegar por este medio.
        https://www.bbva.mx/educacion-financiera/seguros/los-tips-para-gastar-menos-combustible.html
        """
    else:
        gasolineAdvice = """
        Juntos hacemos la diferencia. En lugar de incentivar 
        a cada colaborador a llevar su coche al trabajo o 
        llegar en UBER considera un transporte corporativo 
        eléctrico que genere distintas rutas en las que puedan
        llegar seguros, a salvo y a tiempo. 
        Encuentra aquí el crédito para autos híbridos 
        especial para tu empresa:
        """

    oilAdvice = """
    Revisar el estado de las instalaciones de gas.
    Concentrar el calor en las zonas que lo necesiten.
    Colocar grifos en posición de agua fría en aquellos 
    lugares donde no se requiera el agua caliente.
    Utiliza equipos que sean eficientes en el consumo de gas.
    Cambia los equipos como estufas, calefactores o 
    calentadores de agua que utilicen piloto de flama continua, 
    por pilotos electrónicos, que solo se activan al momento de uso del gas.
    """

    _, co2 = getCo2(waterCost*0.7, electricityCost *
                    0.7, oilCost*0.7, gasolineCost*0.7)

    print("nuevo co2", co2)
    values = {'consejo_agua': waterAdvice,
              'consejo_electricidad': electricityAdvice,
              'consejo_gas': oilAdvice,
              'consejo_gasolina': gasolineAdvice,
              'CO2_nuevo': round(co2, 2)
              }

    return values
