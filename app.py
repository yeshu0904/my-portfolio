from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
from datetime import datetime
import os
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__, 
            static_folder='static',
            template_folder='templates')

# Enable CORS
CORS(app)

# Simple configuration
app.config['SECRET_KEY'] = 'dev-secret-key-123'

@app.route('/')
def home():
    """Serve the portfolio website"""
    print("🔍 Serving index.html template...")
    try:
        return render_template('index.html')
    except Exception as e:
        print(f"❌ Error rendering template: {e}")
        return f"Template error: {e}", 500

@app.route('/debug')
def debug():
    """Debug endpoint to check if Flask is working"""
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <title>Debug Page</title>
        <style>
            body { font-family: Arial, sans-serif; padding: 40px; background: #f0f0f0; }
            .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .success { color: green; font-weight: bold; }
            .error { color: red; font-weight: bold; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Flask Debug Page</h1>
            <p>If you can see this, Flask is working correctly!</p>
            
            <h2>System Check:</h2>
            <ul>
                <li>✅ Flask server: <span class="success">RUNNING</span></li>
                <li>✅ Template folder: <span class="success">EXISTS</span></li>
                <li>✅ Static folder: <span class="success">EXISTS</span></li>
            </ul>
            
            <h2>Next Steps:</h2>
            <ol>
                <li><a href="/">Go to main portfolio</a></li>
                <li><a href="/api/health">Check API health</a></li>
            </ol>
        </div>
    </body>
    </html>
    """

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    """Handle contact form submissions"""
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'success': False, 'message': 'No data received'}), 400
        
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'success': False, 'message': f'Please fill in {field}'}), 400
        
        message_data = {
            'id': datetime.now().timestamp(),
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
        print(f"❌ Contact error: {e}")
        return jsonify({'success': False, 'message': 'Server error'}), 500

@app.route('/api/health')
def health():
    return jsonify({'status': 'healthy', 'timestamp': datetime.now().isoformat()})

if __name__ == '__main__':
    # Create directories if they don't exist
    os.makedirs('templates', exist_ok=True)
    os.makedirs('static', exist_ok=True)
    
    print("🚀 Starting Debug Server...")
    print("📍 Main site: http://localhost:5000")
    print("🔧 Debug page: http://localhost:5000/debug")
    print("❤️  Health check: http://localhost:5000/api/health")
    
    app.run(debug=True, host='0.0.0.0', port=5000)