import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { Button } from 'react-bootstrap'
import Typist from 'react-typist'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="top">
        <h1 className="title" style={{ textDecoration: 'none'}}><Link href="/" >Foundly</Link></h1>
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
          <div className="mainbtn">
            <Button href="https://www.investopedia.com/terms/l/llc.asp" variant="dark" size="lg">
              Learn more about LLCs
            </Button>
          </div>
        </div>
      </main>
      <div className="try">
        <h2>Get Started</h2>
      </div>

      <footer>
        <a>email hello@foundly.app to get in touch</a>
      </footer>
      
    </Layout>
  )
}
