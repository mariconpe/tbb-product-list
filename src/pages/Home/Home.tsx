import React, { useState, MouseEventHandler } from "react";

import List from "components/List/List";
import Header from "components/Header/Header";
import Drawer from "components/Drawer/Drawer";
import Button from "components/FilterButton/FilterButton";


import styles from "./Home.module.scss";
import { PRODUCTS as Products} from "database";
import { AiFillFilter } from 'react-icons/ai';

const products = Products;

function Home() {
  
  const [displayedDrawer, setDisplayedDrawer] = useState(styles.drawer)
  const displayDrawer = () => {
    setDisplayedDrawer(styles.responsiveDrawer);
    setDisplayedButton(styles.hiddenButton)
  }
  
  const [displayedButton, setDisplayedButton] = useState(styles.button)
  const closeDrawer = () => {
    setDisplayedDrawer(styles.drawer);
    setDisplayedButton(styles.button)
  }

  const [filteredProducts, setFilteredProducts] = useState(products);
  function updateProducts(activeCategories: Array<String>){
    console.log(activeCategories)
    setFilteredProducts(products.filter(product => {console.log(product.category.name); return activeCategories.includes(product.category.name)}))
  }

  return (
    <main className={styles.body}>
      <Header/>        
      <div className={styles.page}>
        <div className={displayedDrawer}>
            <Drawer onChange={updateProducts} closeDrawer={closeDrawer}/>
        </div>
        <div className={displayedButton}>          
            <Button onClick={displayDrawer}/>
        </div>
        <div className={styles.list}>
          <List filteredProducts={filteredProducts}/>
        </div>
      </div>
    </main>
  );
}

export default Home;
