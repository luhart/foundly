import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { Button, Form } from "react-bootstrap"

export default function Contact() {
    return (
        <>
            <Layout>
                <Head>
                    <title>contact</title>
                </Head>
                <h1 style={{"textAlign": "center"}}>Sign up for the teamsync beta.</h1>
                <Button variant="info" style={{"margin": "0 auto", "display": "block"}}>Contact</Button>
            </Layout>
        </>
    )
}
