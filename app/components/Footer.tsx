import { Github, Instagram, Linkedin } from "lucide-react"
import styles from "../styles/Footer.module.css"
import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.linksfooter}>
                    <Link className={styles.link} href='/'>Home</Link>
                    <Link className={styles.link} href='../pages/Product'>Produtos</Link>
                    <Link className={styles.link} href='../pages/Checkout'>Checkout</Link>
                </div>
                <div className={styles.socialmidia}>
                    <Link  className={styles.linkmidia} href="https://github.com/devCaiodias" ><Github/></Link>
                    <Link className={styles.linkmidia} href="https://www.linkedin.com/in/caio-dias-martins-26739b251/" ><Linkedin/></Link>
                    <Link className={styles.linkmidia} href="https://github.com/devCaiodias" ><Instagram/></Link>
                </div>
                <p>&copy; Caio Dias Martins</p>
            </footer>
        </>
    )
}