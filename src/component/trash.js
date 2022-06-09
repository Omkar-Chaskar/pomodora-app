import "../styles.css";
import { BsPin } from "react-icons/bs";
import { MdOutlineArchive, MdDeleteOutline, MdRestore } from "react-icons/md";

export default function Trash() {
  return (
    <div className="Label">
      <div className="label-header">
        <h4>Trash</h4>
        <MdDeleteOutline className="p4 text-grey ptr" />
      </div>

      <ul className="flex-col">
        <li className="card">
          <div className="card__primary-action card__primary-action-column">
            <BsPin
              name="pin item"
              className="badge-up-right-corner p3 text-grey ptr"
            />
            <div className="card__primary">
              <h2 className="p3 bold">Note Title....</h2>
            </div>
          </div>
          <div className="card__actions">
            <p className="text-grey p1">Created on 26/10/2021</p>
            <div className="card__action-icons p3 text-grey">
              <MdOutlineArchive className="ptr" />
              <MdRestore className="ptr" />
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card__primary-action card__primary-action-column">
            <BsPin
              name="pin item"
              className="badge-up-right-corner p3 text-grey ptr"
            />
            <div className="card__primary">
              <h2 className="p3 bold">Note Title....</h2>
            </div>
          </div>
          <div className="card__actions">
            <p className="text-grey p1">Created on 26/10/2021</p>
            <div className="card__action-icons p3 text-grey">
              <MdOutlineArchive className="ptr" />
              <MdRestore className="ptr" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
