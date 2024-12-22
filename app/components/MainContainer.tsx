import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

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