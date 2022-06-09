import "../styles.css";

export default function Pomodora() {
  return (
    <div className="pomodora-container">
      <div className="pomodora-clock-container">
        <div className="pomodora-header">
          <h3>Pomodora Clock</h3>
        </div>
        <div className="times">
          <div className="times-content">
            <span id="time-left">45:16</span>
            <label className="timer-total text-grey">out of 60min</label>
          </div>
        </div>
        <div className="pomodora-btn">
          <button className="button button-primary bold ptr">Start</button>
          <button className="button button-secondary bold ptr">Reset</button>
        </div>
      </div>
      <div className="note-detail-container card">
        <div className="note-container">
          <div className="note-header">
            <h4>Note Title...</h4>
          </div>
          <div className="note-body">
            <p className="bold p2 text-grey">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen.
            </p>
          </div>
        </div>
        <br />
        <div className="note-detail">
          <div className="label-container">
            <div className="tag-header">
              <h4>Tags :</h4>
            </div>
            <ul className="list">
              <li className="card-label">Label 1</li>
              <li className="card-label">Label 2</li>
              <li className="card-label">Label 3</li>
            </ul>
          </div>
          <br />
          <div className="time-container">
            <p className="p2 text-grey">Created On : 14/02/2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
