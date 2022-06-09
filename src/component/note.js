import "../styles.css";
import { Link } from "react-router-dom";
import { BsPin } from "react-icons/bs";
import {
  MdOutlineArchive,
  MdDeleteOutline,
  MdOutlineEdit,
} from "react-icons/md";

export default function Note() {
  return (
    <ul className="flex-col">
      <p className="p3 bold center">Tasks</p>
      <Link className="text-dark" to="Pomodora">
        <li className="card">
          <div className="card__primary-action card__primary-action-column">
            <BsPin
              name="pin item"
              title="Unpin"
              className="badge-up-right-corner p3 text-grey ptr"
            />
            <div className="card__primary">
              <h2 className="p3 bold">Note Title</h2>
              <p className="p2">Note Body</p>
              <ul className="flex card-badges">
                <li className="tag">
                  <span className="tag-title">Tag 1</span>
                </li>
                <li className="tag">
                  <span className="tag-title">Tag 2</span>
                </li>
              </ul>
              <div className="flex flex-align-end">
                <p className=" p1 bold">60 Min</p>
              </div>
            </div>
          </div>

          <div className="card__actions">
            <p className="text-grey p1">Created on 12/12/2012</p>
            <div className="card__action-icons p3 text-grey">
              <MdOutlineArchive
                name="archive item"
                title="Archive"
                className="ptr"
              />
              <MdDeleteOutline
                name="trash item"
                title="Trash"
                className="ptr"
              />
              <Link className="text-dark" to="Edit">
                <MdOutlineEdit name="edit" title="Edit" className="ptr" />
              </Link>
            </div>
          </div>
        </li>
      </Link>
      <Link className="text-dark" to="Pomodora">
        <li className="card">
          <div className="card__primary-action card__primary-action-column">
            <BsPin
              name="pin item"
              title="Unpin"
              className="badge-up-right-corner p3 text-grey ptr"
            />
            <div className="card__primary">
              <h2 className="p3 bold">Note Title</h2>
              <p className="p2">Note Body</p>
              <ul className="flex card-badges">
                <li className="tag">
                  <span className="tag-title">Tag 1</span>
                </li>
                <li className="tag">
                  <span className="tag-title">Tag 2</span>
                </li>
              </ul>
              <div className="flex flex-align-end">
                <p className=" p1 bold">60 Min</p>
              </div>
            </div>
          </div>

          <div className="card__actions">
            <p className="text-grey p1">Created on 12/12/2012</p>
            <div className="card__action-icons p3 text-grey">
              <MdOutlineArchive
                name="archive item"
                title="Archive"
                className="ptr"
              />
              <MdDeleteOutline
                name="trash item"
                title="Trash"
                className="ptr"
              />
              <Link className="text-dark" to="Edit">
                <MdOutlineEdit name="edit" title="Edit" className="ptr" />
              </Link>
            </div>
          </div>
        </li>
      </Link>
    </ul>
  );
}
