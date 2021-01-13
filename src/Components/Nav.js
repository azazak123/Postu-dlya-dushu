import { Link } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Nav({ children }) {
  return (
    <div>
      <nav className="nav justify-content-around bg-info p-3">
        <Link className="text-white" to="/">
          Головна
        </Link>
        <Link className="text-white" to="/">
          Створити пост
        </Link>
        <Link className="text-white" to="/login">
          Профіль
        </Link>
      </nav>
    </div>
  );
}
