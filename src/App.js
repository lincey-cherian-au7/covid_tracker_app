import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Link,Route} from 'react-router-dom';
import National from './Components/National';
import InterNational from './Components/InterNational'

class App extends Component {
  constructor(){
    super();

  }
  render() {
    return (
      <div className = 'container-fluid'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <National/>
            </Route>
            <Route exact path='/national'>
              <National/>
            </Route>
            <Route exact path='/international'>
              <InterNational/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;