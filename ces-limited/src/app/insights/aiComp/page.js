import Link from "next/link"
import Footer from "@/app/components/footer"
export default function aiComp() {
    return (
        <div>
            <div className="mx-40 flex flex-col items-center justify-center">
                <h1 className=" text-sm  py-4 mt-10 text-center"><Link className="text-gray-500 hover:text-orange-500 border-b-0 hover:border-b hover:border-orange-500" href='/'>CES </Link> <span className="text-gray-500 hover:text-orange-500 border-b-0 hover:border-b hover:border-orange-500 cursor-pointer">/ INSIGHTS </span><Link href="" className="text-gray-500 hover:text-orange-500 border-b-0 hover:border-b hover:border-orange-500 cursor-pointer">/BLOGS</Link> / AI Enabling Manufacturing and Logistics:... </h1>
                <div className=" relative overflow-hidden group my-8">
                    <img className=" rounded-2xl max-w-4xl w-full " src="../images/insights/aiComp.webp" />
                    <div className="absolute inset-0 flex items-center justify-center ">
                        <h3 className="bg-white  text-4xl mt-40 mx-10 py-8 px-8 rounded-3xl ">AI & Computer Vision for Crop Monitoring & Yield Prediction</h3>
                    </div>
                </div>
                <p className="bg-pink-200 px-2 rounded-lg text-sm text-pink-500"> Digital Transformation</p>
                <div>

                    <h1 className="text-xl my-8"><p className="pb-6 text-gray-500">Agriculture is undergoing a digital transformation and AI is at the heart of it. As climate patterns shift and food demand grows, farmers are under pressure to improve productivity while using fewer resources. AI and computer vision technologies are helping achieve this delicate balance by revolutionizing how crops are monitored and how yields are predicted.</p></h1>
                    <h2 className="text-4xl py-5">Smarter Crop Monitoring with AI</h2>
                    <h3 className="text-xl text-gray-500"><p className="pb-6">Traditionally, crop monitoring was labour-intensive and reactive. But with AI, it becomes proactive and data driven.<br></br>monitoring, and process optimization. Some key applications include:</p></h3>
                    <h3 className="text-xl text-gray-500 flex"><img className="w-6 h-6 mt-1 mx-2" src="https://cdn-icons-png.flaticon.com/128/17161/17161134.png" /><p className="pb-6"><span className="text-gray-700 font-semibold">Drone & Satellite Imaging:</span> High-resolution visuals captured at scale allow for complete field visibility. AI models analyse these images to detect anomalies like discoloration, patchy growth, or wilting.</p></h3>
                    <h3 className="text-xl text-gray-500 flex"><img className="w-6 h-6 mt-1 mx-2" src="https://cdn-icons-png.flaticon.com/128/17161/17161134.png" /><p className="pb-6"><span className="text-gray-700 font-semibold">Multispectral & Thermal Imaging:   </span> Computer vision leverages different imaging types to assess plant health, moisture levels, and even nutrient deficiencies.</p></h3>
                    <h3 className="text-xl text-gray-500 flex"><img className="w-6 h-6 mt-1 mx-2" src="https://cdn-icons-png.flaticon.com/128/17161/17161134.png" /><p className="pb-6"><span className="text-gray-700 font-semibold">Disease & Pest Detection:  </span>Machine learning models trained on thousands of image samples can identify crop diseases and pest infestations at early stages—helping avoid widespread damage.</p></h3>

                    <div className="my-12">
                        <h2 className="text-4xl">Yield Prediction Powered by AI</h2>
                        <p className="text-xl text-gray-500 my-6">Predicting crop yield accurately is vital for supply chain planning, pricing, and sustainability. AI simplifies this complex task through:</p>
                        <h3 className="text-xl text-gray-500 flex"><img className="w-6 h-6 mt-1 mx-2" src="https://cdn-icons-png.flaticon.com/128/17161/17161134.png" /><p className="pb-6"><span className="text-gray-700 font-semibold">Historical Data Analysis:</span> Combining weather patterns, past yield data, soil quality, and other agronomic inputs, AI models forecast expected yield with high accuracy.</p></h3>
                        <h3 className="text-xl text-gray-500 flex"><img className="w-6 h-6 mt-1 mx-2" src="https://cdn-icons-png.flaticon.com/128/17161/17161134.png" /><p className="pb-6"><span className="text-gray-700 font-semibold">Predictive Modelling:  </span> Algorithms continuously learn from new data, refining predictions as the season progresses.</p></h3>
                        <h3 className="text-xl text-gray-500 flex"><img className="w-6 h-6 mt-1 mx-2" src="https://cdn-icons-png.flaticon.com/128/17161/17161134.png" /><p className="pb-6"><span className="text-gray-700 font-semibold">Climate-Resilient Farming: </span>Farmers can assess potential risks like drought or flood and adapt crop strategies accordingly.</p></h3>
                    </div>
                    <div>
                        <h2 className="text-4xl py-5"><p className="mb-5">Beyond Monitoring – AI for Sustainable Agriculture</p></h2>
                        <h3 className="text-xl text-gray-500"><p className="pb-6">AI doesn’t stop at field monitoring. It supports sustainable agriculture by::</p></h3>
                        <h3 className="text-xl text-gray-500 flex"><img className="w-6 h-6 mt-1 mx-2" src="https://cdn-icons-png.flaticon.com/128/17161/17161134.png" /><p className="pb-6"><span className="text-gray-700 font-semibold">Reducing Waste: </span>  Predictive insights help optimize fertilizer, water, and pesticide usage minimizing environmental impact.</p></h3>
                        <h3 className="text-xl text-gray-500 flex"><img className="w-6 h-6 mt-1 mx-2" src="https://cdn-icons-png.flaticon.com/128/17161/17161134.png" /><p className="pb-6"><span className="text-gray-700 font-semibold">Boosting Efficiency:  </span>Automation through robotics, AI-driven irrigation, and weather-adaptive schedules improve resource management.</p></h3>
                        <h3 className="text-xl text-gray-500 flex"><img className="w-6 h-6 mt-1 mx-2" src="https://cdn-icons-png.flaticon.com/128/17161/17161134.png" /><p className="pb-6"><span className="text-gray-700 font-semibold">Market Intelligence:</span> AI tools also offer post-harvest insights predicting demand, pricing trends, and best-selling channels.</p></h3>
                    </div>
                    <div>
                        <h2 className="text-4xl py-5"><p className="mb-5">Scalability Through Integration</p></h2>
                        <h3 className="text-xl text-gray-500"><p className="pb-6">AI for agriculture works best when integrated with a larger ecosystem:</p></h3>
                        <h3 className="text-xl text-gray-500 flex"><img className="w-6 h-6 mt-1 mx-2" src="https://cdn-icons-png.flaticon.com/128/17161/17161134.png" /><p className="pb-6"><span className="text-gray-700 font-semibold">IoT Sensors: </span> Provide real-time environmental data to feed into AI models.</p></h3>
                        <h3 className="text-xl text-gray-500 flex"><img className="w-6 h-6 mt-1 mx-2" src="https://cdn-icons-png.flaticon.com/128/17161/17161134.png" /><p className="pb-6"><span className="text-gray-700 font-semibold">Edge Computing: </span>Enables AI processing directly on devices like drones or cameras in remote areas with limited connectivity.</p></h3>
                        <h3 className="text-xl text-gray-500 flex"><img className="w-6 h-6 mt-1 mx-2" src="https://cdn-icons-png.flaticon.com/128/17161/17161134.png" /><p className="pb-6"><span className="text-gray-700 font-semibold">Cloud Platforms: </span> Centralize data, enable collaborative decision-making, and offer insights via dashboards accessible to farmers, agronomists, and supply chain teams.</p></h3>
                    </div>
                    <div>
                        <h2 className="text-4xl py-5"><p className="mb-5">CES: Your Partner in AI-Powered AgriTech</p></h2>
                        <h3 className="text-xl text-gray-500"><p className="pb-6">At CES, we help AgriTech innovators reimagine the future of farming. Our AI and computer vision solutions are built for scale, accuracy, and impact. With deep expertise in edge computing, IoT, and geospatial analytics, we enable:</p></h3>
                        <h3 className="text-xl text-gray-500 flex"><img className="w-6 h-6 mt-1 mx-2" src="https://cdn-icons-png.flaticon.com/128/17161/17161134.png" /><p className="pb-6"><span className="text-gray-700 font-semibold"></span> Real-time monitoring at scale</p></h3>
                        <h3 className="text-xl text-gray-500 flex"><img className="w-6 h-6 mt-1 mx-2" src="https://cdn-icons-png.flaticon.com/128/17161/17161134.png" /><p className="pb-6"><span className="text-gray-700 font-semibold"></span>Accurate and dynamic yield forecasting</p></h3>
                        <h3 className="text-xl text-gray-500 flex"><img className="w-6 h-6 mt-1 mx-2" src="https://cdn-icons-png.flaticon.com/128/17161/17161134.png" /><p className="pb-6"><span className="text-gray-700 font-semibold"></span> Seamless integration into existing Agri ecosystems </p></h3>
                    </div>
                    <div>
                        <h2 className="text-4xl mb-4">Ready to embrace data-driven agriculture?</h2>
                        <h3 className="text-gray-500 text-xl my-4 "><p>Partner with us to build a seamless, future-ready ecosystem powered by intelligent insights.</p></h3>
                        <h3 className="text-gray-500 text-xl my-4">Contact our Manager, Mr. Guru (<span className="text-blue-600  cursor-pointer hover:text-orange-600">guru.mahalinghan@cesltd.com</span>) or  </h3>
                        <h3 className="text-gray-500 text-xl my-4">Connect with our Director of Account Management, Mr. Chaitanya  (<span className=" cursor-pointer text-blue-600 hover:text-orange-600">chaitanya.vummethala@cesltd.com</span>)  to schedule a consultation and explore how CES can elevate your AgriTech, e-commerce, or retail operations.  </h3>
                    </div>

                </div>
                <div className="flex ">
                    <div className="flex  border-2 border-gray-500 py-10 my-20  rounded-2xl">
                        <h3 className="px-5 cursor-pointer hover:text-orange-500" >Accelerate Your S/4HANA<br></br> Journey with CES’s Data <br></br>Assessment & Cleansing Services </h3>
                        <img className="w-12 h-12 ml-6 mr-4 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/54/54366.png" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}