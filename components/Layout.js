import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

import styles from '../styles/Layout.module.css'

function Layout({ title, description, children}) {
    return (
        <div className={styles.main}>
            <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            </Head>
            <Header />
            <div>
            {children}
            </div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title : "ようこそ　角のポートフォリオへ",
    description: "ポートフォリオサイトのHOME"
}

export default Layout
