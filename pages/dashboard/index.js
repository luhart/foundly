import Head from 'next/head'
import Link from 'next/link'
import {useState} from 'react'
import {Navbar, Button, Tab, Row, Col, Nav} from 'react-bootstrap'

import { useUser } from '../../lib/hooks'
import Layout from '../../components/layout'
import styles from './dashboard.module.css'

import About from './about'
import Company from './company'
import Finish from './finish'

export default function Dashboard() {

  const user = useUser({ redirectTo: '/login'})

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
        <Tab.Container id="sidebar" defaultActiveKey="about">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
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
                <Tab.Pane eventKey="about">
                  <About />
                </Tab.Pane>
                <Tab.Pane eventKey="company">
                  <Company />
                </Tab.Pane>
                <Tab.Pane eventKey="finish">
                  <Finish />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </main>
    </Layout>
  )
}
