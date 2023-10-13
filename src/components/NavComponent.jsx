import { ListGroup } from "reactstrap";
import {Link} from 'react-router-dom'

export default function NavComponent(){
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" action to="/">
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" action to="/about">
                About
            </Link>
            <Link className="list-group-item list-group-item-action" action to="info">
                Info
            </Link> 
            <Link className="list-group-item list-group-item-action" action to="booking">
                Appointment
            </Link>               
            <Link className="list-group-item list-group-item-action" action to="contact">
                Contact
            </Link>
        </ListGroup>
    );
}