import styles from "./style.module.css";

export const CardNote = ({ date, remove }) => {
  return (
    <>
      <li className={styles.noteCard}>
        <h3 className="title two">{date.nota}</h3>
        <p className="paragraph">{date.message}</p>
        <button className="btn sm solid1" onClick={() => remove(date.id)}>
          Excluir nota
        </button>
      </li>
    </>
  );
};
