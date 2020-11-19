import { Button } from 'react-bootstrap'
import styles from './dashboard.module.css'

export default function Finish(){
  return (
    <>
      <h2>Finally...</h2>
      <p>TODO: stripe payments intergration</p>
      <Button variant="outline-dark">Complete Purchase</Button>
    </>
  )
}