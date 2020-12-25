import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch}from "react-router-dom";
import TopMenu from './components/TopMenu';
import Landing from './components/Landing';
import ContactUs from './components/ContactUs';
import Courses from './components/courses';
import NotFound from './components/NotFound';


function App() {

  return (
  <Router>
  <div >
      
      <Switch>
      <TopMenu/>
      <Route path="/courses" exact component={Courses}/>
      <Route path="/contact-us" component={ContactUs}/>

      <Route path="/not-found" component={NotFound}/>

      <Route path="/"  exact component={Landing}/>
       <Redirect path="/not-found"/>
      </Switch>
      <h2>Main</h2>
    </div>
    </Router>
  );
}

export default App;
