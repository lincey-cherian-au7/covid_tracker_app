import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import State from './State'

export default class National extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <img src="https://www.countryflags.io/in/shiny/64.png"/>
                    <h3>INDIA</h3>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                            <Card className="badge badge-info" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>Total Cases</Card.Title>
                                    <h3>195678</h3>
                                    <Card.Text>
                                        [Today:90]
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge" style={{backgroundColor:"#ff6d01" ,width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>Active Cases</Card.Title>
                                    <h3>195678</h3>
                                    <Card.Text>
                                        [Today:90]
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge" style={{backgroundColor:"#068b76", width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>Recovered Cases</Card.Title>
                                    <h3>195678</h3>
                                    <Card.Text>
                                        [Today:90]
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-info" style={{backgroundColor:"#9f0102", width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>Total Deaths</Card.Title>
                                    <h3>195678</h3>
                                    <Card.Text>
                                        [Today:90]
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                        <div className ="col-md-12">
                            <State/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
