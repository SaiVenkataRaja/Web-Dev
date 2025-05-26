'use client'

import React, { useState, useEffect, useContext } from "react";
import { useRef } from "react";
import { ThemeContext } from "@/app/components/ThemeContext";
import Header from "@/app/components/header";
// export default function Practice() {
//     const [name, setName] = useState("");
//     const [people, setPeople] = useState([]);

//     function handleAdd() {
//         if (name.trim() !== "") {
//             setPeople([...people, name]);
//             setName("");
//         }
//     }

//     function handleDelete(indexToDelete) {
//         const updatedpeople = people.filter((_, index) => index !== indexToDelete)
//         setPeople(updatedpeople)
//     }
//     return (
//         <div className="m-5">
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter a name"
//                 className="border border-gray-400 px-2 py-1 rounded"
//             />
//             <button
//                 onClick={handleAdd}
//                 className="ml-3 bg-blue-300 px-3 py-1 rounded hover:bg-blue-400"
//             >
//                 Add
//             </button>

//             <ul className="mt-4 space-y-1">
//                 {people.map((person, index) => (
//                     <li key={index} className=" p-2 rounded">
//                         {person} <button className="bg-red-500 hover:bg-orange-500 text-white p-1" onClick={() => handleDelete(index)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


// export default function Practice() {
//     const [count, setCount] = useState(0)
//     useEffect(() => {
//         console.log("Component mounted or count changed")
//     }, [count])
//     return ( 
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={() => setCount(count + 1 )}>Increment</button>
//         </div>
//     )
// }


// export default function Practice() {
//     const [seconds, setSeconds] = useState(0)

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setSeconds(prev => prev +1 )
//         }, 1000)
//         return () => clearInterval(interval)
//     },[])
//     return(
//         <div>
//             <p>Timer : {seconds}</p>
//         </div>
//     )
// }



// export default function FetchUsers() {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setUsers(data);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 setError(err.message);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <p className="m-4">Loading users...</p>;
//     if (error) return <p className="m-4 text-red-500">Error: {error}</p>;

//     return (
//         <div className="m-5">
//             <h2 className="text-lg font-bold mb-3">User List</h2>
//             <ul className="list-disc pl-5">
//                 {users.map((user) => (
//                     <li key={user.id}>{user.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default function Practice() {
//     const inputRef = useRef(null) // creates a reference

//     function handleFocus() {
//         inputRef.current.focus()
//     }
//     return(
//         <div>
//             <input ref={inputRef} placeholder="Type something"   className="border px-2 py-1 rounded"/>
//             <button className="ml-3 bg-blue-400 px-3 py-1 rounded text-white" onClick={handleFocus}>Focus Input</button>
//         </div>
//     )
// }


// export default function Practice() {
//     const [count, setCount] = useState(0)
//     const prevCountRef = useRef()
//     useEffect (() => {
//         prevCountRef.current = count
//     })
//     return ( 
//         <div>
//             <p>Current : {count}</p>
//             <p>Previous : {prevCountRef.current}</p>
//             <button onClick={() => setCount(count + 1)}>Increase</button>
//         </div>
//     )
// }


// export default function Practice() {
//     const [show, setShow] = useState(true)
//     return (
//         <div>
//             <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}Text</button>
//             {show && <p>This is the gext</p>}
//         </div>

//     )
// }

// export default function Practice() {
//     const [user, setUser] = useState(null)

//     useEffect(() => {
//         fetch("https://randomuser.me/api/")
//         .then(res => res.json())
//         .then(data => setUser(data.results[0]
//         ))
//     }, [])
//     return(
//         <div>
//             {user ? <p>Name: {user.name.first}</p>: <p>Loading........</p>}
//         </div>
//     )
// }

// export default function Practice() {
//     const inputRef  = useRef(null)
//     function handleFocus() {
//         inputRef.current.focus()
//     }
//     return (
//         <div>
//             <input ref={inputRef} type="text" placeholder="TYpe SOmething"/>
//             <button onClick={handleFocus}>Focus Input</button>
//         </div>
//     )
// }


// export default function App() {
//     const myContext = React.createContext();
//     <myContext.Provider value={"Sai"}><App /></myContext.Provider>
//     const name = useContext(myContext)
//     console.log(name)
//     return(
//         <div>

//         </div>
//     )
// }


// export default function Practice() {
//     // create context
//     const ThemeContext = React.createContext()

//     function ThemeProvider({ children }) {
//         const [theme, setTheme] = useState("light")
//         function toggleTheme() {
//             setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
//         }
//         return (
//             <ThemeContext.Provider value={{ theme, toggleTheme }}>
//                 {children}
//             </ThemeContext.Provider>
//         )
//     }

//     function Header1() {
//   const { theme } = useContext(ThemeContext);
//   return <h1 className="text-xl mb-2">Current Theme: {theme}</h1>;
// }

//     function ToggleButton() {
//         const { toggleTheme } = useContext(ThemeContext)
//         return (
//             <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                 onClick={toggleTheme}>Toggle Theme</button>
//         )
//     }
//     return (
//         <div>
//             <ThemeProvider>
//                 <div>
//                     <Header1 />
//                     <ToggleButton />
//                 </div>
//             </ThemeProvider>
//         </div>
//     )
// }



// export default function Practice() {
//    const [theme, setTheme] = useState('light')

//    const toggleTheme = () => {
//     setTheme(prev => (prev === 'light' ? "dark" : "light"))
//    }
//     return(
//          <div>
//             <Header />
//             <ThemeContext.Provider value={theme}>
//                 <div className={`min-h-screen p-5 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
//                     <button onClick={toggleTheme}>Toggle Theme</button>
//                 </div>
//             </ThemeContext.Provider>
//         </div>
//     )
// }


