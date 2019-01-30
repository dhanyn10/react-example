import React from 'react';
import {
    Container,
    Row,
    CardHeader,
    CardBody
} from 'reactstrap';
import L from 'leaflet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './css/app.css';

class App extends React.Component
{
    componentDidMount()
    {
        this.maps = L.map('map-indo').setView([-3.357493,117.5171464], 5);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.streets',
            accessToken: 'ACCESS_TOKEN'
        }).addTo(this.maps);
    }
    render()
    {
        return(
            <Container fluid={true}>
                <Row>
                    <div className="card w-100 rounded-0" id="main">
                        <CardHeader>Maps</CardHeader>
                        <CardBody>
                            <div id="map-indo"></div>
                        </CardBody>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default App;