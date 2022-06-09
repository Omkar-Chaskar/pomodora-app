import "../styles.css";
import { BsPin } from "react-icons/bs";
import { MdArchive, MdDeleteOutline, MdPushPin } from "react-icons/md";
import { useNotes } from "../context/noteProvider";

export default function Archive() {
  const { state, dispatch } = useNotes();

  return (
    <div className="Label">
      <div className="label-header">
        <h4>Archive</h4>
        <MdDeleteOutline
          className="p4 text-grey ptr"
          title="Trash All"
          onClick={() =>
            dispatch({
              type: "ADD_ALL_ARCHIVE_TO_TRASH_NOTES",
              payload: state.archive
            })
          }
        />
      </div>
      {state.archive < 1 ? (
        <p className="p3 bold center">There is no task in archive.</p>
      ) : (
        <ul className="flex-col">
          {state.archive &&
            state.archive.map((note) => {
              return (
                <li className="card" key={note.id}>
                  <div className="card__primary-action card__primary-action-column">
                    {state.pin &&
                    state.pin.some((item) => note.id === item.id) ? (
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
                        {note.tags.map((tag, index) => {
                          return (
                            <li className="card-label p1" key={index}>
                              {tag}
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
                      {state.archive &&
                        state.archive.some((item) => note.id === item.id) && (
                          <MdArchive
                            name="archive item"
                            title="Archive"
                            className="ptr"
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_ARCHIVE_NOTES",
                                payload: note
                              })
                            }
                          />
                        )}

                      <MdDeleteOutline
                        name="trash item"
                        title="Trash"
                        className="ptr"
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_TRASH_NOTES",
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
