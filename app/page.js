import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { Backbone, How, Who, Why, Outcomes, Contact, Footer } from "../components/Sections";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#backbone">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Backbone />
        <How />
        <Who />
        <Why />
        <Outcomes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
