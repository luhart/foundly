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
        <link rel="icon" href="/logo.ico" />
        <meta
          name="description"
          content="become a company"
        />
      </Head>
      {children}
    </>
  )
}