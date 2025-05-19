'use client'
import { useState } from "react"
import "../styles/header.css"
export default function Header() {
    const [capDropdown, setCapDropdown] = useState(false)
    function handleCapClick() {
        setCapDropdown((prev) => !prev); // Toggle dropdown
    }

    return (
        <div id="header" className="flex mx-18 my-8">
            <img src="../images/ces_logo_blue.webp" />
            <div id="navs" className="flex  space-x-10 list-none">
                <ul className="flex  space-x-10 list-none realtive">
                    <li className="relative">
                        <a onClick={handleCapClick} className="cursor-pointer">CAPABILITIES</a>

                        {/* Dropdown menu */}
                        {capDropdown && (
                            <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md rounded-md z-50">
                                <li className="px-4 py-2">1</li>
                                <li className="px-4 py-2">2</li>
                                <li className="px-4 py-2">3</li>
                            </ul>
                        )}
                    </li>
                    <li>INDUSTRIES</li>
                    <li>INSIGHTS</li>
                    <li>ABOUT</li>
                    <li>JOBS</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div id="inputField" >
                <input className="border-2 border-gray-200 px-2 py-2 rounded-4xl" placeholder='TRY "CYBERSECURITY"' />
            </div>
        </div>
    )
}