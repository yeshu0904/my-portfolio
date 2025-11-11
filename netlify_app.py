from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from datetime import datetime
import os

app = Flask(__name__, 
            static_folder='static',
            template_folder='templates')

CORS(app)
app.config['SECRET_KEY'] = 'your-secret-key'

# Your existing routes here...
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    try:
        data = request.get_json()
        
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'success': False, 'message': f'Please fill in {field}'}), 400
        
        message_data = {
            'name': data['name'],
            'email': data['email'],
            'subject': data['subject'],
            'message': data['message'],
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }
        
        print(f"📧 New contact: {message_data}")
        
        return jsonify({
            'success': True,
            'message': 'Thank you for your message! I will get back to you soon.'
        }), 200
        
    except Exception as e:
        return jsonify({'success': False, 'message': 'Server error'}), 500

# For Netlify serverless functions
def handler(event, context):
    return app(event, context)

if __name__ == '__main__':
    app.run(debug=True)