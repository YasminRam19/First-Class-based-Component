import classes from "./User.module.css";
import { Component } from "react";

//Class-based component
class User extends Component {
  //In the function component we receive prop as a parameter
  //In the classe-based component we do not recieve props, we need to extend from Component and access props thorugh this
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

//Functional component
/* const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};
 */
export default User;
