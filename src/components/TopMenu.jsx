import React from "react";
import { Link } from "react-router-dom";

const TopMenu = () => {
    return ( <div>
<ul>
    <li style={{display:"inline",padding:"5px"}}>
    <Link to="/">Home</Link>
    </li>
    <li style={{display:"inline",padding:"5px"}}>
    <Link to="/courses">Courses</Link>
    </li>
    <li style={{display:"inline",padding:"5px"}}>
    <Link to="/contact-us">Contact Us</Link>
    </li>
  
</ul>

    </div> );
};
 
export default TopMenu;
