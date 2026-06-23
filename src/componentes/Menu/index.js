import styles from "./Menu.module.css";
import MenuLInk from "../MenuLink";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLInk to="/">Inicio</MenuLInk>
        <MenuLInk to="/sobremim">Sobre mim</MenuLInk>
      </nav>
    </header>
  );
}
