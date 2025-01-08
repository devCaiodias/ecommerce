import { Star } from 'lucide-react';
import styles from '../../styles/ProdutoId.module.css';

type Props = {
  params: Promise<{ idprodutodois: string | number }>;
};

type ProdutodoisProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  rating: number;
  stock: number;
};

export default async function ProdutosDetalhes({ params }: Props) {
  const { idprodutodois } = await params;

  // Fetch do produto na Dummy JSON API
  const res = await fetch(`https://dummyjson.com/products/${idprodutodois}`);
  const produto: ProdutodoisProps = await res.json();

  return (
    <div className={styles.container_produtid}>
      <div className={styles.imgid}>
        <img src={produto.thumbnail} alt={produto.title} width={305} />
      </div>
      <div className={styles.detalhes}>
        <h1>{produto.title}</h1>
        <p className={styles.description}>{produto.description}</p>
        <p className={styles.price}>Preço: ${produto.price}</p>
        <p className={styles.category}>
          Categoria: <span>{produto.category}</span>
        </p>
        <p className={styles.rating}>
          <Star className={styles.star} /> Avaliação: {produto.rating}
        </p>
      </div>
    </div>
  );
}
