import React from 'react'
import styles from './card.module.css'

const Card = ({ key, pathFile, title, price }) => {
  return (
    <section key={key} className={styles.card}>
      <img src={pathFile} alt={title} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price}</p>
      </div>
    </section>
  )
}

export default Card