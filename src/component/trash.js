import "../styles.css";
import { BsPin } from "react-icons/bs";
import {
  MdOutlineArchive,
  MdDeleteOutline,
  MdPushPin,
  MdRestore
} from "react-icons/md";
import { useNotes } from "../context/noteProvider";

export default function Trash() {
  const { state, dispatch } = useNotes();

  return (
    <div className="Label">
      <div className="label-header">
        <h4>Trash</h4>
        <MdDeleteOutline
          className="p4 text-grey ptr"
          title="Clear All"
          onClick={() =>
            dispatch({
              type: "REMOVE_ALL_TRASH_NOTES",
              payload: state.trash
            })
          }
        />
      </div>
      {state.trash < 1 ? (
        <p className="p3 bold center">There is no task in trash.</p>
      ) : (
        <ul className="flex-col">
          {state.trash &&
            state.trash.map((note) => {
              return (
                <li className="card" key={note.id}>
                  <div className="card__primary-action card__primary-action-column">
                    {state.pin &&
                    state.pin.some((item) => note.id === item.id) ? (
                      <MdPushPin
                        name="pin item"
                        title="Unpin"
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
                        title="Pin"
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
                        {note.tags.map((tag, index) => {
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
                        className="ptr"
                        title="Add to Archive"
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_ARCHIVE_NOTES",
                            payload: note
                          })
                        }
                      />

                      <MdRestore
                        name="trash item"
                        className="ptr"
                        title="Restore"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_TRASH_NOTES",
                            payload: note
                          })
                        }
                      />
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}
