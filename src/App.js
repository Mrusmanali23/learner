
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch}from "react-router-dom";
import TopMenu from './components/TopMenu';
import Landing from './components/Landing';
import ContactUs from './components/ContactUs';
import Courses from './components/CoursesCategories/courses';
import NotFound from './components/NotFound';
import NewCourse from "./components/CoursesCategories/NewCourse";
import Enroll from "./components/CoursesCategories/Enrolled";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
  <Router>
  <div >
    <ToastContainer/>
      <TopMenu/>
      <Switch>
        
      <Route path="/login"component={Login}/>
      <Route path="/register"component={Register}/>
      
      <Route path="/courses/add"component={NewCourse}/>
      <Route path="/courses/enroll/:id"component={Enroll}/>
      <Route path="/courses" component={Courses}/>
      <Route path="/contact-us" exact component={ContactUs}/>
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
