import React from 'react'
import styles from './style.module.css'

export default function Form() {

   // BONUS !!!
   // TODO- change name by submit
   // TODO- form not shown if not connected
   return (
      <div className={styles.form}>
         <form >
            <h4>change your details</h4>
            <input type="text" placeholder="your name..." />
            <button type="submit"> change now!</button>
         </form>
      </div>
   )
}
