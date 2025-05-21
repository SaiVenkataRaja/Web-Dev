'use client'

import { useState, useEffect } from "react";
import { useRef } from "react";
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


export default function Practice() {
    const [count, setCount] = useState(0)
    const prevCountRef = useRef()
    useEffect (() => {
        prevCountRef.current = count
    })
    return ( 
        <div>
            <p>Current : {count}</p>
            <p>Previous : {prevCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}