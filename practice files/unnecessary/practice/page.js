'use client'
import { setConfig } from "next/config";
import { exportTraceState } from "next/dist/trace";
import { use, useEffect, useState } from "react";
// function Comp1() {
//     return <p>Vachindayya Developer-u</p>
// }
// function MemuMeeFans(props) {
//     return(
//         <div>
//             <p>Fan : {props.name}</p>
//         </div>
//     )
// }
// function CondRender({isLogged}) {
//     return ( 
//         <div>
//             {isLogged ? <p>Hii</p> :  <p>Byeee</p> } 
//         </div>
//     )
// }
// function Clicked({yesClicked}) {
//     return (
//         <div>
//             {yesClicked ? <button className="bg-blue-200">Click</button> : <button className="bg-red-200">Click</button>}
//         </div>
//     )
// }
// export default function Practice() {
//     return(
//         //functional componenets 
//         <div>
//             <h2>Hey, I am Practicing React , Next.js </h2>
//             <p>Vachindayya Developer-u</p>
//             <Comp1 />

//             <MemuMeeFans name="Sai"/>
//             <MemuMeeFans name="Venkat" />

//             <CondRender isLogged={false}/>
//             <Clicked yesClicked={false} />
//         </div>

//     )
// }


// ----------------------------------------end / start 
// function Chall1({isTrue}) {
//     return(
//         <div>
//             {isTrue ? <p>This Text wil be displayed</p> : <p className="text-white">This text will not be displayed (on white bg)</p>}
//         </div> 
//     )
// }
// export default function Practice() {
//     return(
//         <div>
//             Practice
//             <Chall1 isTrue={false}/>
//         </div>
//     )
// }

// login - logout button switch 
// function LogRender({toggling}) {
//     return(
//         <div>
//             {toggling ? (<button>Login</button>) : (<button>Logout</button>)}
//         </div>
//     )
// }
// export default function Practice() {
//     return(
//         <div>
//             Prac
//             <LogRender toggling={false}/>
//         </div>
//     )
// }


// list rendering with map. 
// const items = ['Car', 'Toy', 'Mobile', 'Laptop']
// function List() {
//     return (
//         <ul>
//             {items.map((item, index) => {
//                 return <li key={index}>{item}</li>
//             })}
//         </ul>
//     )
// }
// export default function Practice() {
//     return (
//         <div>
//             Prac
//             <List />
//         </div>
//     )
// }



// const people = [
//     { id: 1, name: "Ravi", age: 22 },
//     { id: 2, name: "Priya", age: 28 },
//     { id: 3, name: "Vikram", age: 24 },
//     { id: 4, name: "Neha", age: 30 },
// ];

// function RenderedPeople() {
//     return (
//     <ul>
//         {people.map((person) => (
//             <li key={person.id}>
//                 <span className={person.age > 25 ? "bg-green-400" : "bg-red-400"}>
//                     {person.name}
//                 </span>
//                 {" "} - age : {person.age}
//             </li>
//         ))}
//     </ul>
// );
// }

// export default function Practice() {
//     return (
//         <div>
//             Prac
//             <RenderedPeople />
//         </div>
//     )
// }

// toggling the button : event handing 

// export default function Practice() {
//     const [click, setClicked] = useState("Click the Button")
//     function handleClick() {
//         setClicked((prevClick) => prevClick === "Click the Button" ? "The Button is Clicked" : "Click the Button")
//     }
//     return (
//         <div className="m-10">
//             <button className="bg-green-200 px-4 py-1 rounded-lg cursor-pointer hover:bg-blue-200" onClick={handleClick}>Click</button>
//             <p>{click}</p>
//         </div>

//     )
// }

// counter 

// export default function Practice() {
//     const [count, setCount] = useState(0)
//     function Increment() {
//         setCount(count + 1)
//     }
//     function Decrement() {
//         setCount(count - 1)
//     }
//     return (
//         <div className="flex items-center space-x-2 m-5 ">
//             <button disabled={count === 0}
//                 onClick={Decrement}
//                 className="bg-gray-500 text-white rounded-lg px-2 py-1 hover:bg-gray-400 focus:outline-none transition duration-300"
//             >
//                 -
//             </button>
//             <p className="text-sm">{count}</p>
//             <button
//                 onClick={Increment}
//                 className="bg-gray-500 text-white rounded-lg  px-2 py-1  hover:bg-gray-400 focus:outline-none transition duration-300"
//             >
//                 +
//             </button>
//         </div>

//     )
// }

// export default function Practice() {
//     const [inputText, setInputText] = useState("")
//     function handleChange(event) {
//         setInputText(event.target.value)
//     }
//     return (
//         <div className="m-5">
//             <input value={inputText} onChange={handleChange} placeholder="Type Something" className="border-2 border-black-200"/>
//             <p>You typed : {inputText}</p>
//         </div>
//     )
// }

// export default function Practice() {
//     const [count, setCount] = useState(0)
//     useEffect(() => {
//         document.title = `Count: ${count}`
//         console.log("Effect ran - count changed to", count)
//     }, [count])
//     return(
//         <div className="m-5 space-x-5 ">
//             <h2>Count : {count}</h2>
//             <button className="border-2 p-2 cursor-pointer" onClick={() => setCount(count + 1 )}>Increment</button>
//             <button className="border-2 p-2 cursor-pointer" onClick={() => setCount(count - 1)}>Decrement</button>
//         </div>
//     )
// }

// useState input field and toggle light  example 
// export default function Practice() {
//     const [name, setName] = useState("")
//     const [on, setOn] = useState(false)
//     return(
//         <div>
//             <input value={name} placeholder="Enter Name" className="border-2" onChange={(e) => setName(e.target.value)}/> 
//             <p>Hello, {name}</p>

//             <button className="m-7" onClick={() => setOn(!on)}>Toggle Light</button>
//             <p>The Light is {on ? "ON" : "OFF"}</p>
//         </div>
//     )
// }


// export default function Practice() {
//     const [hide , setHide] = useState(false)
//     return(
//         <div>
//             {hide && <p>This is the task</p> }
//             <button onClick={() => setHide(!hide)}>{hide ? "Hide message" : "Show message"}</button>
//         </div>
//     )
// }

