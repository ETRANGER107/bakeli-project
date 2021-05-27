import React from "react"
import Calendars from "../../../Apprenant/HomePageApp/Aside/Calendars";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Badge from 'react-bootstrap/Badge'

const Aside = () => {
    return(
        // <div className="card">
        //     <div className="card-body">
        //         <Calendars />
        //         <hr />
        //         <h6 className="cart-title">Explore events</h6>
        //         <p className="card-text">Meetup</p><hr />
        //         <p className="card-text">Webinaire</p><hr />
        //         <p className="card-text">Journée d'intégration</p><hr />
        //         <p className="card-text">Jéemaa codé</p>
        //     </div>
        // </div>
        <Card style={{ width: '20rem', paddingRight: "3px" }}>
                <Card.Img variant="top"  />
            <Card.Body>
                <Card.Title className="text-primary border-bottom">Explore Events</Card.Title>
                <Card.Text>
                    <Calendars />
                {/* Some quick example text to build on the card title and make up the bulk of
                the card's content. */}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    Webnaires <Badge variant="danger" className="mr-3">3</Badge>
                </ListGroup.Item>
                <ListGroup.Item>
                    Meetup <Badge variant="warning" className="mr-3">1</Badge>
                </ListGroup.Item>
                <ListGroup.Item>Journée d'integration</ListGroup.Item>
                <ListGroup.Item>Jéema codé</ListGroup.Item>
            </ListGroup>
            {/* <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
        </Card>
        
    )
}
export default Aside;