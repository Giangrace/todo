from flask import Flask, jsonify, render_template
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/status')
def status():
    return jsonify({
        'status': 'running',
        'platform': 'Wasmer Edge',
        'message': 'Python app is live!'
    })

@app.route('/api/info')
def info():
    return jsonify({
        'python_version': '3.11',
        'framework': 'Flask',
        'deployed_on': 'Wasmer'
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
