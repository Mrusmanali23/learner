import React from "react";
import SingleCourse from "./SingleCourse";
import Fab from "@material-ui/core/Fab";
import {Grid} from '@material-ui/core'
import courseService from '../../Services/CourseService'
import AddIcon from "@material-ui/icons/Add";
import userService from '../../Services/UserService';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    addBtn: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));
  
const Courses = (props) => {
const [courses,setCourses]=React.useState([]);
const classes = useStyles();
const addCourse = () => {
    console.log(props);
    props.history.push("/courses/add");
  };
const getData=()=>{
//{Fees:"Free",Course_Name:"C Progamming ",Course_code:"CPF50",Course_Hr:4,Instructor:"Dr.Rao Adeel Nawab"},{Fees:"20$",Course_Name:" Java Progamming ",Course_code:"Cll50",Course_Hr:4,Instructor:"Simpson"}

    courseService.
    getCourse()
    .then((data)=>
        {
        setCourses(data);
    }).catch(err=>{
        console.log(err);
    });
} 
//getData();
React.useEffect(getData,[]);
console.log("Inside Products")

return (  
<div>

{userService.isTeacher() && (
        <Fab
          color="primary"
          aria-label="add"
          className={classes.addBtn}
          onClick={addCourse}
        >
          <AddIcon />
        </Fab>
      )}

{courses.length==0?(<p>Empty</p>):(

<Grid container spacing={4}>
{courses.map((course,index)=>(<SingleCourse key={index} course={course} />))}
</Grid>)


}

</div>


    );
};
 
export default Courses;