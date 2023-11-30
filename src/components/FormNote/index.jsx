import styles from "./style.module.css";

import { useState } from "react";

export const FormNote = ({ addNoteList }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();

    addNoteList({ title, message });
  };

  return (
    <>
      <div className={styles.formBox}>
        <h2 className="title two">Cadastre a sua nota</h2>
        <form onSubmit={submit} className="form">
          <input
            placeholder="Título da nota"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            placeholder="Mensagem"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
          <button className="btn lg solid1" type="submit">
            Criar nota
          </button>
        </form>
      </div>
    </>
  );
};
