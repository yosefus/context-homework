import React from 'react'
import styles from './style.module.css'


export default function Header() {
   return (
      <header className={styles.header}>
         <div className={styles.user}>
            {/* TODO */}
            {'guest'}
         </div>
         <nav>
            <ul>
               <li> <a href="#">home</a> </li>
               <li> <a href="#">about</a> </li>
            </ul>
            {/* 
            
            sign in or sign out button - with functionality 
            -  sign in function:
            onClick  = put some user { name : 'avi', id: '88772653', img : '' } in the context
            -  sign out function:
            onClick  = delete this user from the context
            
            */}
            <button> sign in</button>
         </nav>
      </header>
   )
}
