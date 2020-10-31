import Link from 'next/link'
import Head from 'next/head'

import styles from './layout.module.css'

import { Navbar, Button } from 'react-bootstrap'


const name = 'Foundly'
export const siteTitle = 'Be your own company'


export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="become a company"
        />
      </Head>
      {children}
    </>
  )
}