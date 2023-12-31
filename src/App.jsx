import {Hero, CustomerReview,Footer,SuperQuality,SpecialOffer,Services,Subcribe,PopularProduct} from './index'
import Nav from './components/Nav';


const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-purple-100">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16">
        <Subcribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App;