import Link from 'next/link'
import css from './SiteNav.module.scss'

const SiteNav: React.FC = () => {
  return (
    <div className={css.siteNavContainer}>
      <nav className={css.navContainer}>
        <li>
          <Link href="/">
            <a>logo</a>
          </Link>
        </li>
        <li>
          <Link href="/discover">
            <a>Discover</a>
          </Link>
        </li>
        <li>
          <Link href="/inspiration">
            <a>Inspiration</a>
          </Link>
        </li>
      </nav>
      <div className={css.siteActionContainer}>
        <li><Link href="/search"><a>search</a></Link></li>
        <li className={css.shareBtn}><Link href="/share"><a>Share</a></Link></li>
        <li><Link href="/sign"><a>Sign in</a></Link></li>
      </div>
    </div>
  )
}

export default SiteNav
