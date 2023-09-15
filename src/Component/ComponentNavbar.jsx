import { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";

import { navLinks, dropdown, dropdown2 } from "../data/index";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ComponentNavbar = () => {
  let navigate = useNavigate();

  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      changeBackgroundColor();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div >
      <Navbar
        expand="lg"
        fixed="top"
        className={changeColor ? "color-active" : ""}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="fs-7 fw-bold"
            onClick={() => navigate("/home")}
          >
            SMAN 5 CIREBON
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center" variant="primary">
              <NavDropdown
                title="ProfilSekolah"
                id="basic-nav-dropdown"
                className="b"
              >
                {dropdown.map((item) => (
                  <NavDropdown.Item key={item.id} href={item.path}>
                    {item.text}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown
                title="Kesiswaan"
                id="basic-nav-dropdown"
                className="b"
              >
                {dropdown2.map((item) => (
                  <NavDropdown.Item key={item.id} href={item.path}>
                    {item.text}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
              <button
                className="outline-button2"
                onClick={() => navigate("/Berita")}
              >
                Informasi Akun G-SUITE
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default ComponentNavbar;
