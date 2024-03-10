import React from 'react'
import styles from './Number.module.css'

function Number() {
  return (
    <div className={styles.number_con}>
      <div className={styles.number_items}>
        <h3>100+</h3>
        <p>Project Delivered</p>
      </div>
      <div className={styles.number_items}>
        <h3>50+</h3>
        <p>Companies Helped</p>
      </div>
      <div className={styles.number_items}>
        <h3>8+</h3>
        <p>Years of Experience</p>
      </div>
      <div className={styles.number_items}>
        <h3>555+</h3>
        <p>Happy Clients</p>
      </div>
    </div>
  )
}

export default Number