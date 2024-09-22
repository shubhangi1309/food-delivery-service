import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 0,
            experience: "6+",
            emailID: "shubhangi.modi1309@gmail.com",
            userInfo: {
                name: "Mock Name",
                location: "Mock Location",
                avatar_url: "avatar_url"
            }
        };
        console.log("UserClass: CHILD CONSTRUCTOR");
    }

    async componentDidMount() {
        //API CALL
        const data = await fetch("https://api.github.com/users/shubhangi1309");
        const jsonData = await data.json();
        // console.log("jsonData=",jsonData);
        this.setState({userInfo: jsonData})
        console.log(this.props.role, "=UserClass: CHILD componentDidMount", this.state.userInfo.name);
        this.timer = setInterval(() => {
            console.log("User Class Interval",this.props.role);
        },1000)
    }

    componentDidUpdate() {
        console.log(this.props.role,": CHILD componentDidUpdate=",this.state.userInfo.name);
    }

    componentWillUnmount() {
        clearInterval(this.timer); // how will I reference the above clearInterval => using THIS dot
        console.log(this.props.role, ": CHILD componentWillUnmount=",this.state.userInfo.name);
    }

    render() {
        console.log(this.props.role, ": UserClass: CHILD RENDER",this.state.userInfo.name);
        const { count, count2, emailID, experience } = this.state;
        const { name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} alt="avatar_url" className="w-36"/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {emailID}</h4>
                <h4>Experience: {experience}</h4>
                <h4>Role: {this.props.role}</h4>
                <button onClick={() => {
                    this.setState({
                        count: count + 1,
                        count2: count2 + 1
                    })
                }}>Count increase</button>
                <h5>Count : {count}</h5>
                <h5>Count2 : {count2}</h5>
            </div>
        )
    }
}

export default UserClass;