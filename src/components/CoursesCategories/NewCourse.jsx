import { Grid, TextField,Button } from '@material-ui/core';
import axios from "axios";
import React  from 'react';
const stylenew={
    float:"center",
   padding:"2px",
   margin:"2ch"
    
    };
const NewCourse = (props) => {
    const [Course_Name,setName]=React.useState("");
    const [Course_code,setCode]=React.useState("");
    const [Fees,setFees]=React.useState("$");
    const [Course_Hr,setHr]=React.useState(0);
    const [Instructor,setInstructor]=React.useState("");
    const [Description,setDescription]=React.useState("");
    return (
        <Grid  container spacing ={3}>
            <Grid item xs={12}>
                <h1> Add New Course</h1>
                <Grid  container spaceing={6} >
                <Grid item xs={6}>
                <TextField label="Course_Name" value={Course_Name}  onChange={(e)=>{
                    setName(e.target.value);
                }}/>
                <Grid item xs={6}></Grid>
                <TextField label="Course_code" value={Course_code}    onChange={(e)=>{
                    setCode(e.target.value);
                }}/>
                 <Grid item xs={6}></Grid>
                <TextField   label="Course Fees" value={Fees}  onChange={(e)=>{
                    setFees(e.target.value);
                }}/>
                <Grid item xs={6}></Grid>
                <TextField  label="Course credit hours" value={Course_Hr}  onChange={(e)=>{
                    setHr(e.target.value);
                }}  />
                <Grid item xs={6}></Grid>
                <TextField  label="Course Instructor" value={Instructor}  onChange={(e)=>{
                    setInstructor(e.target.value);
                }}  />
                <TextField fullWidth="100" label="Course Description" value={Description}  onChange={(e)=>{
                    setDescription(e.target.value);
                }}  />

                <Grid item xs={6}></Grid>
                <Button variant="contained"  color="primary" style={stylenew} onClick={e=>{
                    console.log("Add button pressed ");
                    axios.post("http://localhost:4000/api/courses",{Course_Name,Course_code,Course_Hr,Fees,Instructor,Description}).then(res=>{
                    console.log("res.data");
                        props.history.push("/courses");
                    }).catch(err=>{
                        console.log("404 Error found while posting");
                    })
                }} >Add</Button>
                <Grid item xs={6}></Grid>
                </Grid>

                </Grid>
            </Grid>
        </Grid>

      );
}
 
export default NewCourse;