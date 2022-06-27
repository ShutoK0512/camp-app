import styles from '@/styles/Header.module.css'
import Link from 'next/link'

function Header() {
    return (
        <div className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/">LOGO</Link>
                <ul className={styles.wrapper}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
            
            
        </div>
    )
}

export default Header
