import { Button } from 'react-bootstrap'
import styles from './dashboard.module.css'

import CheckoutForm from '../../components/CheckoutForm'

export default function Finish(){
  return (
    <>
      <h2>Finally...</h2>
      <p>TODO: stripe payments intergration</p>
      <CheckoutForm/>
    </>
  )
}