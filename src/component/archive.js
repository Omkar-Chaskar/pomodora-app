import "../styles.css";
import { MdArchive, MdDeleteOutline, MdPushPin } from "react-icons/md";

export default function Archive() {
  return (
    <div className="Label">
      <div className="label-header">
        <h4>Archive</h4>
        <MdDeleteOutline className="p4 text-grey ptr" />
      </div>
      <ul className="flex-col">
        <li className="card">
          <div className="card__primary-action card__primary-action-column">
            <MdPushPin
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
              <MdArchive className="ptr" />
              <MdDeleteOutline className="ptr" />
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card__primary-action card__primary-action-column">
            <MdPushPin
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
              <MdArchive className="ptr" />
              <MdDeleteOutline className="ptr" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
