import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>Todos los derechos reservados - Paltica Store</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer