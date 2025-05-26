import Link from "next/link";
import "../styles/footer.css"

export default function Footer() {
    return (
        <div className="px-14 py-10 border-b-gray-2">
            <Link href="/"><img src="../images/ces_logo_blue.webp" /></Link>
            <div className="container">
                <div>
                    <h3 className="text-4xl">Your One-Stop Partner for<br></br> All Technology and<br></br> Business Solutions</h3>
                    <button id="footerBut" className="mt-8 py-2 px-7 rounded-4xl font-bold text-orange-500 border-2 border-orange-400 ">LET'S TALK</button>
                </div>
                <div>
                    <h2 id="footerTitles">BUSINESS SERVICES</h2>
                    <ul id="footerPoints">
                        <li id="footerInPoints"><Link href="/">Fund Accounting</Link></li>
                        <li id="footerInPoints"> <Link href="/">Finance & Accounting</Link></li>
                        <li id="footerInPoints"><Link href="/">HR & Payroll</Link></li>
                        <li id="footerInPoints"> <Link href="/">Tax & Treasury</Link></li>
                        <li id="footerInPoints"><Link href="/">Procurement</Link></li>
                        <li id="footerInPoints"><Link href="/">Fraud Prevention</Link></li>
                    </ul>

                </div>
                <div>
                    <h2 id="footerTitles">Digital Transformation</h2>
                    <ul id="footerPoints">
                        <li id="footerInPoints"><Link href="/">AI & ML</Link></li>
                        <li id="footerInPoints"> <Link href="/">Cloud Migration & Integration</Link></li>
                        <li id="footerInPoints"><Link href="/">Data Engineering & Analytics</Link></li>
                        <li id="footerInPoints"> <Link href="/">Industries 5.O</Link></li>
                        <li id="footerInPoints"><Link href="/">Product Engineering</Link></li>
                        <li id="footerInPoints"><Link href="/">Testing & Automation</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 id="footerTitles">Managed IT and Operations</h2>
                    <ul id="footerPoints">
                        <li id="footerInPoints"><Link href="/">Application Maintenance Services</Link></li>
                        <li id="footerInPoints"> <Link href="/">Cloud Support</Link></li>
                        <li id="footerInPoints"><Link href="/">Cybersecurity</Link></li>
                        <li id="footerInPoints"> <Link href="/">IT Infrastructure Services</Link></li>
                        <li id="footerInPoints"><Link href="/">Network Support</Link></li>
                        <li id="footerInPoints"><Link href="/">24X7 Helpdesk</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 id="footerTitles">Enterprise Applications</h2>
                    <ul id="footerPoints">
                        <li id="footerInPoints"><Link href="/">Oracle</Link></li>
                        <li id="footerInPoints"> <Link href="/">SAP</Link></li>
                        <li id="footerInPoints"><Link href="/">Workday</Link></li>
                        <li id="footerInPoints"> <Link href="/">Salesforce</Link></li>
                        <li id="footerInPoints"><Link href="/">ZOHO</Link></li>
                        <li id="footerInPoints"><Link href="/">Netsuite</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 id="footerTitles">ABOUT</h2>
                    <ul id="footerPoints">
                        <li id="footerInPoints"><Link href="/">Company</Link></li>
                        <li id="footerInPoints"> <Link href="/">Leadership</Link></li>
                        <li id="footerInPoints"><Link href="/">Culture</Link></li>
                        <li id="footerInPoints"> <Link href="/">Employees</Link></li>
                        <li id="footerInPoints"><Link href="/">Jobs</Link></li>
                        <li id="footerInPoints"><Link href="/">Contact</Link></li>
                        <li id="footerInPoints"><Link href="/">Investor</Link></li>
                    </ul>
                </div>
                <div className="text-gray-500 text-sm flex py-10 space-x-16">
                    <Link href="/" className="cursor-pointer hover:text-orange-500 transition-colors duration-500 ease-in-out">info@cesltd.com</Link>
                    <p className="cursor-pointer hover:text-orange-500 transition-colors duration-500 ease-in-out">View Locations</p>


                </div>
                <div>
                    <h2 id="footerTitles">INDUSTRIES</h2>
                    <ul id="footerPoints">
                        <li id="footerInPoints"><Link href="/">Agriculture</Link></li>
                        <li id="footerInPoints"> <Link href="/">Asset Management</Link></li>
                        <li id="footerInPoints"><Link href="/">Healthcare</Link></li>
                        <li id="footerInPoints"> <Link href="/">Isvs & Enterprise</Link></li>
                    </ul>
                </div>
                <div><h2 id="footerTitles">INDUSTRIES</h2>
                    <ul id="footerPoints">
                        <li id="footerInPoints"><Link href="/">Manufacturing</Link></li>
                        <li id="footerInPoints"> <Link href="/">Real Estate</Link></li>
                        <li id="footerInPoints"><Link href="/">Utilities</Link></li>
                        <li id="footerInPoints"> <Link href="/">Retail</Link></li>
                    </ul></div>
                <div>
                    <h2 id="footerTitles">INSIGHTS</h2>
                    <ul id="footerPoints">
                        <li id="footerInPoints"><Link href="/">Blogs</Link></li>
                        <li id="footerInPoints"> <Link href="/">Case Studies</Link></li>
                        <li id="footerInPoints"><Link href="/">Newsroom</Link></li>
                    </ul>
                </div>
                <div className="flex space-x-6 mt-20">
                    <img id="icon" src="../images/footer_logos/fb_logo.png" alt="FaceBook" />
                    <img id="icon" src="../images/footer_logos/insta_logo.png" alt="Twitter" />
                    <img id="icon" src="../images/footer_logos/linkedin_logo.png" alt="LinkedIn" />
                    <img id="icon" src="../images/footer_logos/x_logo.png" alt="Instagram" />
                    <img id="icon" src="../images/footer_logos/yt_logo.png" alt="Youtube" />
                </div>

            </div>
            <div className="border-b-2 border-b-gray-300 my-12"></div>
            <div className="flex space-x-220 text-xs text-gray-500">
                <div className="flex space-x-16 ">
                    <p>PRIVACY POLICY</p>
                    <p>TERMS OF USE</p>
                </div>
                <div>
                    <p>© 2025 CES LIMITED. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    );
}
