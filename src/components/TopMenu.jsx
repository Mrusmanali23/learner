
import React from "react";
import { Link } from "react-router-dom";
import {AppBar,Toolbar,Button, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import userService from '../Services/UserService';


const useStyles = makeStyles((theme) => ({
  
    link: {
     color:"white",
     padding:"10px"
    },
   
        

    

}));
const newStyle={

float:"right",
alignItems:"right",
color:"white",
margin:"1ch",
justifyContent:"right",

}
const TopMenu = () => {
    const style=useStyles();
    return ( 
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6">
                <Link to="/" className={style.link}> Home </Link>
                </Typography>
                <Typography variant="h6">
                <Link to="/courses"  className={style.link}>Courses </Link>
                </Typography>
                <Typography variant="h6">
                <Link to="/contact-us" className={style.link}>Contact Us </Link>
                </Typography>
                {!userService.isLoggedIn()?<>
                    <Typography variant="h5">

                   
                <Link to="/login" style={newStyle}>Login </Link>

                </Typography>
                <Typography variant="h5">
                <Link to="/register"  style={newStyle}>Register </Link>
                </Typography>
                </>:<Button variant="contained"  color="primary"  onClick={e=>{
               userService.logout();
               window.location.reload();
               
               }}>Log out {userService.getLoggedInUser().name}   </Button>                }
                
                
               
                
            </Toolbar>
       </AppBar>     
     );
};
 
export default TopMenu;


