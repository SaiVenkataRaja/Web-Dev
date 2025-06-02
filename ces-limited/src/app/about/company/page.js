export default function Company() {
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
                <div className="flex bg-white mx-20 rounded-xl py-2 "   >
                    <div className="w-1/4">

                    </div>
                    <div className="w-3/4">
2
                    </div>
                </div>
            </div>

        </div>
    )
}