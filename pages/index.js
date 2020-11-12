import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { Button, Card, Navbar } from 'react-bootstrap'
import Typist from 'react-typist'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
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
              <Button className="login-btn" variant="outline">Login</Button>
            </div>
          </Navbar> 
        </div>

      <main>
        <section className="hero-container">
          <div className="container">
            <div className="hero">
              <div className="hero-body half">
                <h2 className="hero-title">
                <Typist cursor={{ hideWhenDone: true }}>
                  Become your own company.
                </Typist>
                </h2>
                <p className="hero-subtitle">Foundly turns creators and influencers into companies with absolute ease. Writing off expensive purchases will save you thousands. And you won't be personally liable for your debts! No paperwork, no headaches.</p>
                <br/>
                <h5 className="hero-subtitle">Ready to get that company?🚀</h5>
                <Button className="hero-btn" component="{Link}" href="/start" variant="outline-primary" >
                  Start Here
                </Button>
              </div>
              <div className="hero-photo">
                <img src="/images/hero.png"/>
              </div>
            </div>
          </div>
        </section>
        <div className="middle">
          <div className="middle-container-title"><h4 className="middle-title">If you are an influencer or content creator,<br/>it's in your best interest to become a company.</h4></div>
          <div className="middle-container">
            <div className="blurb">
                <h3>Save money by deducting:</h3>
                <ul id="none">
                  <li><h5>✈️ Travel</h5></li>
                  <li><h5>🍜 Food</h5></li>
                  <li><h5>📷 Equipment</h5></li>
                  <li><h5>🏠 Rent</h5></li>
                </ul>
            </div>
            <div className="blurb">
              <h3>Don't be personally liable for:</h3>
              <ul id="none">
                <li><h5>🏦 Debts</h5></li>
                <li><h5>🗣️ Claims</h5></li>
                <li><h5>🕴️ Other people</h5></li>
                <li><h5>💥 Business-related actions</h5></li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer>
          <a>Say hi, ✉️ hello@foundly.app</a>
      </footer>

    </Layout>
  )
}
