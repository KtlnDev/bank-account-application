import React, {useState} from "react";
import { Container, Nav, Navbar, Button} from "react-bootstrap";
import ModalLogin from "./modal-login";
import ModalSignUp from "./modal-sign-up";

export default function NavigationBar(){
    const [modalLoginShow, setModalLoginShow] = useState(false);
    const [modalSignUpShow, setModalSignUpShow] = useState(false);

    return(
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">First Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    <Nav.Link href="#plans">Plans</Nav.Link>
                    <Nav.Link href="#business">Business</Nav.Link>
                    <Nav.Link href="#individual">Individual</Nav.Link>
                    <Nav.Link href="#support">Support</Nav.Link>
                </Nav>
                <Button className="me-2" variant="outline-info" onClick={() => setModalSignUpShow(true)}>Sign up</Button>
                <Button variant="outline-success" onClick={() => setModalLoginShow(true)}>Log in</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <ModalLogin show={modalLoginShow} onHide={() => setModalLoginShow(false)} />
        <ModalSignUp show={modalSignUpShow} onHide={() => setModalSignUpShow(false)} />
        </>
    )

}