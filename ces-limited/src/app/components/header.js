'use client'
import Link from "next/link"
import "../styles/header.css"
import { useEffect, useRef, useState } from "react"

export default function Header() {

    // tracks which dropdown is open : click on another nav should close the current one : 2
    const [openDropdown, setOpenDropdown] = useState(null);


    const capDropdownRef = useRef(null); // 1 
    const indDropdownRef = useRef(null);
    const insightDropdownRef = useRef(null);
    const aboutDropdownRef = useRef(null);

    //ai helped to write this block
    // Handle dropdown toggle logic (use mousedown event) 
    function handleDropdownClick(index, e) {
        // Prevent the toggle logic when the dropdown is already open
        if (openDropdown === index) {
            // Let go of the click and close the dropdown immediately
            e.stopPropagation();
            setOpenDropdown(null); // Close the currently open dropdown
        } else {
            // Open the new dropdown and close the previous one
            setOpenDropdown(index);
        }
    }

    // Listen for outside clicks to close dropdown
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                (capDropdownRef.current && !capDropdownRef.current.contains(e.target) && openDropdown === 0) ||
                (indDropdownRef.current && !indDropdownRef.current.contains(e.target) && openDropdown === 1) ||
                (insightDropdownRef.current && !insightDropdownRef.current.contains(e.target) && openDropdown === 2) ||
                (aboutDropdownRef.current && !aboutDropdownRef.current.contains(e.target) && openDropdown === 3)
            ) {
                setOpenDropdown(null); // Close dropdown
            }
        }

        // for outside clicks
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [openDropdown]); // Dependency on openDropdown to handle state changes

    return (
        <div className="px-10 py-10">
            <div id="header" className="flex" >
                <Link href="/">
                    <img src="../images/ces_logo_blue.webp" alt="CES Logo" />
                </Link>
                <div id="navs" className="flex space-x-10 list-none">
                    <ul className="flex space-x-10 list-none relative">
                        <li className="relative">
                            <p onMouseDown={(e) => handleDropdownClick(0, e)} className="cursor-pointer">CAPABILITIES</p>
                            {openDropdown === 0 && (
                                <ul id="widthcons" ref={capDropdownRef} className="flex absolute top-full left-0 mt-9  bg-white shadow-md rounded-md z-50">
                                    <li id="headline" className="px-4 py-2">Business Services
                                        <ul id="navslist">
                                            <li id="navItem">FUND ACCOUNTING</li>
                                            <li>FUND ACCOUNTING</li>
                                            <li>FUND ACCOUNTING</li>
                                            <li>FUND ACCOUNTING</li>
                                            <li>FUND ACCOUNTING</li>
                                            <li>FUND ACCOUNTING</li>
                                        </ul>
                                    </li>
                                    <li id="headline" className="px-4 py-2">Digital Transformation
                                        <li>2.1</li>
                                        <li>2.2</li>
                                        <li>2.3</li>
                                        <li>2.4</li>
                                        <li>2.5</li>
                                        <li>2.6</li>
                                    </li>
                                    <li id="headline" className="px-4 py-2">Managed IT and Operations
                                        <li>3.1</li>
                                        <li>3.2</li>
                                        <li>3.3</li>
                                        <li>3.4</li>
                                        <li>3.5</li>
                                        <li>3.6</li>
                                    </li>
                                    <li id="headline" className="px-4 py-2">Enterprise Applications
                                        <li>4.1</li>
                                        <li>4.2</li>
                                        <li>4.3</li>
                                        <li>4.4</li>
                                        <li>4.5</li>
                                        <li>4.6</li>
                                    </li>
                                </ul>
                                // The operation that needs to be done : 
                                // when i click on other navs , the existing opened navbar should be closed 
                                // when i click on the screen somewhere, the opened navbar should be closed 
                                //          useRef to track the dropdown element: we need to attach a ref to the dropdown element.
                                //                      this will allow us to check if the click happened outside the dropdown
                                //          Listen for clicks outside: we use useEffect to listen clicks on the document,
                                //                      if the click happens outside the dropdown, we will close it
                                //          Handle click on the other navbar items : To handle clicking another navbar item (and closing the current dropdown if open),
                                //                      you can keep track of which navbar item is open, similar to how you manage the state.

                            )}
                        </li>
                        <li className="relative">
                            <a className="cursor-pointer" onMouseDown={(e) => handleDropdownClick(1, e)}>
                                INDUSTRIES
                            </a>
                            {openDropdown === 1 && (
                                <ul ref={indDropdownRef} className="absolute top-full left-0 mt-9 w-48 bg-white shadow-md rounded-md z-50">
                                    <li className="px-4 py-2">Industry 1</li>
                                    <li className="px-4 py-2">Industry 2</li>
                                    <li className="px-4 py-2">Industry 3</li>

                                </ul>
                            )}
                        </li>
                        <li className="relative">
                            <p onMouseDown={(e) => handleDropdownClick(2, e)} className="cursor-pointer">INSIGHTS</p>
                            {openDropdown === 2 && (
                                <ul ref={insightDropdownRef} className="absolute top-full left-0 mt-9 w-48 bg-white shadow-md rounded-md z-50">
                                    <li className="px-4 py-2">Insight 1</li>
                                    <li className="px-4 py-2">Insight 2</li>
                                    <li className="px-4 py-2">Insight 3</li>
                                </ul>
                            )}
                        </li>

                        <li className="relative">
                            <p onMouseDown={(e) => handleDropdownClick(3, e)} className="cursor-pointer">ABOUT</p>
                            {openDropdown === 3 && (
                                <ul ref={aboutDropdownRef} className="absolute top-full left-0 mt-9 w-48 bg-white shadow-md rounded-md z-50">
                                    <li className="px-4 py-2">About 1</li>
                                    <li className="px-4 py-2">About 2</li>
                                    <li className="px-4 py-2">About 3</li>
                                </ul>
                            )}
                        </li>
                        <li>JOBS</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <div id="inputField">
                    <input className="border-2 border-gray-200 px-2 py-2 rounded-4xl" placeholder='TRY "CYBERSECURITY"' />
                </div>
            </div>
        </div>
    );
}
