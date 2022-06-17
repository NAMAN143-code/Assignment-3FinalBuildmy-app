import React, { useEffect, useState } from 'react'

import { Card, Badge, Pagination } from 'react-bootstrap'

import { useNavigate } from "react-router-dom";

import '../App.css';


function Trips() {


    const [page, setPage] = useState(1);
    const navigate = useNavigate()
    const [trips, setTrips] = useState(null);
    const perPage = 10;

    useEffect(() => {
        fetch(`https://peaceful-crag-26163.herokuapp.com/api/trips?page=${page}&perPage=${perPage}`)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setTrips(myJson)
            })
    }, [trips])



    function handlePrevClick() {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const handleNextClick = () => {
        setPage(page + 1);
    }


    if (trips != null) {
        return (
            <>
                <Card style={{ width: 'auto' }} className='center'>
                    <h2>Trip list</h2>
                </Card>
                <br></br>

                <table className="table" >
                    <thead id='tableHead'>

                        <tr>
                            <th>Bike Id</th>
                            <th>Start Station</th>
                            <th>End Station</th>
                            <th>Duration (Minutes)</th>
                        </tr>

                    </thead>
                    <tbody id="trips-table">
                        {trips.map(trip =>
                            <>
                                <tr onClick={() => { navigate(`/trip/${trip._id}`) }}>
                                    <td >{trip.bikeid}</td>
                                    <td>{trip["start station name"]}</td>
                                    <td>{trip["end station name"]}</td>
                                    <td>{(trip.tripduration / 60).toFixed(2)}</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
                <nav aria-label="Page navigation" style={{ padding: '10px' }}>

                    <Pagination>
                        <Pagination.Prev onClick={handlePrevClick} />
                        <Pagination.Item>  <Badge><h5>{page}</h5></Badge> </Pagination.Item>
                        <Pagination.Next onClick={handleNextClick} />
                    </Pagination>

                </nav>


            </>
        );
    }


}

export default Trips;