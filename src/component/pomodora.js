import "../styles.css";
import { useParams } from "react-router-dom";
import { useNotes } from "../context/noteProvider";
import { useState, useEffect } from "react";
import Countdown from "./countdown";

export default function Pomodora() {
  const { NoteId } = useParams();
  const { state } = useNotes();

  function getNoteDetails(state, NoteId) {
    return state.notes.filter((note) => note.id === NoteId);
  }
  const note = getNoteDetails(state, NoteId);

  const [counting, setCounting] = useState(false);
  const [time, setTime] = useState();
  const [key, setKey] = useState(0);

  const handleClick = (e) => {
    let timeInSeconds = e.target.value * 60;
    setTime(timeInSeconds);
    setCounting(false);
    setKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    let timerId;
    if (counting) {
      timerId = setInterval(() => {
        if (time === 1) {
          setCounting(!counting);
        }
        setTime((prevTime) => (prevTime -= 1));
      }, 1000);
    }

    return () => clearInterval(timerId);
  });

  return (
    <div className="pomodora-container">
      {note.map((note) => {
        return (
          <>
            <div className="pomodora-clock-container" key={note.id}>
              <div className="pomodora-header">
                <h3>Pomodora Clock</h3>
              </div>
              <div className="times">
                <div className="times">
                  <Countdown time={note.timer * 60} counting={counting} id={key} />
                </div>
              </div>
              <div className="pomodora-btn">
                <button
                  className="button button-primary bold ptr"
                  onClick={() => {
                    setCounting(!counting);
                  }}
                  disabled={time === 0}
                >
                  {!counting ? "Start" : "Pause"}
                </button>
                <button
                  className="button button-secondary bold ptr"
                  onClick={handleClick}
                  value={note.timer * 60}
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="note-detail-container card">
              <div className="note-container">
                <div className="note-header">
                  <h4>{note.title}</h4>
                </div>
                <div className="note-body">
                  <p className="bold p2 text-grey">{note.body}</p>
                </div>
              </div>
              <br />
              <div className="note-detail">
                <div className="label-container">
                  <div className="tag-header">
                    <h4>Tags :</h4>
                  </div>
                  <ul className="flex card-badges">
                    {note.tags.map((tag, index) => {
                      return (
                        <li key={index} className="tag">
                          <span className="tag-title">{tag}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <br />
                <div className="time-container">
                  <p className="p2 text-grey">
                    Created On : {note.date} {note.time}{" "}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
