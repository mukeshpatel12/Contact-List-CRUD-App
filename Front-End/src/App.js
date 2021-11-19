import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Contact from "./Components/ContactPage";
import { Redirect } from 'react-router'
function App() {
  return (
    <div>
      <center>
        <BrowserRouter>
          <>
            <Navbar bg="light" variant="light">
              <Container>
                <Navbar.Brand as={Link} to="/">
                  CONTACT DIRECTORY APP
                </Navbar.Brand>
                <Nav className="me-auto">
                </Nav>
              </Container>
            </Navbar>
          </>
          <br />
          <br />
          <Switch>
            <Route exact path="/">
            <Redirect to="/contact-list" />
            </Route>
            <Route path="/contact-list">
              <Contact />
            </Route>
          </Switch>
        </BrowserRouter>
      </center>
    </div>
  );
}

export default App;
