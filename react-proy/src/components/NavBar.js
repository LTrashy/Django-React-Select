import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Select App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active me-3" aria-current="page" to="/">
              Home
            </Link>
            <DropdownButton
              id="dropdown-basic"
              variant="Secondary"
              title="Departamento"
            >
              <Dropdown.Item href="#/action-1">Agragar</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Editar</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Eliminar</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              id="dropdown-basic"
              variant="Secondary"
              title="Ciudad"
            >
              <Dropdown.Item href="#/action-1">Agragar</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Editar</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Eliminar</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              id="dropdown-basic"
              variant="Secondary"
              title="Localidad"
            >
              <Dropdown.Item href="#/action-1">Agragar</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Editar</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Eliminar</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
