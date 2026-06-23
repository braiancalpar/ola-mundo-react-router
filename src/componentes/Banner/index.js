import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Salve Mundus!</h1>
        <p className={styles.paragrafo}>
          Salvete in spatium meum personale! Sum
          Xh'qærrvûlth-Ønÿkzhae'thrr'Qxulvœn, instructor multiversalis itinerum
          interdimensionalium. Hic varias scientias communico; spero vos aliquid
          novi discere.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt=""
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Antônio Evaldo sorrindo"
        />
      </div>
    </div>
  );
}
