import "../styles.css";
import { Link, useParams } from "react-router-dom";
import { useNotes } from "../context/noteProvider";
// import { useState } from "react";
import dayjs from "dayjs";

export default function AddNote() {
  const { NoteId } = useParams();
  const { state, dispatch } = useNotes();

  function getNoteDetails(state, NoteId) {
    return state.notes.filter((note) => note.id === NoteId);
  }
  const note = getNoteDetails(state, NoteId);

  const formatDate = () => dayjs().format("YYYY-MM-DD");
  const formatTime = () => dayjs().format("HH:mm:ss");

  return (
    <div className="AddNote flex-col">
      {note.map((note) => {
        return (
          <div className="add-note-container" key={note.id}>
            <section className="note-title-container tags-input">
              <input
                name="notetittle"
                placeholder="Note Tittle"
                className="note-textarea"
                maxLength="50"
                value={(note.title = state.title)}
                onChange={(e) => {
                  dispatch({
                    type: "SET_NOTE",
                    value: e.target.value,
                    key: "title"
                  });
                }}
              />
            </section>
            <section className="note-body-container tags-input">
              <textarea
                name="notebody"
                placeholder="Enter Note in 250 letters"
                className="note-textarea"
                maxLength="250"
                value={(note.body = state.body)}
                onChange={(e) => {
                  dispatch({
                    type: "SET_NOTE",
                    value: e.target.value,
                    key: "body"
                  });
                }}
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
                value={note.timer}
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
              className="button button-secondary ptr bold"
              style={{
                visibility:
                  state.title.length > 0 && state.timer !== "Select a Timer"
                    ? "visible"
                    : "hidden"
              }}
              type="submit"
              onClick={(e) => {
                dispatch({
                  type: "UPDATE_NOTE",
                  value: {
                    id: note.id,
                    title: state.title,
                    body: state.body,
                    tags: state.tags,
                    timer: state.timer,
                    date: note.date,
                    time: note.time,
                    upatedDate: formatDate(),
                    upatedTime: formatTime()
                  },
                  payload: note
                });
              }}
            >
              <Link to="/" className="text-white">
                Edit
              </Link>
            </button>
          </div>
        );
      })}
    </div>
  );
}
