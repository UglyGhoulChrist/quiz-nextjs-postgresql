import Header from '@/components/Header'
import styles from '@/layouts/Layout.module.css'

function Layout({ children }) {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
        </>
    )
}

export default Layout