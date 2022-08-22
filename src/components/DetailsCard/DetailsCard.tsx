import React, { useState } from 'react'

import { PRODUCT_MODEL as ProductModel} from 'database'
import styles from './DetailsCard.module.scss';

type CardProduct = typeof ProductModel;

function DetailsCard({product, index}: {product: CardProduct, index: number}) {
  return (
    <div className={styles.detailsCard}>
        <div >
            <img src={product.images[0].asset.url} alt={product.images[0].alt} />
        </div>
        <div>
            <h2>{product.name}</h2>
            <p>{product.shortDescription}</p>
        </div>        
    </div>
  )
}

export default DetailsCard