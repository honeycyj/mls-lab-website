import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";
import { About } from "./components/sections/About/About";
import { Contact } from "./components/sections/Contact/Contact";
import { Hero } from "./components/sections/Hero/Hero";
import { Solutions } from "./components/sections/Solutions/Solutions";

function App() {
  return (
    <div className="site-shell">
      <div className="site-shell__glow site-shell__glow--one" aria-hidden="true" />
      <div className="site-shell__glow site-shell__glow--two" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
