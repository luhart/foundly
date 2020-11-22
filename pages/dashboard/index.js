import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import {Navbar, Button, Tab, Row, Col, Nav} from 'react-bootstrap'

import { useUser } from '../../lib/hooks'
import Layout from '../../components/layout'
import styles from './dashboard.module.css'
import CheckoutForm from '../../components/CheckoutForm'
import { useForm } from 'react-hook-form';

export default function Dashboard() {
  const [active, setActive] = useState("about")
  const user = useUser({ redirectTo: '/login'})
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Layout>
      <Head><title>Start your company</title></Head>
      <div className="top">
        <Navbar className="nav">
          <Link href="/" passHref>
              <Navbar.Brand href="/">
                <img
                    alt=""
                    width="200"
                    src="/title.svg"
                    className="d-inline-block align-top logo"
                />
              </Navbar.Brand>
          </Link>
          <div className="mr-sm-2">
            <Button className="login-btn" component="{Link}" href="/api/logout" variant="outline">Sign out</Button>
          </div>
        </Navbar> 
      </div>
      <main className={styles.container}>
        <Tab.Container id="sidebar" activeKey={active} onSelect={(k) => setActive(k)} defaultActiveKey={active}>
          <Row>
            <Col sm={3}>
              <Nav className={styles.nav + " flex-column"} >
                <Nav.Item>
                  <Nav.Link eventKey="about" className={styles.navlink}>About You</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="company" className={styles.navlink}>Company</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="finish" className={styles.navlink}>Finish & Pay</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                  {active === "about" && (
                    <>
                      <h2>First we need a little information about you.</h2>
                      <label>
                        First name <br/>
                        <input type="text" name="First name" ref={register({required: true, maxLength: 80})} />
                      </label>
                      <br/>
                      <label>
                        Last name
                        <br/>
                        <input type="text" name="Last name" ref={register({required: true, maxLength: 100})} />
                      </label>
                      <br/>
                      <label>
                      Where do you reside?
                      <br/>
                      <input type="text" name="Where do you reside?" ref={register} />
                      </label>
                      <br/>
                      <label>
                        What do you do?
                        <br/>
                        <textarea className={styles.ta} placeholder="I make cooking tutorials on tiktok" name="What do you do?" ref={register} />
                      </label>
                      <br/>
                      <label>
                      Provide any relevant social media handles
                      <br/>
                      <textarea placeholder="Tiktok: @yourcoolname" name="relevant handles" ref={register} />
                      </label> 
                      <br/>
                      <label>
                      Phone #
                      <br/>
                      <input type="text" name="phone" ref={register} />
                      </label><br/>
                      <Button variant="outline" className={styles.nextBtn} onClick={() => setActive("finish")}>Next</Button>
                    </>
                  )}
                  {active === "company" && (
                    <>
                      <h2>Let's figure out your company.</h2>
                      <label>
                        What would you like to name your company? <br/>
                        <input type="text" placeholder="ex. My IG Handle" name="company name" ref={register({required: true, maxLength: 80})} />
                      </label>
                      <br/>
                      <label>
                        Business Address (this can be your current address)<br/>
                        <input type="text" placeholder="" name="address" ref={register({required: true, maxLength: 80})} />
                      </label>
                      <br/>
                      <label>
                        Zip<br/>
                        <input type="text" placeholder="" name="zip" ref={register({required: true, maxLength: 80})} />
                      </label>
                      <br/>
                      <label>
                        City<br/>
                        <input type="text" placeholder="" name="city" ref={register({required: true, maxLength: 80})} />
                      </label>
                      <br/>
                      <label>
                        State<br/>
                        <input type="text" placeholder="" name="city" ref={register({required: true, maxLength: 80})} />
                      </label><br/>
                      <Button variant="link" className={styles.nextBtn} onClick={() => setActive("finish")}>Next</Button>
                      </>
                  )}
                  {active === "finish" && (
                    <Finish />
                  )}
              </form>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </main>
    </Layout>
  )
}

function Finish(){
  return (
    <>
      <h2>Finish & Pay</h2>
      <p> ~ We know the price is steep, but it will surely be worth it.</p>
      <p> ~ It'll take up to two weeks for your state to process the paperwork we send.</p>
      <CheckoutForm/>
    </>
  )
}