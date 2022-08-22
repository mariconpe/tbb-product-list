import React from 'react';
import { PRODUCT_MODEL as ProductModel } from 'database';
import styles from './Card.module.scss'

type CardProduct = typeof ProductModel

function Card({product, index}: {product: CardProduct, index: number}) {
  return (
  <div className={styles.card}>
    <div className={styles.image}>
        <img src={product.images[0].asset.url} alt={product.images[0].alt} />
    </div>
    <div className={styles.details}>
        <h2>{product.name}</h2>
    </div>
  </div>

  )
};

export default Card
