import { Grid, TextField,Button } from '@material-ui/core';
import axios from "axios";
import React, { PureComponent } from 'react';
import courseService from "../../Services/CourseService";
const currencies = 
    {
      value: 'USD',
      label: '$',
    }
    const style1={
        float:"left",
       color:"",
       
       margin:"8px"
        
        };
    const style2={
        float:"right",
       color:"",
       margin:"2px"
        
        };
const Enrolled = (props) => {
    const [Course_Name,setName]=React.useState("");
    const [Course_code,setCode]=React.useState("");
    const [Fees,setFees]=React.useState("");
    const [Course_Hr,setHr]=React.useState(0);
    const [Instructor,setInstructor]=React.useState("");
    const [Description,setDescription]=React.useState("");
    const id=props.match.params.id;
    React.useEffect(()=>{
        courseService.getSingleCourse(id)
        .then(data=>{
            setName(data.Course_Name);
            setCode(data.Course_code);
            setFees(data.Fees);
            setHr(data.Course_Hr);
            setInstructor(data.Instructor);
            setDescription(data.Description);
            
            
        })
    })
    
    return (
        <Grid  container spacing ={3}>
            <Grid item xs={12}>
                
                <Grid  container spaceing={6} >
                <Grid item xs={6}>
                <h2 style={style1} >{Course_Name}  </h2>
                <Grid item xs={6}></Grid>
                <TextField disabled label="Course code" value={Course_code}    onChange={(e)=>{
                    setCode(e.target.value);
                }}/>
                 <TextField  disabled label="Course Fees" value={Fees}  />
                <Grid item xs={6}></Grid>
                <TextField disabled label="Course credit hours" value={Course_Hr}    />
                <Grid item xs={6}></Grid>
                <TextField disabled label="Course Instructor" value={Instructor}    />
                <Grid item xs={6}></Grid>
               <h4 style={style2} >Course Description: {Description} </h4>

                <Grid item xs={6}></Grid>
                <Button variant="contained"  color="primary"  
                   
                >Enroll In</Button>
                <Grid item xs={6}></Grid>
                </Grid>

                </Grid>
            </Grid>
        </Grid>

      );
}
 
export default Enrolled;