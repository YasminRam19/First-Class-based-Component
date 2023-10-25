import { Component } from "react";
import User from "./User";
import classes from "./Users.module.css";

class Users extends Component {
  //Define state in class-based components
  //1. Initializing state - STATE IS ALWAYS AN OBJECT IN CLASS-BASED COMPONENTS AND STATE RPOPERTY NAME
  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
  }

  toggleUsersHandler() {
    //2. Update state by accessing setState method provided by the Component class, and the object we pass will be merged with the prev state
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
