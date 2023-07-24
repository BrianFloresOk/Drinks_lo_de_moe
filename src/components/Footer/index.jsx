import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={`py-3 ${styles.footer}`}>
            <small>POWERED BY BRIAN FLORES</small>
            <small>&copy; Copyrigth 2023</small>
        </footer>
    )
}