import React, { PureComponent } from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import userService from '../../Services/UserService';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const useStyle= makeStyles((theme)=>({
    container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"300px",
    paddingLeft:"100ch"
    },
    child:{
        width:"200px",
    },
}));


const Login = (props) => {
    const classes =useStyle();
    const [Email,setEmail]=React.useState("");
    const [Password,setPassword]=React.useState("");


    return ( 
        <div  className={classes.container}>
        <div className={classes.child}  >
            <TextField fullWidth value={Email} label="Email"  onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
            <br/>
            <TextField fullWidth  value={Password} type="password" label="Password" onChange={(e)=>{
                    setPassword(e.target.value);
                }}/>
            <br/>
            <Button variant="contained"  color="primary"  onClick={e=>{
            userService.login(Email,Password).then((data)=>{
                console.log(data);
                window.location.href="/";
            }).catch((err)=>{
                console.log(err.response.data);
                toast.error(err.response.data, {
                    position: toast.POSITION.TOP_LEFT,
                  });
                
            })
                
            }}>
             Log In </Button>
            

        </div>
        
        
        </div>


        
     );
}
 
export default Login;
