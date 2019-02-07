import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateProject from './components/project/CreateProject';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Navbar/>
       <Switch >
          <Route exact path="/" component = {Dashboard} />
          <Route path="/project/:id" component = {ProjectDetails} />
          <Route path="/Signin" component = {Signin} />
          <Route path="/Signup" component = {Signup} />
          <Route path="/create" component = {CreateProject} />
       </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
