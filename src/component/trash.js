import "../styles.css";
import { MdOutlineArchive, MdDeleteOutline, MdRestore } from "react-icons/md";

export default function Trash() {
  return (
    <div className="Label">
      <div className="label-header">
        <h4>Trash</h4>
        <MdDeleteOutline className="p4 text-grey ptr" title="Clear All" />
      </div>
      <ul className="flex-col">
        <li className="card">
          <div className="card__primary-action card__primary-action-column">
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
                className="ptr"
                title="Add to Archive"
              />

              <MdRestore name="trash item" className="ptr" title="Restore" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
