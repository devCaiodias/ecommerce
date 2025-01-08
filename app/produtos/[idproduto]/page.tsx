import { Star } from 'lucide-react';
import Link from 'next/link';
import styles from '../../styles/ProdutoId.module.css';

type Props = {
  params: Promise<{ idproduto: string | number }>;
};

type ProdutoProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default async function ProdutoDetalhes({ params }: Props) {
  const { idproduto } = await params;

  // Fetch do produto na Fake Store API
  const res = await fetch(`https://fakestoreapi.com/products/${idproduto}`);
  const produto: ProdutoProps = await res.json();

  return (
    <div className={styles.container_produtid}>
      <div className={styles.imgid}>
        <img src={produto.image} alt={produto.title} width={305} />
      </div>
      <div className={styles.detalhes}>
        <h1>{produto.title}</h1>
        <p className={styles.description}>{produto.description}</p>
        <p className={styles.price}>Preço: ${produto.price}</p>
        <p className={styles.category}>
          Categoria: <span>{produto.category}</span>
        </p>
        <p className={styles.rating}>
          <Star className={styles.star} /> Avaliação: {produto.rating.rate} (baseado em {produto.rating.count}{' '}
          avaliações)
        </p>
      </div>
    </div>
  );
}
