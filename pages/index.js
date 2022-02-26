import Header from '../components/header'
import Hero from '../components/hero'
import HowItWorks from '../components/working'
import Topics from '../components/topics'
import Footer from '../components/footer'

export default function Home({datas}) {
  return (
    <div className='bg-dark-background'>
      {/* <Header /> */}
      <Hero />
      <HowItWorks />
      <Topics />
      <Footer />
    </div>    
  )
}