import "../styles.css";
import { MdArchive, MdDeleteOutline, MdPushPin } from "react-icons/md";

export default function Archive() {
  return (
    <div className="Label">
      <div className="label-header">
        <h4>Archive</h4>
        <MdDeleteOutline className="p4 text-grey ptr" title="Trash All" />
      </div>
      <ul className="flex-col">
        <li className="card">
          <div className="card__primary-action card__primary-action-column">
            <MdPushPin
              name="pin item"
              title="Pin"
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
              <MdArchive name="archive item" title="Archive" className="ptr" />

              <MdDeleteOutline
                name="trash item"
                title="Trash"
                className="ptr"
              />
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card__primary-action card__primary-action-column">
            <MdPushPin
              name="pin item"
              title="Pin"
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
              <MdArchive name="archive item" title="Archive" className="ptr" />

              <MdDeleteOutline
                name="trash item"
                title="Trash"
                className="ptr"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
