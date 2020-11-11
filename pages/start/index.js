import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/layout'
import styles from './start.module.css'


export default class Start extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>

        <Head><title>Start your company</title></Head>
      </Layout>
    )
  }
}
