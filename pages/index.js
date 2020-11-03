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
        <Navbar className="nav">
          <Link href="/" passHref>
              <Navbar.Brand href="/">
                <img
                    alt=""
                    src="/logo.png"
                    width="50"
                    height="50"
                    className="d-inline-block align-top navlogo"
                />{' '}
                <h1 className="d-inline-block title">Foundly</h1>
              </Navbar.Brand>
          </Link>
        </Navbar> 
        <div className="description">
          <Typist cursor={{ hideWhenDone: true }}>
            Become your own company.
          </Typist>
        </div>
      </div>
      <main>
        <h2 className="description blurb">If you're a creator or influencer,<br/> it's in your best interest to become your own company.</h2>
        <div className="verticalLine"/>
        <h2 className="description blurb">WHY?!?!</h2>
        <div className="verticalLine"/>
        <div className="grid">
          <div className="card">
            <h3>Save $ to make $</h3>
            <p> Writting off expensive equipment purchases will save you thousands.</p>
          </div>
          <br/>
          <div className="card">
            <h3>Reduce Liability</h3>
            <p>You don't need to be personally liable for your debts!</p>
          </div>
        
        </div>
      </main>
      <div className="try">
        <div className="tryitem">
          <h4>Need to learn more about LLCs?🤔</h4>
          <Button href="https://www.investopedia.com/terms/l/llc.asp" className="trybutton" variant="outline-success" size="lg">
            Read On 🧐
          </Button>
        </div>
        <div className="tryitem">
          <h4>Ready to get that company?🚀</h4>
          <Button component="{Link}" href="/start" className="trybutton" variant="outline-info" size="lg">
            Start Here
          </Button>
        </div>
      </div>

      <footer>
        <a>email hello@foundly.app to get in touch</a>
      </footer>
      
    </Layout>
  )
}
