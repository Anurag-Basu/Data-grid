import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { fetchUserData } from "./Components/Redux/Users/Actions";
import { useDispatch } from "react-redux";
import { Navbar } from "./Components";
import { Comments, Posts, User } from "./Pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  },[dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
