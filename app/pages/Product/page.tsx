'use client'
import styles from '../../styles/Product.module.css'
import axios from 'axios';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react'
import Link from 'next/link';

type ProdutosProps = {
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

  type ProdutoProps = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string
    thumbnail: string;
    rating: number;
    stock: number
  };


export default function Product() {
    const [Produtos, setProdutos] = useState<ProdutosProps[]>([])
    const [Produto, setProduto] = useState<ProdutoProps[]>([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
          .then(response => {
            console.log('Dados recebidos:', response.data);
            setProdutos(response.data); // A API retorna um array de produtos diretamente
          })
          .catch(error => {
            console.error("Erro ao buscar produtos:", error);
          });
      }, []);

      useEffect(() => {
        axios.get('https://dummyjson.com/products')
          .then(response => {
            console.log('Dados recebidos:', response.data);
            setProduto(response.data.products); // Acesse a propriedade `products` da resposta
          })
          .catch(error => {
            console.error("Erro ao buscar produtos:", error);
          });
      }, []);
    return (
        <>
            <h1 className={styles.title}>Lista Produto</h1>
            <div className={styles.produto}>
            {Produtos.map((produto: ProdutosProps) => {
                return  <Link href={`/produtos/${produto.id}`} key={produto.id} className={styles.link}>
                <div 
                  className={styles.produtocart}>
                  <img 
                  src={produto.image} 
                  alt={produto.title} 
                  width={120}  
                  className={styles.imgproduct}/>
                  
                  <p>{produto.title}</p>
                  <p className={styles.price}>${produto.price}</p>
                  <p className={styles.rating}>
                      <Star className={styles.starProduct} /><Star className={styles.starProduct}/><Star className={styles.starProduct}/><Star 
                      className={styles.starProduct}/>{produto.rating.rate}</p>
                </div>
                     </Link>
            }
        )}
                {Produto.map((produtos: ProdutoProps) => {
                    return <Link href={`/produtosdois/${produtos.id}`} key={produtos.id} className={styles.link} >  <div key={produtos.id} className={styles.produtocart}>
                    <img src={produtos.thumbnail} alt={produtos.title} width={120} className={styles.imgproduct} />
                    <p >{produtos.title}</p>
                    <p className={styles.price}>${produtos.price}</p>
                    <p className={styles.rating}><Star className={styles.starProduct} /><Star className={styles.starProduct}/><Star className={styles.starProduct}/><Star className={styles.starProduct}/>{produtos.rating}</p>
                </div>
                </Link>
                }
                )}
            </div>
            
        </>
    )
}