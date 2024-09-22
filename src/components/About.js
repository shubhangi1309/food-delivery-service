import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("About: Parent CONSTRUCTOR");
    }

    componentDidMount() {
        //API CALL
        console.log("About: Parent componentDid Mount");
    }

    componentDidUpdate() {
        console.log("About: Parent componentDid Update");
    }

    componentWillUnmount() {
        console.log("About: Parent componentWill Unmount");
    }

    render() {
        console.log("About: Parent RENDER 1");
        return (<div className="body">
            {console.log("About: Parent RENDER 2")}
            <h1>About</h1>
            <h2>Food delivery service</h2>
            <h2>User: <UserContext.Consumer>{(userData)=> userData.loggedInUser}</UserContext.Consumer></h2>
            <User name='Shubhangi Modi (Fn Comp)' />
            {console.log("About: Parent RENDER 3")}
            {/* two instances of same class */}
            <UserClass role="Web UI Engineer"/>
            <UserClass role="Full Stack Engineer"/>
            {console.log("About: Parent RENDER 4")}
        </div>)
    }
}

export default About;

// OUTPUT
// About:           Parent CONSTRUCTOR
// About.js:17      About: Parent RENDER 1
// About.js:19      About: Parent RENDER 2
// About.js:23      About: Parent RENDER 3
// About.js:27      About: Parent RENDER 4

// User.js:7        User: Fn comp outside JSX
// User.js:17       User: Fn comp inside JSX
// UserClass.js:12  UserClass: CHILD CONSTRUCTOR
// UserClass.js:21  UserClass: CHILD RENDER
// UserClass.js:12  UserClass: CHILD CONSTRUCTOR
// UserClass.js:21  UserClass: CHILD RENDER

// UserClass.js:17  UserClass: CHILD componentDidMount Shubhangi Modi (Class comp)
// UserClass.js:17  UserClass: CHILD componentDidMount Lucky Modi (Class comp)

// About.js:13      About: Parent componentDidMount

// User.js:11       User: Fn comp outside JSX => useEffect