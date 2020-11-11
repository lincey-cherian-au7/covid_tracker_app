import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import State from './State'
import axios from 'axios'

export default class National extends Component {
    constructor(){
        super();
        this.state={
            result:{}
        }
    }
    componentDidMount(){
        axios.get('https://corona.lmao.ninja/v2/countries/india').then((res)=>{
            this.setState({result:res.data})

        })
    }
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
                                    <h3>{this.state.result.cases}</h3>
                                    <Card.Text>
                                        [Today : {this.state.result.todayCases}]
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge" style={{backgroundColor:"#ff6d01" ,width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>Active Cases</Card.Title>
                                    <h3>{this.state.result.active}</h3>
                                    
                                    
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge" style={{backgroundColor:"#068b76", width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>Recovered Cases</Card.Title>
                                    <h3>{this.state.result.recovered}</h3>
                                    
                                    
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-info" style={{backgroundColor:"#9f0102", width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>{this.state.result.deaths}</Card.Title>
                                    <h3>195678</h3>
                                    
                                    
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
