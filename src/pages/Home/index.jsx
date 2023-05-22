import React from 'react'
import styles from './style.module.css'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Favorites from '../../components/Favorites'
import Form from '../../components/Form'
import Footer from '../../components/Footer'

export default function Home() {
   return (
      <div>
         <Header />
         <Hero />
         <Favorites />
         <Form />
         <Footer />
      </div>
   )
}
