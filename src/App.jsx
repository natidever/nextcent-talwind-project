import Nav from "./componets/Nav"
import Hero from "./componets/Hero"
import Client from "./componets/Client."
import Community from "./componets/community"
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
  </main>
  )
}