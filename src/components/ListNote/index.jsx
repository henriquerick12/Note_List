import styles from "./style.module.css";

import { CardNote } from "./CardNote";

export const ListNote = ({ listnote, remove }) => {
  return (
    <>
      {listnote.length > 0 ? (
        <ul className={styles.noteList}>
          {listnote.map((element) => {
            return <CardNote key={element.id} date={element} remove={remove} />;
          })}
        </ul>
      ) : (
        <p className="paragraph">Cadastre a primeira nota</p>
      )}
    </>
  );
};
