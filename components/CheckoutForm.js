import React, { useState, useEffect } from 'react'
import {
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'

import styles from './CheckoutForm.module.css'

export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({items: [{ id: "xl-tshirt" }]})
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        "::placeholder": {
          color: '#32325d'
        }
      },
      invalid: {
        color: "#fa655a",
        iconColor: "#fa655a"
      }
    }
  }

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty)
    setError(event.error ? event.error.message : "")
  }

  const handleSubmit = async ev => {
    ev.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false)
    } else {
      setError(null)
      setProcessing(false)
      setSucceeded(true)
    }
  }

  return (
    <form id="payment-form" className={styles.form} onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button
        className={styles.button}
        disabled={processing || disabled || succeeded }
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className={styles.spinner} id="spinner"></div>
          ) : (
            "Pay $499"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      {succeeded && (
        <p className={styles.resultMessage}>
          Payment succeeded, see the result in your
          <a
            href={`https://dashboard.stripe.com/test/payments`}
          >
            {" "}
            Stripe dashboard
          </a> Refresh the page to pay again.
        </p>
      )}
      {!succeeded && (
        <p className={styles.resultMessage + " " + styles.hidden}>
          Payment succeeded, see the result in your
          <a
            href={`https://dashboard.stripe.com/test/payments`}
          >
            {" "}
            Stripe dashboard
          </a> Refresh the page to pay again.
        </p>
      )}
    </form>
  )
}