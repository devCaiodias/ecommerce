import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Cart from "../pages/Cart/page"
import styles from "../styles/MainContaniner.module.css"

interface Props {
    children: React.ReactNode
} 

export default function MainContainer({children}: Readonly<Props>) {
    return (
        <>
            <main>
                <Navbar />
                {children}
            </main>
            <Footer/>
        </>
    )
}