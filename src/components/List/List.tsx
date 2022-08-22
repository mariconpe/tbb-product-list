import React, { useState } from 'react'
import Card from "components/Card/Card";
import DetailsCard from "components/DetailsCard/DetailsCard";

import { PRODUCTS as Products} from 'database';

import styles from './List.module.scss';

function List({filteredProducts}:{filteredProducts: typeof Products}) {

  return (
    <div className={styles.list}>
      {
        filteredProducts.map((item, index) => (
          <>
            <div className={styles.card}>
              <Card key={item.id} product={item} index={index}/>
                <aside className={styles.detailsCard}>
                  <DetailsCard key={item.id} product={item} index={index}></DetailsCard>
                </aside>                
            </div>
          </>
        ))
      }
    </div>
  )
};

export default List