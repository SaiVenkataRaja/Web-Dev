'use client'
import Connect from "@/app/components/connect"
import Footer from "@/app/components/footer"
import FooterTop from "@/app/components/footerTop"
import { useState } from "react"

export default function Company() {
    const [openTab, setOpenTab] = useState("Support")
    const [isBoxOpen, setisBoxOpen] = useState(false)
    const data = {
        "Support": {
            heading: "The Backbone of Business Stability",
            info: [
                "Enterprise-Grade IT & Business Process Support",
                "24/7 Application & Cloud Monitoring",
                "Managed Services For SAP, Oracle, Salesforce & Workday",
                "Compliance & Data Security Assurance"
            ]
        },
        "Modernize": {
            heading: "Breaking Free from Outdated Systems",
            info: [
                "SAP S/4HANA & Oracle Cloud Migrations",
                "AI-Driven Financial & Compliance Automation",
                "Cloud-Native Transformation for Scalability",
                "Next-Gen Data Management & Analytics"
            ]
        },
        "Automate": {
            heading: "Replacing Manual Effort with Intelligent Execution",
            info: [
                "AI-powered RPA for Finance, HR & Supply Chain",
                "Test Automation & AI-Driven Quality Assurance",
                "Autonomous Data Ingestion & Real-Time Analytics",
                "Smart Logistics & Warehousing Automation"
            ]
        },
        "Reinforce": {
            heading: "Security, Compliance & Resilience for Tomorrow",
            info: [
                "Enterprise Cybersecurity & AI-Driven Risk Mitigation",
                "SOC 1-Type II & Regulatory Compliance",
                "Fraud Prevention & Financial Governance",
                "Disaster Recovery & Business Continuity"
            ]
        }, "Tranform": {
            heading: "The Backbone of Business Stability",
            info: [
                "Enterprise-Grade IT & Business Process Support",
                "24/7 Application & Cloud Monitoring",
                "Managed Services For SAP, Oracle, Salesforce & Workday",
                "Compliance & Data Security Assurance"
            ]
        }
    }
    return (
        <div>
            <div className="flex px-14 py-10 space-x-15">
                <div>
                    <p className="text-sm text-gray-400"> CES / <span className="text-black">CONTACT</span></p>
                    <h1 className="text-5xl py-5">Solving Today. Scaling <br></br>Tomorrow</h1>
                    <p className="text-xl text-gray-500">For over two decades, CES has powered businesses that lead,<br></br> disrupt, and redefine industries.</p>
                    <button className="cursor-pointer border-2 border-orange-500 my-10 px-6 py-4 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white font-bold transition-colors duration-300">EXPLORE MORE</button>
                </div>
                <div>
                    <img src="../images/companyPage/company_1.webp" width="800px" />
                </div>
            </div>
            <div className="flex gap-40 mx-14 my-44" >
                <div className="w-96">
                    <h1 className="text-5xl whitespace-nowrap">Technology Evolves.<br></br> So Do We.</h1>

                </div>
                <div>
                    <h1 className="text-xl text-gray-500 ml-32 "><p className="pb-4">We don’t just fix problems—we engineer scalable, intelligent, and resilient<br></br> digital ecosystems.<br></br></p>
                        <p className="pb-4">From a technology solutions provider to a global force in innovation, we <br></br>enable enterprises to support critical operations, modernize infrastructure,<br></br> automate workflows, reinforce security, and transform industries—all<br></br> through our SMART@CES framework.<br></br></p>
                        This isn’t just what we do. It’s who we are.</h1>
                </div>
            </div>
            <div className="bg-gray-200 py-30">
                <div className="text-center">
                    <h1 className="text-5xl py-7">Our DNA: The SMART Approach</h1>
                    <p className="text-gray-500 text-xl pb-20">Our SMART framework is engineered to align with real business challenges, empowering <br></br>organizations to scale, innovate, and lead with confidence.</p>
                </div>
                <div className="flex bg-white mx-20   "   >
                    <div className="w-1/4 ">
                        {Object.keys(data).map((key) => (
                            <div key={key} onClick={() => setOpenTab(key)} className={`cursor-pointer py-4 px-6 text-lg  bg-gray-100 ${openTab == key ? "text-black border-b-4 border-orange-300 bg-white" : "text-gray-500"}`}>
                                {key === "Support" ? "S - Support" :
                                    key === "Modernize" ? "M - Modernize" :
                                        key === "Automate" ? "A - Automate" :
                                            key === "Reinforce" ? "R - Reinforce" :
                                                "T - Transform"}
                            </div>
                        ))}
                    </div>
                    <div className="w-3/4 p-10">
                        <h2 className="text-3xl pb-10">{data[openTab].heading}</h2>
                        <ul>
                            {data[openTab].info.map((point, index) => (
                                <li key={index} className="flex items-center py-1 text-gray-500 text-xl">
                                    <span className="text-orange-500 mr-3">✔ </span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mb-40 px-14">
                <h1 className="text-center py-16 text-5xl">Why CES, Why Not?</h1>
                <div className="flex text-center">
                    <div className="border-1 border-dashed border-black w-1/4 flex flex-col items-center py-10 rounded-xl ">
                        <img className="" src="../images/companyPage/con1.webp" />
                        <p className="px-4 pt-4 text-xl text-gray-500">20+ Years of delivering <br></br>impact-driven technology<br></br> solutions</p>
                    </div>
                    <div className="border-1 border-dashed border-black w-1/4 flex flex-col items-center py-10 rounded-xl">
                        <img src="../images/companyPage/con2.webp" />
                        <p className="px-4 pt-4 text-xl text-gray-500"> Fortune 500 clients across multiple industries</p>
                    </div>
                    <div className="border-1 border-dashed border-black w-1/4 flex flex-col items-center py-10 rounded-xl">
                        <img src="../images/companyPage/con3.webp" />
                        <p className="px-4 pt-4 text-xl text-gray-500" >Expertise spanning Cloud,<br></br> ERP, AI, RPA, Cybersecurity<br></br> & Digital Transformation</p>
                    </div>
                    <div className="border-1 border-dashed border-black w-1/4 flex flex-col items-center py-10 rounded-xl">
                        <img src="../images/companyPage/con4.webp" />
                        <p className="px-4 pt-4 text-xl text-gray-500">A SMART-driven approach <br></br>that turns challenges into<br></br> competitive advantages</p>
                    </div>
                </div>
            </div>
            <FooterTop setisBoxOpen={setisBoxOpen}/>
            <Connect isOpen={isBoxOpen} onClose={() => setisBoxOpen(false)}/>
            <Footer />
        </div>
    )
}