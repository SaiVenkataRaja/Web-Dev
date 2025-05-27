'use client'
import { useId, useLayoutEffect, useReducer, useRef, useState } from "react"
// const initialState = {count:0}

// function reducer(state, action)  {
//     switch(action.type) {
//         case "+":
//             return {count: state.count +1 }
//         case "-":
//             return {count: state.count -1 }
//         case "reset":
//             return initialState
//         default:
//             return state
//     }
// }
// export default function Prac() {
//     const [state, dispatch] = useReducer(reducer, initialState)
//     return(
//         <div className="flex space-x-10">
//             <button className="bg-gray-300 hover:bg-gray-500 px-2 py-1 rounded-lg cursor-pointer" onClick={() => dispatch({type : '-'})}>-</button>
//             <h2 className="py-1">Count : {state.count}</h2>
//             <button className="bg-gray-300 hover:bg-gray-500 px-2 py-1 rounded-lg cursor-pointer" onClick={() => dispatch({type:'+'})}>+</button>
//             <button className="bg-red-500 hover:bg-orange-300 cursor-pointer rounded-lg px-2" onClick={() => dispatch({type: 'reset'})}>Reset</button>
//         </div>
//     )
// }

//You want to show a sidebar based on user preference stored in localStorage. 
// But with useEffect, the sidebar briefly shows the default before applying the correct state — causing a flicker.
// With useLayoutEffect, we can read and apply the preference before the UI is painted.
// export default function DisplaySidebar() {
//     const [showSidebar, setShowSidebar] = useState(true)

//     useLayoutEffect(() => {
//         //read from local storage before paint
//         if (typeof window !== 'undefined') {
//             const savedState = localStorage.getItem("sidebar-visible")
//             if (savedState !== null) {
//                 setShowSidebar(JSON.parse(savedState));
//             }
//         }
//     }, [])
//     function toggleSidebar() {
//         setShowSidebar(prev => {
//             const updated = !prev
//             localStorage.setItem('sidebar-visible', JSON.stringify(updated))
//             return updated
//         })
//     }
//     return (
//         <div className="flex h-screen">
//             {showSidebar && (
//                 <div className="w-1/4 bg-gray-800 text-white p-4">
//                     Sidebar content
//                 </div>
//             )}
//             <div className="flex-1 p-6">
//                 <button onClick={toggleSidebar} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">Toggle Sidebar</button>
//                 <p>Main content</p>
//             </div>
//         </div>
//     )
// }

// export default function FormwithId() {
//     const id =useId()
//     console.log("Generated id", id)
//     return (
//         <div className="m-6">
//             <label htmlFor={id} className="block mb-2 font-medium">Your Email : </label>
//             <input id={id} type="email"
//                 placeholder="example@mail.com" className="border px-3 py-1 rounded w-64" />
//         </div>
//     )
// }


// controlled components 

// export default function ControlledComps(){
//     const [name, setName] = useState("")
//     function handleInput(e) {
//         setName(e.target.value)
        
//     }
//     return(
//         <div>
//             <input type="text" placeholder="Type your name" onChange={handleInput} className="border px-2 py-1 rounded"/>
//             <p className="mt-4">Hello, {name || "Stranger"}</p>
//         </div>
//     )
// }
//The input box’s value comes from the state, not DOM directly — hence it's "controlled". 

// handling multiple inputs with one state object 

export default function HandleMulti() {
    const [formData, setFormData] = useState({
        name:"",
        age:"",
        email: "",
        password:""
    })
    function handleChange(e) {
        const{name, value} = e.target
        setFormData(prevData => ({
            ...prevData, [name]:value
        }))
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(`Form submitted :\nName: ${formData.name}\nAge: ${formData.age}\nEmail: ${formData.email}`)
        setFormData({name:"", age:"", email:"", password:""})
    }
    return(
        <form onSubmit={handleSubmit} className="m-5 space-y-4 ">
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="border px-2 py-1 rounded w-full" placeholder="Name"/>
            <input type="number" name="age" value={formData.age} onChange={handleChange} className="border px-2 py-1 rounded w-full" placeholder="Age"/>
            <input type="text" name="email" value={formData.email} onChange={handleChange} className="border px-2 py-1 rounded w-full" placeholder="Email"/>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="border px-2 py-1 rounded w-full" placeholder="Password"/>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            <h2>Form Submitted</h2>
            <p>Name: {formData.name}</p>
            <p>Age : {formData.age}</p>
            <p>Email : {formData.email}</p>
        </form>
    )
}
