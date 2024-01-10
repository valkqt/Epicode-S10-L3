import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import css from "./css/nav.module.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function NavC(props) {
  const location = useLocation()

  function linkMatcher(path) {
    return (location.pathname === `${path}` ? 'nav-link active' : 'nav-link')
  }

  return (
    <Navbar expand="lg" className={css.navBody + " sticky-top"}>
      <Container fluid>
        <Link as={"header"} href="#home" className="navbar-brand">
          <img className={css.logo} src="..\layout\netflix_logo.png" />
        </Link>
        <Nav className="me-auto">
          <Link to={"/"} className={linkMatcher('/')}>Home</Link>
          <Link to={"/tvshows"} className={linkMatcher('/tvshows')}>TV Shows</Link>
          <Link to={"/movies"} className={linkMatcher('/movies')}>Movies</Link>
          <Link to={"/recent"} className={linkMatcher('/recent')}>Recently Added</Link>
          <Link to={"/mylist"} className={linkMatcher('/mylist')}>My List</Link>
        </Nav>
        <div>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              props.onSearchSubmit(e.target[0].value);
            }}
          >
            {/* <Form> */}

            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Search and press Enter"
                className={css.searchBar}
              />
            </Form.Group>
          </Form>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavC;
