'use client'
import styles from '../styles/MaisVendidos.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Star } from 'lucide-react'


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


export default function MaisVendidos() {
    const [maisVendidos, setMaisVendidos] = useState<maisVendidosProps[]>([])

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
    

    return (
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
    )
}