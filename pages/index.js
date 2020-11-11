import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { Button, Navbar } from 'react-bootstrap'
import Typist from 'react-typist'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <div className="top">
          <Navbar className="nav justify-content-between">
            <Link href="/" passHref>
                <Navbar.Brand href="/">
                  <img
                      alt=""
                      width="200"
                      src="/title.svg"
                      className="d-inline-block align-top "
                  />
                </Navbar.Brand>
            </Link>
            <div className="topButtons mr-sm-2">
              <Button className="topButtonL" variant="outline">Sign up</Button>
              <Button className="topButtonR" variant="outline">Login</Button>
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
                <h4 className="hero-subtitle">Ready to get that company?🚀</h4>
                <Button className="hero-btn" component="{Link}" href="/start" variant="primary" >
                  Start Here
                </Button>
              </div>
              <div className="hero-photo">
                <img src="/images/hero.png"/>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <a>email hello@foundly.app to get in touch</a>
        </footer>
      </main>
    </Layout>
  )
}
