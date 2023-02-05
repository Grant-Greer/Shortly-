import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Features } from "./components/features/Features";
import ShortForm from "./components/shortform/ShortForm";
function App() {
  return (
    <>
      <Header />
      <main>
        <ShortForm />
        <Features />
        <section className="boost-cta">
          <h2>Boost your links today</h2>
          <button className="start-button">Get Started</button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
