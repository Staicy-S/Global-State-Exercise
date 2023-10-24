import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header title="Global State Exercise" />
      <main>
        <div className="card">
          <h2>Ich bin Karte 1</h2>
          <p>Ich bin der Inhalt von Karte 1</p>
        </div>
        <div className="card">
          <h3>Ich bin Karte 2</h3>
          <button>Ja</button>
          <button>Nein</button>
        </div>
        <div className="card">
          <h2>Ich bin Karte 1</h2>
          <p>
            Ich bin der <strong>Inhalt</strong> von Karte 3
          </p>
          <p>Ich bin noch mehr Inhalt von Karte 3</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
