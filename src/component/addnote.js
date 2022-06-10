import "../styles.css";
import { Link } from "react-router-dom";
import { useNotes } from "../context/noteProvider";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import dayjs from "dayjs";

export default function AddNote() {
  const { state, dispatch } = useNotes();
  const [tags, setTags] = useState([]);
  const formatDate = () => dayjs().format("YYYY-MM-DD");
  const formatTime = () => dayjs().format("HH:mm:ss");
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const initialValue = (e) => {
    e.target.value = " ";
  };
  return (
    <div className="AddNote flex-col">
      <div className="add-note-container">
        <section className="note-title-container tags-input">
          <input
            name="notetittle"
            placeholder="Note Tittle"
            className="note-textarea"
            maxLength="50"
            value={state.title}
            onChange={(e) => {
              dispatch({
                type: "SET_NOTE",
                value: e.target.value,
                key: "title"
              });
              initialValue(e);
            }}
          />
        </section>
        <section className="note-body-container tags-input">
          <textarea
            name="notebody"
            placeholder="Enter Note in 250 letters"
            className="note-textarea"
            maxLength="250"
            value={state.body}
            onChange={(e) => {
              dispatch({
                type: "SET_NOTE",
                value: e.target.value,
                key: "body"
              });
              initialValue(e);
            }}
          />
        </section>
        <section className="note-tags-container tags-input">
          <ul id="tags">
            {tags.map((tag, index) => (
              <li key={index} className="tag">
                <span className="tag-title">{tag}</span>
                <span
                  className="tag-close-icon"
                  onClick={() => removeTags(index)}
                >
                  x
                </span>
              </li>
            ))}
          </ul>
          <input
            type="text"
            onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
            placeholder="Press enter to add tags"
          />
        </section>
        <section className="note-timer-container ">
          <label htmlFor="Timer" className="bold">
            Time :{" "}
          </label>
          <select
            name="Timer"
            id="Timer"
            className="p1"
            value={state.timer}
            onChange={(e) =>
              dispatch({
                type: "SET_NOTE",
                value: e.target.value,
                key: "timer"
              })
            }
          >
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

        <button
          style={{
            visibility:
              state.title &&
              state.title.length > 0 &&
              state.timer !== "Select a Timer"
                ? "visible"
                : "hidden"
          }}
          onClick={() => {
            dispatch({
              type: "ADD_TO_NOTE",
              value: {
                id: uuid(),
                title: state.title,
                body: state.body,
                tags: tags,
                timer: state.timer,
                date: formatDate(),
                time: formatTime()
              }
            });
          }}
        >
          <Link to="/" className="button button-secondary ptr bold">
            Save
          </Link>
        </button>
      </div>
    </div>
  );
}
