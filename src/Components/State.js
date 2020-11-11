import React, { Component } from 'react';
import Axios from 'axios';
import {Accordion,Card,Button }  from 'react-bootstrap';

export default class State extends Component {
    constructor(){
        super();
        this.state={
            stateData :{}
        }
    }
    componentDidMount(){
        Axios.get('https://api.covid19india.org/state_district_wise.json').then(res=>{
            this.setState({stateData:res.data})
        })
    }
    render() {
        let keys = Object.keys(this.state.stateData)
        return (
            <>
            <br/>
            <div className="row">
                <div className="col-md-12">
                <Accordion defaultActiveKey="0">
                    {keys.map((item,index)=>{
                        let districts = this.state.stateData[item].districtData
                        let total_confirmed = 0,
                            total_active = 0,
                            total_recovered = 0,
                            total_deaths = 0;
                        let dist_data = []
                        for(let i in districts){
                            total_active += districts[i].active;
                            total_confirmed += districts[i].confirmed
                            total_deaths += districts[i].deceased
                            total_recovered += districts[i].recovered
                            let name = districts[i]
                            name['district_name'] = i
                            dist_data.push(name)
                        }
                        return(
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="primary" eventKey={index}>
                                        <span>{item} </span>
                                        <span className="btn-dark p-1 mr-2">Total Cases : {total_confirmed}</span>
                                        <span className="btn-dark p-1 mr-2">  Active :{total_active}</span>
                                        <span className="btn-dark p-1 mr-2">Deaths :{total_deaths}</span>
                                        <span className="btn-dark p-1 mr-2"> Recovered : {total_recovered}</span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={index}>
                                    <Card.Body>
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <td>Districts</td>
                                                    <td>Confirmed Cases</td>
                                                    <td>Active Cases</td>
                                                    <td>Recovered Cases</td>
                                                    <td>Deaths</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {dist_data.map((data,i)=>{
                                               
                                                return(
                                                    <tr>
                                                        <td>{data.district_name}</td>
                                                        <td>{data.confirmed}</td>
                                                        <td>{data.active}</td>
                                                        <td>{data.recovered}</td>
                                                        <td>{data.deceased}</td>
                                                    </tr>
                                                )
                                            })} 
                                            </tbody>
                                        </table>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        )
                    }
                )}
                    </Accordion>
                </div>
                
            </div>
            </>
        )
    }
}
