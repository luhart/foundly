// pages/start/index.js

import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { useUser } from '../../lib/hooks'
import Layout from '../../components/layout'
import styles from './dashboard.module.css'


export default function Dashboard() {

  const user = useUser({ redirectTo: '/login'})

  return (
    <Layout>
      <Head><title>Start your company</title></Head>
      <main>
        <h1>Dashboard</h1>
        {user && (
          <>
            <p>Your session:</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </>
        )}
      </main>
    </Layout>
  )
}
