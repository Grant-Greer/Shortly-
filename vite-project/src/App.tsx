import "./index.css";
import "./App.css";
import { Nav } from "./components/nav/Nav";
import { WorkingImg } from "./assets/WorkingImg";
function App() {
  return (
    <div>
      <header>
        <Nav />
        <WorkingImg />
      </header>
      <main>
        <section className="intro">
          <h2>More than just</h2>
          <h2>shorter links</h2>
          <p>Build your Brands recognition and</p>
          <span>get detailed insights on how your</span>
          <span>links are performing.</span>
          <button className="start-button">Get Started</button>
        </section>
        <section></section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
