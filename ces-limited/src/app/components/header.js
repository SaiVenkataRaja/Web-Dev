'use client'
import Link from "next/link"
import "../styles/header.css"

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


    return (
        <div className="flex px-10 py-10">
            <Link href="/">
                <img src="../images/ces_logo_blue.webp" />
            </Link>
            <div>
                <ul className="flex space-x-10 ml-20 pt-5 cursor-pointer relative">
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
                            <li>DIGITAL TRANSFORMATION</li>
                            <li>MANAGED IT AND OPERATIONS </li>
                            <li>ENTERPRISE APPLICATION</li>
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
                    <li id="navHead">INDUSTRIES
                        <ul className="dropdown-menu">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </li>
                    <li id="navHead">INSIGHTS
                        <ul className="dropdown-menu">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </li>
                    <li id="navHead">ABOUT
                        <ul className="dropdown-menu">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </li>
                    <li id="navHead">JOBS</li>
                    <li id="navHead">CONTACT</li>
                </ul>
            </div>
            <div id="inputField">
                <input className="border-2 border-gray-200 px-2 py-2 rounded-4xl ml-60" placeholder='TRY "CYBERSECURITY"' />
            </div>
        </div>
    )
}
