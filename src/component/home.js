import "../styles.css";
import Pin from "./pin";
import Note from "./note";

export default function Home() {
  return (
    <div className="home">
      <>
        <Pin />
        <Note />
      </>
    </div>
  );
}
