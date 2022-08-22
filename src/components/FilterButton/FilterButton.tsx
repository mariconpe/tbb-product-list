import React, { MouseEventHandler } from 'react'
import { AiFillFilter } from 'react-icons/ai'

import styles from './FilterButton.module.scss';

function FilterButton({onClick}:{onClick: Function}) {
  return (
    <button className={styles.button} onClick={() => onClick()}>
      <AiFillFilter className={styles.icon} size={35}/> FILTROS
    </button>
    
  )
}

export default FilterButton