import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./styles/index.css";
import styles from "./styles/pages/home.module.css";

import { Header } from "./components/Header";
import { FormNote } from "./components/FormNote";
import { ListNote } from "./components/ListNote/index.jsx";
import { ControllNote } from "./components/ControllNote";

function App() {
  const [listnote, setListNote] = useState([]);

  const numberlenght = listnote.length;

  const maxCharacter = listnote.reduce((acc, current) => {
    return acc + current.message.length;
  }, 0);

  const addNoteList = (date) => {
    const note = { ...date, id: uuidv4() };
    const newList = [...listnote, note];
    setListNote(newList);
  };

  const removeNoteList = (id) => {
    const filtedNote = listnote.filter((note) => {
      return note.id !== id;
    });

    setListNote(filtedNote);
  };

  return (
    <>
      <div>
        <Header />
        <main className="container">
          <div className={styles.flexBox}>
            <div className={styles.left}>
              <FormNote addNoteList={addNoteList} />
            </div>
            <div className={styles.right}>
              <h1 className="title one">Lista de notas</h1>
              <ControllNote
                maxCharacter={maxCharacter}
                numberlenght={numberlenght}
              />
              <ListNote listnote={listnote} remove={removeNoteList} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
