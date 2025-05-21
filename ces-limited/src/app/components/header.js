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
    // function handleDropdownClick(index, e) {
    //     // Prevent the toggle logic when the dropdown is already open
    //     if (openDropdown === index) {
    //         // Let go of the click and close the dropdown immediately
    //         e.stopPropagation();
    //         setOpenDropdown(null); // Close the currently open dropdown
    //     } else {
    //         // Open the new dropdown and close the previous one
    //         setOpenDropdown(index);
    //     }
    // }

    function handleDropdownClick(index, e) {
        e.stopPropagation();  // Prevent event propagation when clicking on a dropdown item

        if (openDropdown === index) {
            setOpenDropdown(null); // Close the currently open dropdown
        } else {
            setOpenDropdown(index); // Open the new dropdown
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
                            <p onMouseDown={(e) => handleDropdownClick(0, e)} className="cursor-pointer">CAPABILITIES </p>
                            {openDropdown === 0 && (
                                <ul id="widthcons" ref={capDropdownRef} className="flex absolute top-full left-0 mt-9  bg-white shadow-md rounded-md z-50 space-x-6">
                                    <li id="headline" className="px-4 py-2 "><h2 className="pb-3">Business Services</h2>
                                        <ul id="navslist">
                                            <li id="navItem">Fund Accounting</li>
                                            <li id="navItem">Finance & Accounting</li>
                                            <li id="navItem">HR & Payroll</li>
                                            <li id="navItem">Tax & Treasury</li>
                                            <li id="navItem">Procurement</li>
                                            <li id="navItem">Fraud Prevention</li>
                                        </ul>
                                    </li>
                                    <li id="headline" className="px-4 py-2 "><h2 className="pb-3">Digital Transformation</h2>
                                        <ul id="navslist">
                                            <li id="navItem">AI & ML</li>
                                            <li id="navItem">Cloud Migration & Integration</li>
                                            <li id="navItem">Data Engineering & Analytics</li>
                                            <li id="navItem">Industries 5.O</li>
                                            <li id="navItem">Product Engineering</li>
                                            <li id="navItem">Testing & Automation</li>
                                        </ul>
                                    </li>
                                    <li id="headline" className="px-4 py-2 "><h2 className="pb-3">Managed IT and Operations</h2>
                                        <ul id="navslist">
                                            <li id="navItem">Application Maintenance Services</li>
                                            <li id="navItem">Cloud Support</li>
                                            <li id="navItem">Cybersecurity</li>
                                            <li id="navItem">IT Infrastructure Services</li>
                                            <li id="navItem">Network Support</li>
                                            <li id="navItem">24X7 Helpdesk</li>
                                        </ul>
                                    </li>
                                    <li id="headline" className="px-4 py-2 "><h2 className="pb-3">Enterprise Applications</h2>
                                        <ul id="navslist">
                                            <li id="navItem">Oracle</li>
                                            <li id="navItem">SAP</li>
                                            <li id="navItem">Workday</li>
                                            <li id="navItem">Salesforce</li>
                                            <li id="navItem">ZOHO</li>
                                            <li id="navItem">Netsuite</li>
                                        </ul>
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
                                <ul id="indCon" ref={capDropdownRef} className=" flex absolute top-full left-0 mt-9  bg-white shadow-md rounded-md z-50 space-x-6">
                                    <li id="headline" className="px-4 py-2 "><h2 className="pb-3"></h2>
                                        <ul id="navslist">
                                            <li id="navItem">Asset Management</li>
                                            <li id="navItem">Agriculture</li>
                                            <li id="navItem">Healthcare</li>
                                        </ul>
                                    </li>
                                    <li id="headline" className="px-4 py-2 "><h2 className="pb-3"></h2>
                                        <ul id="navslist">
                                            <li id="navItem">Retail</li>
                                            <li id="navItem">ISVS & Enterprise</li>
                                            <li id="navItem">Real Estate</li>
                                        </ul>
                                    </li>
                                    <li id="headline" className="px-4 py-2 "><h2 className="pb-3"></h2>
                                        <ul id="navslist">
                                            <li id="navItem">Manufacturing</li>
                                            <li id="navItem">Utilities</li>
                                        </ul>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="relative">
                            <p onMouseDown={(e) => handleDropdownClick(2, e)} className="cursor-pointer">INSIGHTS</p>
                            {openDropdown === 2 && (
                                <ul id="insightCon" ref={capDropdownRef} className=" flex absolute top-full left-0 mt-9  bg-white shadow-md rounded-md z-50 space-x-6">
                                    <li id="headline" className="px-4 py-2 "><h2 className="pb-3">BLOGS</h2>
                                        <ul id="navslist">
                                            <li id="navItem">AI & Computer Vision for...</li>
                                            <li id="navItem">Accelerate Your S/4HANA Journey with...</li>
                                            <li id="navItem">CES Data Migration Suite: A...</li>
                                        </ul>
                                    </li>
                                    <li id="headline" className="px-4 py-2 "><h2 className="pb-3">CASE STUDIES</h2>
                                        <ul id="navslist">
                                            <li id="navItem">Smart Factory Transformation for a...</li>
                                            <li id="navItem">Patch Management & Zero-Day Security...</li>
                                            <li id="navItem">Oracle Fusion Cloud Test Automation...</li>
                                        </ul>
                                    </li>
                                    <li id="headline" className="px-4 py-2 "><h2 className="pb-3">NEWSROOMS</h2>
                                        <ul id="navslist">
                                            <li id="navItem">CES Limited Unveils Its New...</li>
                                            <li id="navItem">CES Limited Honored with Three...</li>
                                            <li id="navItem">CES Recognized as a Niche...</li>
                                        </ul>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="relative">
                            <p onMouseDown={(e) => handleDropdownClick(3, e)} className="cursor-pointer">ABOUT</p>
                            {openDropdown === 3 && (
                                <ul id="aboutCon" ref={capDropdownRef} className=" flex absolute top-full left-0 mt-9  bg-white shadow-md rounded-md z-50 space-x-6">
                                    <li id="headline" className="px-4 py-2 "><h2 className="pb-3"></h2>
                                        <ul id="navslist">
                                            <li id="navItem" className="px-4 py-2">Leadership</li>
                                            <li id="navItem" className="px-4 py-2">Culture</li>
                                            <li id="navItem" className="px-4 py-2">Employees</li>
                                            <li id="navItem" className="px-4 py-2">Investor</li>
                                        </ul>
                                    </li>
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
