import Link from 'next/link'
import styles from '../styles/Header.module.css'


function Header() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.items}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
            </ul>
        </nav>
    )
}


export default Header
