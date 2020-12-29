import React, { PureComponent } from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import userService from '../../Services/UserService';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyle= makeStyles((theme)=>({
    container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"400px",
    
    },
    child:{
        width:"200px",
    },
}));


const Register = (props) => {
    const classes =useStyle();
    const [Email,setEmail]=React.useState("");
    const [Name,setName]=React.useState("");
    const [Password,setPassword]=React.useState("");
    const [Role,setRole]=React.useState("");
    const handleChange = (event) => {
        setRole(event.target.value);
      };

    return ( 
        <div  className={classes.container}>
        <div className={classes.child}  >
            <TextField   value={Name} label="Name" onChange={(e)=>{
                    setName(e.target.value);
                }}/>
            <br/>  <br/>
            <TextField  label="Email"  value={Email} onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
            <br/>  <br/>
            <TextField  type="password" value={Password} label="Password"onChange={(e)=>{
                    setPassword(e.target.value);
                }}/>
            <br/> <br/>
                <Select
                value={Role}
                onChange={handleChange}
                    

                
                >
                    
            <MenuItem value={"User"}> User </MenuItem>
            <MenuItem value={"Teacher"}>Teacher</MenuItem>

            </Select>
            <FormHelperText>Your Role</FormHelperText>
      
            
            <br/> <br/>
            <Button variant="contained"  color="primary"   onClick={e=>{
            userService.register(Name,Email,Password,Role).then(data=>{

                console.log(data);
                toast.success("Success!", {
                    position: toast.POSITION.TOP_CENTER
                  });
                  props.history.push("/login");
            }).catch(err=>{
                console.log(err);
                toast.error("Error !", {
                    position: toast.POSITION.TOP_LEFT
                  });
                
            })

            }}
            > Register  </Button>
            

        </div>
        
        
        </div>


        
     );
}
 
export default Register;
