import React from 'react';	
import {withRouter} from "react-router";   
import {Grid,Button,Typography,Icon,Container} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
const style1={

border:"2px solid black",
padding:"5px"

};
const style2={
    float:"right",
   color:"purple",
   margin:"2px"
    
    };
    
    const ButtonS={
        float:"right",
      postion: "relative",
 
        
        };
        
    
const SingleCourse = (props) => {
    const { course, history } = props;
    console.log(props);
    const classes = useStyles();
    return ( 
     <Grid  item xs={4}>
         <Grid  container spaceing={6} >
        <Card className={classes.root}>
             <CardContent>
            <Container >
           
            <h2  style={style2} >{course.Course_Name}</h2>
            <hr/><hr/>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            Course code: {course.Course_code}
        </Typography>
        <Typography variant="h5" component="h2">
          Course Instructor: {course.Instructor}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
   Course fee: {course.Fees}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
   Course Credit hour: {course.Course_Hr}
        </Typography>
        <CardActions>
        <Button size="small"  endIcon={<Icon>send</Icon>} onClick={e=>{
                console.log("navigate to enroll");
                history.push("/courses/enroll/" + course._id);
            }}
        >Learn More</Button>
      </CardActions>
  
           
            </Container>
            </CardContent>
        </Card>
        </Grid>
        </Grid>


    );
}
 
export default withRouter(SingleCourse);