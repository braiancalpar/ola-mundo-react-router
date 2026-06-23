import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Mihi ipsi narrans">
      <h3 className={styles.subtitulo}>Salve, ego sum:</h3>
      <h3 className={styles.subtitulo}>Xh'qærrvûlth-Ønÿkzhae'thrr'Qxulvœn!</h3>
      <img
        className={styles.fotoSobreMim}
        src={fotoSobreMim}
        alt="Foto da insignificância humana"
      />
      <p className={styles.paragrafo}>
        Salve, viator inter stellas. Ego sum umbra resonans fluctuum aeternorum,
        custos silentii antiqui, qui inter lumen et tenebras sine fine vagatur.
      </p>
      <p className={styles.paragrafo}>
        Origo mea ante tempora mortalia fuit. Spectavi lunas inversas, nebulas
        argentatas et formas ignotas quae ultra fines caelorum dormiunt et sine
        voce canunt.
      </p>
      <p className={styles.paragrafo}>
        Per saecula innumerabilia transivi palatia crystallina vacui immensi.
        Ibi venti obscuri movebant maria lucis et sidera sine motu super abyssos
        quiescebant.
      </p>
      <p className={styles.paragrafo}>
        In illis regionibus didici voces silentii. Audivi memorias stellarum
        perditarum et secutus sum vias quae ad nullum locum ducere videbantur.
      </p>
      <p className={styles.paragrafo}>
        Postea conveni choros orbium caelestium. Circa soles veteres circumibant
        et harmonias occultas texebant quas pauci intellegere possunt.
      </p>
      <p className={styles.paragrafo}>
        Ex illo tempore permaneo inter infinitas dimensiones. Custodio somnia
        luminis et observo mutationes universi dum rota aeternitatis sine fine
        convertitur.
      </p>
    </PostModelo>
  );
}
