import Nav from "./componets/Nav"
import Hero from "./componets/Hero"
import Client from "./componets/Client."
import Community from "./componets/community"
import MiddleHero from "./componets/MiddleHero"
export default function App() {
  return (
  <main>
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
  </main>
  )
}