import Link from 'next/link'
import Head from 'next/head'

import styles from './layout.module.css'

import { Navbar, Button } from 'react-bootstrap'


const name = 'Foundly'
export const siteTitle = 'Become your own company'


export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
        <meta
          name="description"
          content="Become your own company"
        />
      </Head>
      {children}
    </>
  )
}