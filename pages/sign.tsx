import type { NextPage } from 'next'
import Head from 'next/head'

import SignMain from '../component/sign'

const Sign: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sign In | Ikhaos</title>
        <meta name="description" content="sign in Ikhaos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <SignMain></SignMain>
      </div>
    </div>
  )
}

export default Sign
