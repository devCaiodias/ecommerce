'use client'
import styles from "./page.module.css";
import ImageSlider from "./components/ImgemSlide";
import axios from "axios";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

type maisVendidosProps = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

type novidadesProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string
  thumbnail: string;
  rating: number;
  stock: number
};


export default function Home() {
  const [maisVendidos, setMaisVendidos] = useState<maisVendidosProps[]>([])
  const [novidades, setNovidades] = useState<novidadesProps[]>([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        console.log('Dados recebidos:', response.data);
        setMaisVendidos(response.data); // A API retorna um array de produtos diretamente
      })
      .catch(error => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        console.log('Dados recebidos:', response.data);
        setNovidades(response.data.products); // Acesse a propriedade `products` da resposta
      })
      .catch(error => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);
  
  
  return (
    <>
      <main className={styles.mainhome}>
        <ImageSlider />
        <h1 className={styles.titletag}>Mais vendidos</h1>
        <div className={styles.productCard}>
          {maisVendidos.map((produto: maisVendidosProps) => {
            return  <div key={produto.id} className={styles.produtos}>
            <img src={produto.image} alt={produto.title} width={110} className={styles.imagemproduto} />
            <p className={styles.titleproduct}>{produto.title}</p>
            <p className={styles.price}>${produto.price}</p>
            <p><Star className={styles.starProduct} /><Star className={styles.starProduct}/><Star className={styles.starProduct}/><Star className={styles.starProduct}/>{produto.rating.rate}</p>
          </div>
          }
          )}
        </div>
        <h1 className={styles.titletag}>Novidades</h1>
        <div className={styles.productCardNovidade}>
          {novidades.map((produtos: novidadesProps) => {
            return  <div key={produtos.id} className={styles.produtos}>
            <img src={produtos.thumbnail} alt={produtos.title} width={110} className={styles.imagemproduto} />
            <p className={styles.titleproduct}>{produtos.title}</p>
            <p className={styles.price}>${produtos.price}</p>
            <p><Star className={styles.starProduct} /><Star className={styles.starProduct}/><Star className={styles.starProduct}/><Star className={styles.starProduct}/>{produtos.rating}</p>
          </div>
          }
          )}
        </div>
      </main>
    </>
  );
}
