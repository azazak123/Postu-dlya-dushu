import { Router, Link } from "@reach/router";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./Components/Login";
import Profile from "./Components/Profile";
import PostCreator from "./Components/PostCreator";

import { useDispatch } from "react-redux";
import { autoLogin } from "./Redux/actions";
import PostLine from "./Components/PostLine";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);

  return (
    <div>
      <nav className="nav justify-content-around bg-info p-3">
        <Link className="text-white h5" to="/">
          Головна
        </Link>
        <Link className="text-white h5" to="/post-creator">
          Створити пост
        </Link>
        <Link className="text-white h5" to="/profile">
          Профіль
        </Link>
      </nav>
      <Router>
        <PostLine path="/" />
        <Login path="/login" />
        <Profile path="/profile" />
        <PostCreator path="/post-creator" />
      </Router>
    </div>
  );
}

export default App;
