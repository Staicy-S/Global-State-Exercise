import "./ThemeSelect.css";
import { ThemeContext } from "../context/ThemeContext";

export function ThemeSelect({ changeTheme }) {
  return (
    <section className="theme-select">
      <button onClick={() => changeTheme("crazy")}>Crazy</button>
      <button onClick={() => changeTheme("fancy")}>Fancy</button>
      <button onClick={() => changeTheme("classic")}>Classic</button>
    </section>
  );
}
