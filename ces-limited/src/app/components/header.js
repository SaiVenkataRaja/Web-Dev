'use client'
import Link from "next/link"
import "../styles/header.css"
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function Header() {

    //     // tracks which dropdown is open : click on another nav should close the current one : 2
    //     const [openDropdown, setOpenDropdown] = useState(null);


    //     const capDropdownRef = useRef(null);
    //     const indDropdownRef = useRef(null);
    //     const insightDropdownRef = useRef(null);
    //     const aboutDropdownRef = useRef(null);

    //     //ai helped to write this block
    //     // Handle dropdown toggle logic (use mousedown event) 
    //     // function handleDropdownClick(index, e) {
    //     //     // Prevent the toggle logic when the dropdown is already open
    //     //     if (openDropdown === index) {
    //     //         // Let go of the click and close the dropdown immediately
    //     //         e.stopPropagation();
    //     //         setOpenDropdown(null); // Close the currently open dropdown
    //     //     } else {
    //     //         // Open the new dropdown and close the previous one
    //     //         setOpenDropdown(index);
    //     //     }
    //     // }

    //     function handleDropdownClick(index, e) {
    //         e.stopPropagation();  // Prevent event propagation when clicking on a dropdown item

    //         if (openDropdown === index) {
    //             setOpenDropdown(null); // Close the currently open dropdown
    //         } else {
    //             setOpenDropdown(index); // Open the new dropdown
    //         }
    //     }

    //     // Listen for outside clicks to close dropdown
    //    useEffect(() => {
    //     const handleClickOutside = (e) => {
    //         if (
    //             (capDropdownRef.current && !capDropdownRef.current.contains(e.target) && openDropdown === 0) ||
    //             (indDropdownRef.current && !indDropdownRef.current.contains(e.target) && openDropdown === 1) ||
    //             (insightDropdownRef.current && !insightDropdownRef.current.contains(e.target) && openDropdown === 2) ||
    //             (aboutDropdownRef.current && !aboutDropdownRef.current.contains(e.target) && openDropdown === 3)
    //         ) {
    //             setOpenDropdown(null); // Close dropdown if the click happened outside of the open dropdown
    //         }
    //     };

    //     // Add event listener for outside clicks
    //     document.addEventListener('mousedown', handleClickOutside);

    //     // Cleanup event listener on component unmount
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [openDropdown]); // Dependency on openDropdown to handle state changes



    // // tracks which dropdown is open : click on another nav should close the current one
    // const [openDropdown, setOpenDropdown] = useState(null);

    // // refs for each dropdown menu
    // const capDropdownRef = useRef(null);
    // const indDropdownRef = useRef(null);
    // const insightDropdownRef = useRef(null);
    // const aboutDropdownRef = useRef(null);

    // function handleDropdownClick(index, e) {
    //     e.stopPropagation();  // Prevent event propagation when clicking on a dropdown item

    //     if (openDropdown === index) {
    //         setOpenDropdown(null); // Close the currently open dropdown
    //     } else {
    //         setOpenDropdown(index); // Open the new dropdown
    //     }
    // }

    // // Listen for outside clicks to close dropdown
    // useEffect(() => {
    //     const handleClickOutside = (e) => {
    //         // Check if the click happened outside any open dropdown
    //         if (
    //             (capDropdownRef.current && !capDropdownRef.current.contains(e.target) && openDropdown === 0) ||
    //             (indDropdownRef.current && !indDropdownRef.current.contains(e.target) && openDropdown === 1) ||
    //             (insightDropdownRef.current && !insightDropdownRef.current.contains(e.target) && openDropdown === 2) ||
    //             (aboutDropdownRef.current && !aboutDropdownRef.current.contains(e.target) && openDropdown === 3)
    //         ) {
    //             setOpenDropdown(null); // Close dropdown if the click happened outside of the open dropdown
    //         }
    //     }

    //     // Add event listener for outside clicks
    //     document.addEventListener('mousedown', handleClickOutside);

    //     // Cleanup event listener on component unmount
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [openDropdown]); // Dependency on openDropdown to handle state changes



    // Note : Replace id's for each one to make the above stuff to work , but has one issue : handleCLick outside function 

    // const theme = useContext(ThemeContext)

    // const headerStyle = theme === "light" ? "bg-gray-200 text-black" : 'bg-gray-800 '
    return (
        <div className="flex px-14 py-10">
            <Link href="/">
                <img src="../images/ces_logo_blue.webp" />
            </Link>
            <div>
                <ul className="flex space-x-14 ml-20 pt-5 cursor-pointer relative">
                    <li id="navHead" className="relative">CAPABILITIES
                        <ul className="dropdown-menu" id="capdrop">
                            <li><h2 id="dropHead">BUSINESS SERVICES</h2>
                                <ul id="navslist">
                                    <p id="navItem">Fund Accounting</p>
                                    <p id="navItem">Finance & Accounting</p>
                                    <p id="navItem">HR & Payroll</p>
                                    <p id="navItem">Tax & Treasury</p>
                                    <p id="navItem">Procurement</p>
                                    <p id="navItem">Fraud Prevention</p>
                                </ul>
                            </li>
                            <li><h2 id="dropHead">DIGITAL TRANSFORMATION</h2>
                                <ul id="navslist">
                                    <p id="navItem">AI & ML</p>
                                    <p id="navItem">Cloud Migration & Integration</p>
                                    <p id="navItem">Data Engineering & Analytics</p>
                                    <p id="navItem">Industries 5.0</p>
                                    <p id="navItem">Product Engineering</p>
                                    <p id="navItem">Testing & Automation</p>
                                </ul>
                            </li>
                            <li><h2 id="dropHead">MANAGED IT AND OPERATIONS </h2>
                                <ul id="navslist">
                                    <p id="navItem">Application Maintenance Services</p>
                                    <p id="navItem">Cloud Support</p>
                                    <p id="navItem">Cybersecurity</p>
                                    <p id="navItem">IT Infrastructure Services</p>
                                    <p id="navItem">Network Support</p>
                                    <p id="navItem">24X7 Helpdesk</p>
                                </ul>
                            </li>
                            <li><h2 id="dropHead">ENTERPRISE APPLICATION</h2>
                                <ul id="navslist">
                                    <p id="navItem">Oracle</p>
                                    <p id="navItem">SAP</p>
                                    <p id="navItem">Workday</p>
                                    <p id="navItem">Salesforce</p>
                                    <p id="navItem">ZOHO</p>
                                    <p id="navItem">Netsuite</p>
                                </ul>

                            </li>
                        </ul>
                        {/* The operation that needs to be done : 
                                 when i click on other navs , the existing opened navbar should be closed 
                                 when i click on the screen somewhere, the opened navbar should be closed 
                                          useRef to track the dropdown element: we need to attach a ref to the dropdown element.
                                                      this will allow us to check if the click happened outside the dropdown
                                          Listen for clicks outside: we use useEffect to listen clicks on the document,
                                                      if the click happens outside the dropdown, we will close it
                                          Handle click on the other navbar items : To handle clicking another navbar item (and closing the current dropdown if open),
                                                      you can keep track of which navbar item is open, similar to how you manage the state. */}


                    </li>
                    <li id="navHead" >INDUSTRIES
                        <ul className="dropdown-menu" id="indusDrop">
                            <li><h2 id="dropHead" className="space-x-10"></h2>
                                <ul id="navslist">
                                    <p id="navItem">Asset Management</p>
                                    <p id="navItem">Agriculture</p>
                                    <p id="navItem">Healthcare</p>
                                   
                                </ul>
                            </li>
                            <li><h2 id="dropHead"></h2>
                                <ul id="navslist">
                                    <p id="navItem">Retail</p>
                                    <p id="navItem">ISVS & Enterprise</p>
                                    <p id="navItem">Real Estate</p>
                                </ul>
                            </li>
                            <li><h2 id="dropHead"></h2>
                                <ul id="navslist">
                                    <p id="navItem">Manufacturing</p>
                                    <p id="navItem">Utilities</p>
                            
                                </ul>
                            </li>
                           
                        </ul>
                    </li>
                    <li id="navHead">INSIGHTS
                        <ul className="dropdown-menu" id="capdrop">
                            <li><h2 id="dropHead">BLOGS</h2>
                                <ul id="navslist">
                                    <p id="navItem">AI & Computer Vision for...</p>
                                    <p id="navItem">Accelerate Your S/4HANA Journey with...</p>
                                    <p id="navItem">CES Data Migration Suite: A...</p>
                                </ul>
                            </li>
                            <li><h2 id="dropHead">CASE STUDIES</h2>
                                <ul id="navslist">
                                    <p id="navItem">Smart Factory Transformation for a...</p>
                                    <p id="navItem">Patch Management & Zero-Day Security...</p>
                                    <p id="navItem">Oracle Fusion Cloud Test Automation...</p>                
                                </ul>
                            </li>
                            <li><h2 id="dropHead">NEWSROOMS </h2>
                                <ul id="navslist">
                                    <p id="navItem">CES Limited Unveils Its New...</p>
                                    <p id="navItem">CES Limited Honored with Three...</p>
                                    <p id="navItem">CES Recognized as a Niche...</p>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li id="navHead">ABOUT
                        <ul className="dropdown-menu" id="aboutDrop">
                            <li><h2 id="dropHead" className="space-x-10"></h2>
                                <ul id="navslist">
                                    <p id="navItem">Company</p>
                                    <p id="navItem">Leadership</p>
                                    <p id="navItem">Culture</p>
                                    <p id="navItem">Employees</p>
                                    <p id="navItem">Investor</p>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li id="navHead">JOBS</li>
                    <Link href="../contact"><li id="navHead">CONTACT</li></Link>
                </ul>
            </div>
            <div id="inputField">
                <input className="border-2 border-gray-200 px-2 py-2 rounded-4xl ml-60" placeholder='TRY "CYBERSECURITY"' />
            </div>
            {/* <div>
                <p>Current Theme : <strong>{theme}</strong></p>
            </div> */}
        </div>
    )
}
