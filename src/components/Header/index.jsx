import React from 'react'
import styles from './style.module.css'


export default function Header() {
   return (
      <header className={styles.header}>
         <div>
            {/* TODO */}
            {'guest'}
         </div>
         <nav>
            <ul>
               <li> <a href="#">home</a> </li>
               <li> <a href="#">about</a> </li>
               <li> <a href="#">contact us</a> </li>
               <li> <a href="#">FAQ</a> </li>
            </ul>
            {/* sign in or sign out */}
            <button> sign in</button>
         </nav>
      </header>
   )
}
