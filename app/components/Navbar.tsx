import Link from "next/link"
import Image from "next/image"
import logo from "../../public/img/logoProjete-removebg-preview.png"
import styles from "../styles/Navbar.module.css"
import { ShoppingBasket } from "lucide-react"

export default function Navbar() {
    return (
        <>
            <div className={styles.navbar}>
                <Image src={logo} alt="Logo do site" width={100} height={100} className={styles.logo} />
                <nav className={styles.linkss}>
                    <Link className={styles.link} href='/'>Home</Link>
                    <Link className={styles.link} href='../pages/Product'>Produtos</Link>
                    <Link className={styles.link} href='../pages/Checkout'>Checkout</Link>
                </nav>
                <div className={styles.carrinho}>
                    <Link className={styles.carrinholink} href='../pages/Cart'><ShoppingBasket size={30} /></Link>
                    <span className={styles.cart_status}>1</span>
                </div>
            </div>
        </>
    )
}