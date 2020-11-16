import Head from 'next/head'
import Link from 'next/link'
import { useUser } from '../lib/hooks'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { Button, Card, Navbar } from 'react-bootstrap'
import Typist from 'react-typist'


export default function Home() {
  const user = useUser()

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <script  dangerouslySetInnerHTML={{ __html: `
          if (document.cookie && document.cookie.includes('authed')) {
            window.location.href = "/dashboard"
          }
        ` }} />
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
            {user && (
              <div className="mr-sm-2">
                <p>Welcome, {user.email}</p>
                <Button className="login-btn" component="{Link}" href="/api/logout" variant="outline">Sign out</Button>
              </div>
            )}
            {!user && (
              <div className="mr-sm-2">
                <Button className="login-btn" component="{Link}" href="/login" variant="outline">Login</Button>
              </div>
            )}

          </Navbar> 
        </div>

      <main>
        <section className="hero-container">
          <div className="container">
            <div className="hero">
              <div className="hero-body half">
                <h1 className="hero-title">
                <Typist cursor={{ hideWhenDone: true }}>
                  Become your own <br/>company.
                </Typist>
                </h1>
                <p className="hero-subtitle">Foundly turns creators and influencers into companies with absolute ease. Writing off expensive purchases will save you thousands. And you won't be personally liable for your debts! No paperwork, no headaches.</p>
                {!user && (
                  <>
                    <h5 className="hero-subtitle">Ready to get that company?🚀</h5>
                    <Button className="hero-btn" component="{Link}" href="/login" variant="outline-primary" >
                      Start Here
                    </Button>
                  </>
                )}
                {user && (
                  <>
                    <h5 className="hero-subtitle">Let's finish that application 💯</h5>
                    <Button className="hero-btn" component="{Link}" href="/dashboard" variant="outline-primary" >
                      Continue Application
                    </Button>
                  </>
                )}
                
              </div>
              <div className="hero-photo">
                <img src="/images/hero2.png"/>
              </div>
            </div>
          </div>
        </section>
        <div className="mcontainer">
          <div className="middle">
            <div className="middle-container-title"><h4 className="middle-title">If you're an influencer or content creator,<br/>it's in your best interest to become a company.</h4></div>
            <div className="middle-container">
              <div className="blurb">
                  <h3>Deduct and $ave.</h3>
                  <ul id="none">
                    <li><h5>✈️ Travel</h5></li>
                    <li><h5>🍜 Food</h5></li>
                    <li><h5>📷 Equipment</h5></li>
                    <li><h5>🏠 Rent</h5></li>
                  </ul>
              </div>
              <div className="blurb">
                <h3>Ditch personal liability.</h3>
                <ul id="none">
                  <li><h5>🏦 Debts</h5></li>
                  <li><h5>🗣️ Claims</h5></li>
                  <li><h5>💥 Business-related actions</h5></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </main>

      <footer>
          <a href="mailto:hello@foundly.app">Say hi ✉️ </a>
      </footer>

    </Layout>
  )
}
