import React, { Component } from 'react';
import Axios from 'axios';

export default class InterNational extends Component {
    constructor(){
        super();
        this.state ={
            data:[]
        }
    }
    componentDidMount(){
        Axios.get('https://corona.lmao.ninja/v2/countries').then((res)=>{
            this.setState({data:res.data})
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-margin">
                        <thead>
                            <tr>
                                <td>Country</td>
                                <td>Total Cases</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data && this.state.data.map((item,index)=>{
                                return(
                                    <tr>
                                        <td>
                                            {item.country}
                                            <img style={{width:'50px', marginLeft:'10px'}} src={item.countryInfo.flag}></img></td>
                                        <td>{item.cases}</td>
                                        <td>{item.recovered}</td>
                                        <td>{item.deaths}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}
