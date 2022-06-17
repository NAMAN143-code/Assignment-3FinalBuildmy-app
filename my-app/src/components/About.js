import React from 'react';
import { Card } from "react-bootstrap"

function About() {
    return (
        <>
            <div>
                <h1 class='my-name'>
                    About me
                </h1>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Naman Sharma</Card.Title>
                        <Card.Text>
                            I dont know 'bout myself
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div >
        </>
    )
};

export default About;