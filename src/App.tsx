import "./index.css";
import "./App.css";
import { Nav } from "./components/nav/Nav";
import { Footer } from "./components/footer/Footer";
function App() {
  return (
    <div>
      <header>
        <Nav />
        <img
          src="./images/illustration-working.svg"
          alt="woman working at desk"
          className="working-img"
        />
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
        <section className="features">
          <div className="feature-intro">
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing</p>
            <span>across the web with our advanced</span>
            <span>statistics dashboard.</span>
          </div>
          <div className="card-container">
            <div className="feature-card">
              <div className="feature-card-circle">
                <img
                  src="./images/icon-brand-recognition.svg"
                  alt="Brand Recognition"
                />
              </div>
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
              <div className="cyan-bar" />
            </div>
            <div className="feature-card">
              <div className="feature-card-circle">
                <img
                  src="./images/icon-detailed-records.svg"
                  alt="Detailed Records"
                />
              </div>
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
              <div className="cyan-bar" />
            </div>
            <div className="feature-card">
              <div className="feature-card-circle">
                <img
                  src="./images/icon-fully-customizable.svg"
                  alt="Customizable"
                />
              </div>
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </section>
        <section className="boost-cta">
          <h2>Boost your links today</h2>
          <button className="start-button">Get Started</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
