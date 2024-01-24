import Nav from "./componets/Nav"
import Hero from "./componets/Hero"
import Client from "./componets/Client."
import Community from "./componets/community"
import MiddleHero from "./componets/MiddleHero"
import Helping from "./componets/Helping"
import LastHero from "./componets/LastHero"
import Tesla from "./componets/tesla"
import Caring from "./componets/caring"
import Ending from "./componets/Ending"
import Footer from "./componets/footer"
export default function App() {
  return (
  <main className="">
    <section>
      <Nav/>
    </section>

    <section>
      <Hero/>
    </section>

    <section>
      <Client/>
    </section>

    <section>
    <Community/>
    </section>



    <section>
      <MiddleHero/>
    </section>


    <section>
      <Helping/>
    </section>

    <section>
    <LastHero/>
    </section>

    <Tesla/>
    <Caring/>
    <Ending/>
    <Footer/>

  </main>
  )
}