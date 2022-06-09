import "../styles.css";
import { Link } from "react-router-dom";

export default function AddNote() {
  return (
    <div className="AddNote">
      <div className="add-note-container">
        <section className="note-title-container">
          <textarea
            id="w3review"
            name="notetittle"
            rows="2"
            cols="50"
            placeholder="Note Tittle"
            className="note-textarea"
          />
        </section>
        <section className="note-body-container">
          <textarea
            id="w3review"
            name="notebody"
            rows="6"
            cols="50"
            placeholder="Note body"
            className="note-textarea"
          />
        </section>
        <section className="note-tags-container">
          <label htmlFor="notetags" className="bold p2">
            Tag :{" "}
          </label>
          <textarea
            id="notetags"
            name="notetags"
            rows="1"
            cols="30"
            placeholder="Note Tags"
            className="note-textarea"
          />
        </section>
        <section className="note-timer-container">
          <label htmlFor="timer" className="bold">
            Time :{" "}
          </label>
          <select name="timer" id="timer">
            <option defaultValue>Select a Timer</option>
            <option value="5">5 min</option>
            <option value="10">10 min</option>
            <option value="15">15 min</option>
            <option value="20">20 min</option>
            <option value="25">25 min</option>
            <option value="30">30 min</option>
            <option value="35">35 min</option>
            <option value="40">40 min</option>
            <option value="45">45 min</option>
            <option value="50">50 min</option>
            <option value="55">55 min</option>
            <option value="60">60 min</option>
          </select>
        </section>
        <br />

        <button>
          <Link to="/" className="button button-secondary ptr bold">
            Save
          </Link>
        </button>
      </div>
    </div>
  );
}
