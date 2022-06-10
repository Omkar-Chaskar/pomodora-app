import "../styles.css";
import { Link } from "react-router-dom";
import { BsPin } from "react-icons/bs";
import {
  MdOutlineArchive,
  MdDeleteOutline,
  MdPushPin,
  MdOutlineEdit
} from "react-icons/md";
import { useNotes } from "../context/noteProvider";

export default function Note() {
  const { state, dispatch } = useNotes();

  return (
    <ul className="flex-col">
      <p className="p3 bold center">Tasks</p>
      {state.notes.map((note) => {
        return (
          <Link className="text-dark" to={`/Pomodora/${note.id}`} key={note.id}>
            <li className="card">
              <div className="card__primary-action card__primary-action-column">
                {state.pin && state.pin.some((item) => note.id === item.id) ? (
                  <MdPushPin
                    name="pin item"
                    title="Pin"
                    className="badge-up-right-corner p3 text-grey ptr"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_PIN_NOTES",
                        payload: note
                      })
                    }
                  />
                ) : (
                  <BsPin
                    name="pin item"
                    title="Unpin"
                    className="badge-up-right-corner p3 text-grey ptr"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_PIN_NOTES", payload: note })
                    }
                  />
                )}
                <div className="card__primary">
                  <h2 className="p3 bold">{note.title}</h2>
                  <p className="p2">{note.body}</p>
                  <ul className="flex card-badges">
                    {note.tags &&
                      note.tags.map((tag, index) => {
                        return (
                          <li key={index} className="tag">
                            <span className="tag-title">{tag}</span>
                          </li>
                        );
                      })}
                  </ul>
                  <div className="flex flex-align-end">
                    <p className=" p1 bold">{note.timer} Min</p>
                  </div>
                </div>
              </div>
              <div className="card__actions">
                <p className="text-grey p1">Created on {note.date}</p>
                <div className="card__action-icons p3 text-grey">
                  <MdOutlineArchive
                    name="archive item"
                    title="Archive"
                    className="ptr"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_ARCHIVE_NOTES", payload: note })
                    }
                  />
                  <MdDeleteOutline
                    name="trash item"
                    title="Trash"
                    className="ptr"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_TRASH_NOTES", payload: note })
                    }
                  />
                  <Link className="text-dark" to={`/${note.id}`}>
                    <MdOutlineEdit
                      name="edit"
                      title="Edit"
                      className="ptr"
                      onClick={() =>
                        dispatch({ type: "SET_TAGS", payload: note.tags })
                      }
                    />
                  </Link>
                </div>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
