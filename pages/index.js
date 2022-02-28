import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/hero'
import HowItWorks from '../components/working'
import Topics from '../components/topics'
import Footer from '../components/footer'

export default function Home({datas}) {
  return (
    <div className='bg-dark-background'>
      <Head>
        <title>DevSpaces</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="DevSpaces is a twitter spaces finder for programmers. It displays spaces on tech, programming, and development." />
      </Head>
      <Header />
      <Hero />
      <HowItWorks />
      <Topics />
      <Footer />
    </div>    
  )
}