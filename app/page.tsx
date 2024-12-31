'use client'
import styles from "./page.module.css";
import ImageSlider from "./components/ImgemSlide";
import MaisVendidos from "./components/MaisVendidos";
import Novidades from "./components/Novidades";

export default function Home() {
  
  return (
    <>
      <main className={styles.mainhome}>
        <ImageSlider />
        <h1 className={styles.titletag}>Mais vendidos</h1>
        <MaisVendidos />
        <h1 className={styles.titletag}>Novidades</h1>
        <Novidades />
      </main>
    </>
  );
}
