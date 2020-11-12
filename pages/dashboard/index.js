// pages/start/index.js

import Head from 'next/head'
import Link from 'next/link'

import useAuth from '../hooks/useAuth'

import Layout from '../../components/layout'
import styles from './dashboard.module.css'


export default function Dashboard() {
  const { user, loading } = useAuth()

  return (
    <Layout>
      <Head><title>Start your company</title></Head>
      <h1>Let's get you a company!</h1>
      {loading ? "Loading..." : user.email}
    </Layout>
  )
}
