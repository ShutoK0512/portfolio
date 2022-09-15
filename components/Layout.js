import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

import styles from '../styles/Layout.module.css'

function Layout({ title, description, children}) {
    return (
        <>
            <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            </Head>
            <Header />
            <div>
            {children}
            </div>
            {/* <Footer /> */}
        </>
    )
}

Layout.defaultProps = {
    title : "ようこそ　角のポートフォリオへ",
    description: "ポートフォリオサイトのHOME"
}

export default Layout
