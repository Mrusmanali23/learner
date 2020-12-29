import React from "react";
import { AutoRotatingCarousel,Slide } from 'material-auto-rotating-carousel'
import {Link,Grid,Button,Icon} from '@material-ui/core';
import { red , blue ,green} from '@material-ui/core/colors';

import { withStyles } from '@material-ui/core/styles' ;
const styles = {
    root: {
        margin:"5ch",
        float:"right",
      height: "100%",
      width: "100%"
    },
    media: {
      margin:"0ch",
      float:"center",
      paddingTop:"10px",
      position:"relative"
    }
  }
const Landing = () => {
    const StyledSlide = withStyles(styles)(Slide);

    return (  
<Grid  item xs={10}>
         <Grid  container spaceing={10} >
<StyledSlide
  media={<img src='https://elearningindustry.com/wp-content/uploads/2019/10/how-design-thinking-transforming-learning-experience-free-ebook.jpg' />}
  title='We Build futures '
  subtitle='Join Us today'
/>

<Link to="/register" >Register Today</Link>
<StyledSlide
 media={<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8tq3ooj2ULrl4E94eQHlUKNCQwZYgC4qHg&usqp=CAU' />}
 title='Learn different Courses  '
 subtitle='Enroll  Now'

/>
<Button size="small"  endIcon={<Icon>send</Icon>} onClick="/courses"           
        >Learn More</Button>

<StyledSlide
 media={<img src='https://www.viewsonic.com/library/wp-content/uploads/2020/07/Blended-Learning-vs-Hybrid-Learning.png' />}
 title='We ensure your Future  '
 subtitle='Premium Courses with best Instructors from all over the world'

/>
</Grid>
</Grid>


    );
};
 
export default Landing;