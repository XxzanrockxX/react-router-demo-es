import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - ¡Página no encontrada!
      </h3>
      <p className="not-found__text">
        ¡Uy! Aquí no hay nada... Lo sentimos. 🥺
      </p>
      <Link to="/" className="not-found__link">
        Volver a la página de inicio
      </Link>
    </div>
  );
}

export default PageNotFound;