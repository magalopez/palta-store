import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <menu className={styles.container}>
        <Link href='/' prefetch={false}>
          <a> Home </a>
        </Link>
        <Link href='/about' prefetch={false}>
          <a> Carrito </a>
        </Link>
      </menu>
    </nav>
  )
}

export default Navbar