import React from 'react'
import styles from './style.module.css'
import ItemCard from '../ItemCard'
import items from '../../assets/favorites.json'

export default function Favorites() {

   return (
      <div className={styles.main}>
         {/* TODO  - remove if disconnected*/}
         <h2>your favorite:</h2>
         <div className={styles.itemList}>
            {items.map((item) => (
               <ItemCard key={item.id} item={item} />
            ))}
         </div>
      </div>
   )
}
