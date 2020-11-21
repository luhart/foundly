import json
import os
import stripe
# This is your real test secret API key.
stripe.api_key = "sk_test_51HcLslH4nuoimhurKXa5lHDzKCTV0V5IHUDjeVIegZB2qBNAeUXQpdA9GxV7KRzRcaicbRg9ywZhBugZDI8lodtN00v88WXkKB"

from flask import Flask, render_template, jsonify, request


app = Flask(__name__, static_folder=".",
            static_url_path="", template_folder=".")


def calculate_order_amount(items):
    # Replace this constant with a calculation of the order's amount
    # Calculate the order total on the server to prevent
    # people from directly manipulating the amount on the client
    return 499 


@app.route('/create-payment-intent', methods=['POST'])
def create_payment():
    try:
        data = json.loads(request.data)
        intent = stripe.PaymentIntent.create(
            amount=calculate_order_amount(data['items']),
            currency='usd'
        )

        return jsonify({
          'clientSecret': intent['client_secret']
        })
    except Exception as e:
        return jsonify(error=str(e)), 403

if __name__ == '__main__':
    app.run()