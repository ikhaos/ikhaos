import type { NextPage } from 'next'
import Head from 'next/head'
import SiteNav from '../../component/common/SiteNav'
import Poster from '../../component/search/Poster'
import SearchInput from '../../component/search/SearchInput'
import HomeMain from '../../component/index/HomeMain'
const Search: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Search - Search the Ikhaos</title>
        <meta name="description" content="Search the Ikhaos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteNav />
      <Poster />
      <SearchInput />
      <HomeMain />
    </div>
  )
}

export default Search
