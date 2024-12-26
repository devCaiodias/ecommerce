'use client'
import styles from "./page.module.css";
import ImageSlider from "./components/ImgemSlide";



export default function Home() {

  
  return (
    <>
      <main className={styles.mainhome}>
        <ImageSlider />
      </main>
    </>
  );
}
