import React from 'react'
import styles from './style.module.css'


export default function Hero() {
   return (
      <div className={styles.hero}>
         <h1>my store</h1>
         {/* TODO */}
         <p>nice to see you {'guest'} <br /> what do you want to buy? </p>
         <button>click here</button>
      </div>
   )
}
