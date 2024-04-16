"""from flask import Flask

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body

if __name__ == '__main__':
    api.run()"""

from flask import Flask, request, jsonify, session

app = Flask(__name__)

@app.route('/api/send_data', methods=['POST'])
def send_data():
    data = request.get_json()
    message = data.get('message')
    print(message)
    # Do something with the data
    return """
    yeeherje
    """
    
@app.route('/api/send_ai', methods=['POST'])
def send_ai():
    db = []
    data = request.get_json()
    print(data)
    db.append(data)
    print(db)
    #print(data)
    #print("hahah")
    if "suhu di ruangan saat ini 20°C" in str(request.get_json()):
      print("data suhu ruangan")
    elif 'On lampu B on lampu A' in str(request.get_json()) or 'On lampu A on lampu B' in str(request.get_json()):
      print("lampu a & b on")
    elif "off lampu B off lampu A" in str(request.get_json()):
      print("lampu a & b off")
    elif "on lampu Kamar" in str(request.get_json()):
      print("lampu kamar on")
    elif 'on lampu Tamu' in str(request.get_json()):
      print(data)
      print("lampu tamu on")
    # Do something with the data
    return str(request.get_json())

@app.route('/api/kirim', methods=['POST'])
def kirim():
    data = request.get_json()
    #message = data.get('message2')
    print(data)
    ###############
    # Turn On LED #
    ###############
    if "Option 1" in data:
      print("led on1")
    else:
      print("off 1")
    if "Option 2" in data:
      print("led on2")
    else:
      print("off 2")
    if "Option 3" in data:
      print("led on3")
    else:
      print("off 3")
    if "Option 4" in data:
      print("led on4")
    else:
      print("off 4")
    # Do something with the data
    return "hello2"
    
@app.route('/wheater', methods=['GET'])
def my_profile():
    response_body = {
        "wh": "25",
        "deg" :"°C"
    }

    return response_body    
if __name__ == '__main__':
    app.run(use_reloader=True)
