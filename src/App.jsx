import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext.jsx";

function App() {
  const { theme, changeTheme } = useContext(ThemeContext);

  const themes = {
    crazy: {
      backgroundColor: "hotpink",
      WebkitTextStrokeWidth: "1px",
      letterSpacing: "2px",
      color: "white",
    },
    fancy: {
      backgroundColor: "#d4af37",
      color: "red",
      WebkitTextStrokeWidth: "2px",
      WebkitTextStrokeColor: "black",
    },
    classic: {
      backgroundColor: "white",
      color: "black",
      WebkitTextStrokeWidth: "1px",
      WebkitTextStrokeColor: "darkgrey",
    },
  };

  const themeStyle = themes[theme] || {};

  return (
    <>
      <Header title="Global State Exercise" />
      <main style={themeStyle}>
        <Card title="Ich bin Karte 1">
          <p>Ich bin der Inhalt von Karte 1</p>
        </Card>
        <Card title="Ich bin Karte 2">
          <button>Ja</button>
          <button>Nein</button>
        </Card>
        <Card title="Ich bin Karte 1">
          <p>
            Ich bin der <strong>Inhalt</strong> von Karte 3
          </p>
          <p>Ich bin noch mehr Inhalt von Karte 3</p>
        </Card>
      </main>

      <Footer />
    </>
  );
}

export default App;
