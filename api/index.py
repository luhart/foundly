import json
import os
import stripe
stripe.api_key = "sk_test_51HcLslH4nuoimhurKXa5lHDzKCTV0V5IHUDjeVIegZB2qBNAeUXQpdA9GxV7KRzRcaicbRg9ywZhBugZDI8lodtN00v88WXkKB"

from flask import Flask, render_template, jsonify, request

app = Flask(__name__, static_folder=".",
            static_url_path="", template_folder=".")


def get_order_amount():
    return 499


@app.route('/create-payment-intent', methods=["POST"])
def create_payment():
    try:
        data = json.loads(request.data)
        intent = stripe.PaymentIntent.create(
            ammount=get_order_amount(),
            currency='usd'
        )

        return jsonify({
            'clientSecret': intent['client_secret']
        })
    except Exception as e:
        return jsonify(error=str(e)), 403


if __name__ == "__main__":
    app.run()