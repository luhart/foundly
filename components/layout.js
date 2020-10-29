import Link from 'next/link'
import Head from 'next/head'

import styles from './layout.module.css'

import { Navbar, Button } from 'react-bootstrap'


const name = 'Foundly'
export const siteTitle = 'Be your own company'


export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
      <Head>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="syncspace demo site"
        />
      </Head>
          <>
            <Navbar bg="light" variant="light" className={styles.container}>
              <div className={styles.mynav}>
                <Link href="/" passHref>
                    <Navbar.Brand href="/">
                      <img
                          alt=""
                          src="/images/squares.svg"
                          width="50"
                          height="50"
                          className="d-inline-block align-top"
                      />{' '}
                      <h1 className="d-inline-block">{name}</h1>
                    </Navbar.Brand>
                </Link>
              </div>
              <div className={styles.mynav}>
                <Button component="{Link}" href="/contact" variant="outline-primary">Contact Us</Button>
              </div>
            </Navbar>
          </>
      </div>
        {children}
    </>
  )
}