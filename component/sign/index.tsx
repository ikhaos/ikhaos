import Link from 'next/link'

import styles from './index.module.scss'
const SignMain: React.FC = () => {
  return (
    <main className={styles.container}>
      <aside className={styles.sidebar}>
        <section className={styles.logo}>
          <Link href={'/'}>Logo</Link>
        </section>
        <section className={styles.desc}>Discover the world’s top Creatives.</section>
      </aside>
      <article className={styles.content}>
        <section className={styles.loginConatin}>
          <p>Sign in to IKhaos</p>
          <button>Login with WeChat</button>
        </section>
        <section className={styles.divider}></section>
        <section className={styles.formContain}>
          <div className={styles.itemContain}>
            <p>Telephone Number</p>
            <input type="text" />
          </div>
          <div className={styles.itemContain}>
            <p className={styles.verifyTitle}>
              <span>Verification Code</span>
              <span className={styles.textlink}>Get Verification Code</span>
            </p>
            <input type="text" />
          </div>
          <button>Sign In</button>
        </section>
      </article>
    </main>
  )
}

export default SignMain
