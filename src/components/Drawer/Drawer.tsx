import React, { ChangeEvent, useState, useEffect } from 'react'

import styles from './Drawer.module.scss';
import { AiOutlineCloseSquare } from 'react-icons/ai';

import { isEmpty } from 'lodash';

import { CATEGORIES as categories, CATEGORIES_KEYS as categoriesKeys }  from 'database';

function Drawer({onChange, closeDrawer}:{onChange: Function, closeDrawer: Function}) {

  const [checked, setChecked] = useState<Array<String>>([]);

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList.push(event.target.id);
    } else {
      updatedList.splice(checked.indexOf(event.target.id), 1);
    }
    setChecked(updatedList);
  };

  useEffect(() =>{
    isEmpty(checked) ? onChange(categories) : onChange(checked);
  }, [checked])

  return (
    <aside className={styles.drawer}>
        <h1 className={styles.title}>Categorias</h1>
        <button
        className={styles.close}
        onClick={() => closeDrawer()}
        >
          <AiOutlineCloseSquare size={25}/>
        </button>
        {categories.map((item, index) => (
          <div key={categoriesKeys[index]}>
            <input
            className={styles.checkbox}
            id={item}
            type='checkbox'
            onChange={handleCheck}
            />
            <label htmlFor={item}>
              {item}
            </label>
          </div>
        ))}
    </aside>
  )
}

export default Drawer