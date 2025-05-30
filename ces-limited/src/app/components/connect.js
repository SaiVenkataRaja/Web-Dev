'use client'

import { useEffect, useState } from "react"
export default function Connect({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    })
    const [errors, setErrors] = useState({})
    function handleChange(e) {
            const {name, value} = e.target
            setFormData(prev => ({
                ...prev, 
                [name]:value
            }))
    // validate on change:  clear error if field is not empty
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ""
    }))
  }
    function handleSubmit(e) {
        e.preventDefault()
        //validate all fields on submit
        const newErrors = {}
        if (formData.name.trim() === "" ) newErrors.name = "Please enter your name " 
        if (formData.email.trim() === "" ) newErrors.email = "Please enter your email "
        if (formData.message.trim() === "" ) newErrors.message = "Please enter your message "

        setErrors(newErrors)

        if(Object.keys(newErrors).length === 0){
            console.log(`Detaila are : \nName:${formData.name} \nEmail : ${formData.email} \nMessage: ${formData.message}`)
            setFormData({ name: '', email:"", message:""})
        }
    }
    if (!isOpen) return null
    return (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 flex items-center justify-center ">
            <form onSubmit={handleSubmit} className="m-5 space-y-4 bg-white rounded-xl shadow-2xl">
                <div className="flex flex-col space-y-6 mx-10 my-10 "> 
                    <button onClick={onClose} className=" text-l cursor-pointer font-bold text-orange-600 hover:text-white border-1 ml-108    rounded-full hover:bg-orange-500  transition-all duration-200 ease-in-out" >X</button>
                    <h2 className="text-4xl">Connect Now!</h2>
                    <p className="text-xl">Kindly provide your details, we will reach you shortly.</p>
                    <input type="text" name="name" placeholder="*Full Name" onChange={handleChange} className={`border-b-1 border-gray-300 pb-3 focus:outline-none  ${errors.name ? "border-red-500" : ""}`}/>
                    {errors.name && <p className="text-red-600 text-xs">{errors.name}</p>}
                    <input name="email" placeholder="*Email Address" onChange={handleChange} className={`border-b-1 border-gray-300 pb-3 focus:outline-none  ${errors.email ? "border-red-500" : ""}`} />
                    {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
                    <input name="message" placeholder="*Message" onChange={handleChange} className={`border-b-1 border-gray-300 pb-3 focus:outline-none  ${errors.message ? "border-red-500" : ""}`}/>
                    {errors.message && <p className="text-red-600 text-xs">{errors.message}</p>}
                    <button type="submit" className="cursor-pointer font-bold text-orange-600 border-1 border-orange-500 mx-45  py-2 hover:bg-orange-500 hover:text-white rounded-full transition-all duration-200 ease-in-out">SUBMIT</button>
                </div>
               
            </form>
        </div>
    )
}