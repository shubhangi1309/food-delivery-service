import { useEffect, useState } from "react";

const User = ({ name }) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    console.log("User: Fn comp outside JSX");

    useEffect(()=> {
        //count Api call UPDATE
        console.log("User: Fn comp outside JSX => useEffect");
        const timer = setInterval(()=> {
            console.log("user interval useEffect");
        }, 1000);

        return () => {
            //UN-MOUNT
            clearInterval(timer);
            console.log("user interval RETURN");
        }
       
    }, []);

    useEffect(()=> {
        //count2 Api call
        console.log("User: Fn comp outside JSX => useEffect");
    }, [count2]);

    return (
        (
            <div className = "user-card">
                {console.log("User: Fn comp inside JSX")}
            <h2>Name: {name}</h2>
            <h3>Location: Jaipur</h3>
            <h4>Contact: shubhangi.modi1309@gmail.com</h4>
            <h5>Count: {count}</h5>
            <h5>Count2: {count2}</h5>
        </div >)
    )
}

export default User;