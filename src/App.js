
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Navigation from "./component/navigation";
import Home from "./component/home";
import Archive from "./component/archive";
import Trash from "./component/trash";
import AddNote from "./component/addnote";
import Pomodora from "./component/pomodora";
import Edit from "./component/edit";
import Login from "./component/login";
import Signup from "./component/signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Archive" element={<Archive />} />
        <Route path="Trash" element={<Trash />} />
        <Route path="AddNote" element={<AddNote />} />
        <Route path="Pomodora" element={<Pomodora />}></Route>
        <Route path="Edit" element={<Edit />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
