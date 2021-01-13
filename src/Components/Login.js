import "bootstrap/dist/css/bootstrap.min.css";

import { useDispatch, useSelector } from "react-redux";
import { googleLogin, googleLogout } from "../Redux/actions";

import { Redirect } from "@reach/router";

export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <div className="container mt-3">
      {user ? <Redirect noThrow={true} to="/profile" /> : ""}
      <div className="row justify-content-center">
        <div className="col">
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={() => dispatch(googleLogin())}
          >
            Увійти
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={() => dispatch(googleLogout())}
          >
            Вийти
          </button>
        </div>
      </div>
    </div>
  );
}
