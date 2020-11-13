import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../../lib/hooks'
import Layout from '../../components/layout'
import Form from '../../components/form'

import { Magic } from 'magic-sdk'

const Login = () => {
  useUser({ redirectTo: '/dashboard', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      email: e.currentTarget.email.value,
    }

    try {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY)
      const didToken = await magic.auth.loginWithMagicLink({
        email: body.email,
      })
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        Router.push('/dashboard')
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }

  
  return (
    <Layout>
      <div className="login">
        <Form errorMessage={errorMsg} onSubmit={handleSubmit} />
      </div>
      <style jsx>{`
        .login {
          background-color: white;
          max-width: 21rem;
          margin: 10rem auto;
          padding: 1rem;
          border: 8px solid;
          border-image-slice: 1;
          border-image-source: linear-gradient(to top, #94C6EA, #D84339);
        }
      `}</style>
    </Layout>
  )
}

export default Login