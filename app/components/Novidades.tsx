'use client'
import styles from '../styles/Novidades.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Star } from 'lucide-react'
import Link from 'next/link'


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
  


export default function Novidades() {
  const [novidades, setNovidades] = useState<novidadesProps[]>([]);

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
        <div className={styles.productCardNovidade}>
          {novidades.map((produtos: novidadesProps) => {
            return <Link href={`/produtosdois/${produtos.id}`}  key={produtos.id} className={styles.link}>  <div key={produtos.id} className={styles.produtos}>
            <img src={produtos.thumbnail} alt={produtos.title} width={110} className={styles.imagemproduto} />
            <p className={styles.titleproduct}>{produtos.title}</p>
            <p className={styles.price}>${produtos.price}</p>
            <p className={styles.rating}><Star className={styles.starProduct} /><Star className={styles.starProduct}/><Star className={styles.starProduct}/><Star className={styles.starProduct}/>{produtos.rating}</p>
          </div>
          </Link>
          }
          )}
        </div>
    )
}