import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import Typist from 'react-typist'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="top">
        <h1 className="title">foundly</h1>
        <p className="description">
      <Typist cursor={{ hideWhenDone: true }}>
        Become your own company.
      </Typist></p>
      </div>
      <main>
      <h2 className="description">If you're a creator or influencer, it's in your best interest become your own company.</h2>
      <h2 className="description">Here's Why:</h2>
      <div className="grid">
        <div className="card">
          <h3>Write off expenses</h3>
          <p> Writting off expensive equipment purchases will save you thousands.</p>
        </div>
        <br/>
        <h2>~</h2>
        <div className="card">
          <h3></h3>
          <p> Writting off expensive equipment purchases will save you thousands.</p>
        </div>
        <h2>~</h2>
      </div>
      </main>

      <footer>
        <a>email hello@foundly.app to get in touch</a>
      </footer>
      
    </Layout>
  )
}
