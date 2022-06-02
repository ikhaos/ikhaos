import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import css from '../styles/tools.module.scss'

const Sign: NextPage = () => {
  return (
    <div className={css.container}>
      <Head>
        <title>Sign In | Ikhaos</title>
        <meta name="description" content="sign in Ikhaos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        here is sign
        <Link href={'/'}>
          <a>home</a>
        </Link>
      </div>
    </div>
  )
}

export default Sign
