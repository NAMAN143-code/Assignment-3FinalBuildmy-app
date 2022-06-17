import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../App.css';


function Trip() {

    let id = useParams();
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);

    const requestParams = {
        method: 'PUT',
        body: JSON.stringify({ title: "Testing .." })
    }

    useEffect(() => {

        fetch(`https://peaceful-crag-26163.herokuapp.com/api/trips/${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.hasOwnProperty("_id")) {
                    setTrip(data);
                    setLoading(true);
                } else {
                    setTrip(null);
                }
            })
    }, [loading])


    if (trip != null || loading === false) {
        let trip_mark = {};
        trip_mark.start0 = trip["start station location"].coordinates[0];
        trip_mark.start1 = trip["start station location"].coordinates[1];
        trip_mark.end0 = trip["end station location"].coordinates[0];
        trip_mark.end1 = trip["end station location"].coordinates[1];

        return (<>

            <Card style={{ width: 'auto' }} className="Customer">
                <h2>Bike: {trip.bikeid} ({trip.usertype})</h2>
                <p>{trip["start station name"]} - {trip["end station name"]} </p>
            </Card>

            <Card style={{ width: 'auto' }} className={trip.usertype}>
                <h2>Bike: {trip.bikeid} ({trip.usertype})</h2>
                <p>{trip["start station name"]} - {trip["end station name"]} </p>
            </Card>

            <br></br>

            <MapContainer style={{ "height": "400px" }} center={[trip_mark.start1, trip_mark.start0]} zoom={15}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[trip_mark.start1, trip_mark.start0]}>
                    <Tooltip permanent direction='right'>Start: {trip["start station name"]}</Tooltip>
                </Marker>
                <Marker position={[trip_mark.end1, trip_mark.end0]}>
                    <Tooltip permanent direction='right'>End: {trip["end station name"]}</Tooltip>
                </Marker>
            </MapContainer>

            <Form>
                <Form.Group>
                    <Form.Label>Bike ID</Form.Label>
                    <Form.Control type="number" name="bikeid" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Birth Year</Form.Label>
                    <Form.Control type="number" name="birth year" />
                </Form.Group>
                <Form.Check
                    type="radio"
                    label="Subscriber"
                    name="usertype"
                    value="Subscriber"
                    id="subscriber"
                />
                <Form.Check
                    type="radio"
                    label="Customer"
                    name="usertype"
                    value="Customer"
                    id="customer"
                />
                <hr />
                <Link to="/Trips" className="btn btn-secondary float-right ml-1">Back to Trips</Link>
                <Button type="submit" className="float-right" >Update Trip User</Button>
            </Form>



                // form is incomplete right now
        </>)
    }
}

export default Trip;