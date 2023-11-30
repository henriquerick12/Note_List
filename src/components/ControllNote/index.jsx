import styles from "./style.module.css";

export const ControllNote = ({ maxCharacter, numberlenght }) => {
  return (
    <div className={styles.numberBox}>
      <span className="paragraph">
        Notas: <strong>{numberlenght}</strong>
      </span>
      <span className="paragraph">
        Caracteres: <strong>{maxCharacter}</strong>
      </span>
    </div>
  );
};
