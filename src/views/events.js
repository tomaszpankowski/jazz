import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import EventsS1 from "../components/events-s1";
import EventsS2 from "../components/events-s2";
import EventsS3 from "../components/events-s3";

class Events extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <EventsS1/>
                <EventsS2/>
                <EventsS3/>
            </Container>    
        );
    }
}

export default Events;