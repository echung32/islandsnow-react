import React from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Button, Col, Container, Form, Image, InputGroup, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap';
import {Cart, Facebook, HouseFill, Instagram, PersonFill, Pinterest, Search, Twitter} from "react-bootstrap-icons";

const TopMenu = () => (<Navbar bg="light" expand="lg">
    <Container>
        <Nav className="me-auto">
            <Nav.Link><Facebook/></Nav.Link>
            <Nav.Link><Twitter/></Nav.Link>
            <Nav.Link><Pinterest/></Nav.Link>
            <Nav.Link><Instagram/></Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
            <Nav.Link><HouseFill/> </Nav.Link>
            <Nav.Link><Search/> </Nav.Link>
            <Nav.Link><PersonFill/> </Nav.Link>
            <NavDropdown title={<Cart/>}>
                <NavDropdown.Item></NavDropdown.Item>
                <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
            </NavDropdown>
        </Nav>
    </Container>
</Navbar>);

const IslandSnowLogo = () => (<Col className={"justify-content-center pt-3"}>
    <Image src={"experience-islandsnow-bootstrap-logo.png"} className={"img-fluid rounded mx-auto d-block py-1"}
           width={"250px"}></Image>
</Col>);

const MiddleMenu = () => (<Navbar className={"pt-3"}>
    <Container className={"justify-content-center"}>
        <Nav className={"gap-3 middle-menu"}>
            <NavDropdown title={"MEN"}>
                <NavDropdown.Item></NavDropdown.Item>
                <NavDropdown.ItemText>Nothing</NavDropdown.ItemText>
            </NavDropdown>
            <NavDropdown title={"WOMEN"}>
                <NavDropdown.Item></NavDropdown.Item>
                <NavDropdown.ItemText>Nothing</NavDropdown.ItemText>
            </NavDropdown>
            <NavDropdown title={"KIDS"}>
                <NavDropdown.Item></NavDropdown.Item>
                <NavDropdown.ItemText>Nothing</NavDropdown.ItemText>
            </NavDropdown>
            <NavDropdown title={"BRANDS"}>
                <NavDropdown.Item></NavDropdown.Item>
                <NavDropdown.ItemText>Nothing</NavDropdown.ItemText>
            </NavDropdown>
            <Nav.Link>SEARCH</Nav.Link>
        </Nav>
    </Container>
</Navbar>);

const FullWidthImage = () => (<Col className={"justify-content-center"}>
    <Image src={"experience-islandsnow-bootstrap-main.png"} className={"img-fluid"}></Image>
</Col>);

const FooterMenu = () => (
    <Container className={"p-5 footer"}>
        <Row>
            <Col>
                <h2>NAVIGATION</h2>
                <hr/>
                <p>About Us</p>
                <p>Employment</p>
                <p>Videos</p>
            </Col>
            <Col>
                <h2>MAIN MENU</h2>
                <hr/>
                <p>Men</p>
                <p>Women</p>
                <p>Kids</p>
            </Col>
            <Col>
                <h2>CONNECT</h2>
                <hr/>
                <p>Sign up for the latest updates</p>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Enter Email Address"
                        aria-label="email address"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-light" id="button-addon2">
                        Join
                    </Button>
                </InputGroup>
            </Col>
        </Row>
    </Container>
);

const IslandSnow = () => (
    <Container>
        <TopMenu/>
        <IslandSnowLogo/>
        <MiddleMenu/>
        <FullWidthImage/>
        <FooterMenu/>
    </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IslandSnow/>
);