import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/layout'

import styles from './application.module.css'

export default class Syncspace extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <Head><title>get founded</title></Head>
      </Layout>
    )
  }
}
