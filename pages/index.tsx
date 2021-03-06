import type { NextPage } from 'next'
import Head from 'next/head'
import SiteNav from '../component/common/SiteNav'
import HomeMain from '../component/index/HomeMain'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ikhaos - Share all the good moments</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteNav />
      <HomeMain />
    </div>
  )
}

export default Home
