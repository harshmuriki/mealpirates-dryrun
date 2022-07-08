import Head from 'next/head'
import styles from '../styles/Home.module.css'

//Landing Page Components
import Navbar from '../components/landing/Navbar'
import Footer from '../components/landing/Footer'
import Hero from '../components/landing/Hero'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>MealPirates</title>
          <link rel="icon" href="/logo.png" />
        </Head>
      </div>

      <Navbar />
      <Banner />
      <Hero />
      <Footer />
      
    </>
  )
}
