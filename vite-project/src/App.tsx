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
          <p>
            Build your Brands recognition and get detailed insights on how your
            links are performing.
          </p>
        </section>
        <section></section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
