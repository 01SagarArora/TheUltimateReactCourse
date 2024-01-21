import styles from "./Sidebar.module.css"
import Logo from "./Logo"
import AppNav from "./AppNav"

function Sidebar() {
    return (
        <div className={styles.Sidebar}>
            <Logo/>
            <AppNav />

            <p>List of Cities</p>
            <footer className={styles.footer}>    </footer>
            <p className={styles.copyright}>
                &copy; Copyright {new Date().getFullYear()} by WorldWise Inc. 
            </p>
        </div>
    ) 
}

export default Sidebar