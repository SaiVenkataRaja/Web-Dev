'use client'
// import { loadComponents } from "next/dist/server/load-components"
import { Habibi, Truculenta } from "next/font/google"
import { useState, useEffect } from "react"
import { useRef } from "react"
function Component1() {
    return <p>This is added using Functional component</p>
}
//Functional component
function Greeting(props) {
    return (
        <p>Hello, {props.name}</p>
    )
}
// conditional rendering 
function WelcomeMsg({ loggedin }) {
    return (
        <div>
            {loggedin ? <p>Welcome dude</p> : <p>Please Log in</p>}
        </div>
    )
}

const names = ['John', 'Regi', 'Chris']
function NameList() {
    return (
        <ul>
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    )
}


//Event handling 
function Button() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return <button onClick={handleClick}>Click Me</button>;
}
export default function HelloPage() {
    const [isVisible, setIsVisible] = useState(true) //useState
    const [count, setCount] = useState(0) //useEffect
    useEffect(() => {
        console.log("Rendered");

        const timer = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    //useRef 
    const inputRef = useRef()
    const handlclick = () => {
        inputRef.current.focus()
    }
    return (
        <div>
            <h1>Hello, React + Next.js </h1>
            <p>This is my first custom page using JSX.</p>
            <Component1 />
            <Greeting name="Sai" />
            <Greeting name="Venkat" />
            <WelcomeMsg loggedin={false} />
            <h2>NameList</h2>
            <NameList />
            <Button />

            <div>
                <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
                {isVisible && <p>This message is toggleable</p>}
            </div>
            <p>Timer : {count}</p>
            <div>
                <input ref={inputRef} type="text" placeholder="Click the button to focus " />
                <button onClick={handlclick}>Focus Input</button>
            </div>
        </div>

    )
}