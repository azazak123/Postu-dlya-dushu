import { Redirect } from "@reach/router";

import { useDispatch, useSelector } from "react-redux";
import { googleLogout } from "../Redux/actions";

export default function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="container mt-3">
      {!user ? <Redirect noThrow={true} to="/login" /> : ""}
      <div className="row mb-3 justify-content-start">
        <div className="col-3 p-3 bg-light border">
          <div className="row mb-3">
            <img
              src={user?.photoURL}
              alt="Profile"
              className="img-fluid img-thumbnail rounded mx-auto d-block"
            />
          </div>
          <div className="text-center">
            <p>Кількість лайків:</p>
            <p>Кількість постів:</p>
            <p>Кількість лайків:</p>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(googleLogout())}
            >
              Вийти
            </button>
          </div>
        </div>
        <div className="col ml-5 text-center border bg-light">
          <div className="h3 mt-3">{user?.displayName}</div>
        </div>
      </div>
    </div>
  );
}
