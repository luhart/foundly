import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function App({ Component, pageProps }) {
  return (
    <Elements stripe={promise}>
      <Component {...pageProps}/>
    </Elements>
  )
}