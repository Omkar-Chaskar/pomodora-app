import "../styles.css";
import { Link } from "react-router-dom";

export default function AddNote() {
  return (
    <div className="AddNote flex-col">
      <div className="add-note-container">
        <section className="note-title-container tags-input">
          <input
            name="notetittle"
            placeholder="Note Tittle"
            className="note-textarea"
            maxLength="50"
          />
        </section>
        <section className="note-body-container tags-input">
          <textarea
            name="notebody"
            placeholder="Enter Note in 250 letters"
            className="note-textarea"
            maxLength="250"
          />
        </section>
        <section className="note-timer-container ">
          <label htmlFor="Timer" className="bold">
            Time :{" "}
          </label>
          <select name="Timer" id="Timer" className="p1">
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

        <button className="button button-secondary ptr bold">
          <Link to="/" className="text-white">
            Edit
          </Link>
        </button>
      </div>
    </div>
  );
}
