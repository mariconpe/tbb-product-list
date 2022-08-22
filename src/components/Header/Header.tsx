import React from 'react'

import styles from './Header.module.scss';
import logo from 'assets/logo.png'

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="The Brooklyn Brothers" />
    </div>
  )
}

export default Header