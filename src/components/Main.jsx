import NavComponent from "./NavComponent";
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Info from './InfoComponent';
import Booking from './BookingComponent';
import {Routes, Route} from 'react-router-dom';
import { ListGroup, ListGroupItem, Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink,Row, Col, Container } from "reactstrap";

export default function Main(){
    return(
        <>
           <div class="jumbotron jumbotron-fluid mt-3">
                <div class="container">
                    <h1 class="display-4">Manipaul</h1>
                    <p class="lead">Your health is our responsibility.</p>
                    <hr class="my-4"/>
                </div>
            </div>
            <Container>
                <Row>
                <Col md={3}>
                <NavComponent />
                </Col>
                <Col md={9}>
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/about" Component={About} exact/>
                        <Route path="contact" Component={Contact} exact/>
                        <Route path="info" Component={Info} exact/>
                        <Route path="booking" Component={Booking} exact/>
                    </Routes>
                </Col>  
                </Row>
            </Container>
        </>
    );
}