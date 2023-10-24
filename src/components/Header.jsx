import "./Header.css";
import { ThemeSelect } from "./ThemeSelect";
export function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <ThemeSelect />
    </header>
  );
}
