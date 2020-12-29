
import GenericService from "./GenericService";

class CourseService extends GenericService{
constructor(){

super();

}
addCourse=(data)=>this.post("courses",data);
deleteCourse=(_id)=>this.delete("courses/"+_id);
updateCourse=(_id,data)=>this.put("courses/"+_id,data);
getCourse=()=>this.get("courses");
getSingleCourse=(_id)=>this.get("courses/"+_id);

}
let courseService = new CourseService();
export default courseService;
