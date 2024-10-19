import { useState } from "react";



export default function Heading(){
    const [count, setCount] = useState(0);
    function handleClick (){
        setCount(count+1);
        console.log("button was clicked");
    }
    return(
        <>
        <h1>hello this is Priyam Ghosh</h1>
        <button className="btn" onClick={handleClick}>click here</button>
        <h3 style={{color:"red"}}>count = {count}</h3>
        </>
    );
}