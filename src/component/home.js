import "../styles.css";
import Pin from "./pin";
import Note from "./note";
import { useNotes } from "../context/noteProvider";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const { state } = useNotes();

  return (
    <div className="home">
      {state.pin.length > 0 ? (
        <>
          <Pin />
          <Note />
        </>
      ) : (
        <>
          <Note />
        </>
      )}
      <Toaster position="bottom-right" reverseOrder={true} />
    </div>
  );
}
