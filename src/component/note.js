import "../styles.css";
import { BsPin } from "react-icons/bs";
import { MdOutlineArchive, MdDeleteOutline, 
  MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Note() {
  return (
    <ul className="flex-col">
      <p className="p3 bold center">All Notes</p>
      <li className="card">
        <div className="card__primary-action card__primary-action-column">
          <BsPin
            name="pin item"
            className="badge-up-right-corner p3 text-grey ptr"
          />
          <Link className="text-dark" to="Pomodora">
            <div className="card__primary">
              <h2 className="p3 bold">Note Title....</h2>
            </div>
          </Link>
        </div>
        <div className="card__actions">
          <p className="text-grey p1">Created on 26/10/2021</p>
          <div className="card__action-icons p3 text-grey">
            <MdOutlineArchive className="ptr" />
            <MdDeleteOutline className="ptr" />
            <Link className="text-dark" to="">
            <MdOutlineEdit />
            </Link>
          </div>
        </div>
      </li>
      <li className="card">
        <div className="card__primary-action card__primary-action-column">
          <BsPin
            name="pin item"
            className="badge-up-right-corner p3 text-grey ptr"
          />
          <Link className="text-dark" to="Pomodora">
            <div className="card__primary">
              <h2 className="p3 bold">Note Title....</h2>
            </div>
          </Link>
        </div>
        <div className="card__actions">
          <p className="text-grey p1">Created on 26/10/2021</p>
          <div className="card__action-icons p3 text-grey">
            <MdOutlineArchive className="ptr" />
            <MdDeleteOutline className="ptr" />
            <Link className="text-dark" to="">
            <MdOutlineEdit />
            </Link>
          </div>
        </div>
      </li>
    </ul>
  );
}
