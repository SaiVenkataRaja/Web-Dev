import Image from "next/image";
import Header from "./components/header";
import "./styles/home.css"
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Header />

      <div className="px-10 py-10">

        <h2 className="text-5xl">SMART@CES Powers Businesses to Win</h2>
        <p className="my-4 text-2xl text-gray-500">Behind every success is a SMART strategy no one saw coming. Ready to write yours with CES? <span className="text-orange-600 cursor-pointer hover:border-b-2">Contact Us!</span></p>
        <div id="homeContainer">
          <div id="imgContainer" className="relative overflow-hidden group rounded-2xl">
            <img id="image" src="../images/homepageImages/support.webp" className="transition-transform duration-500 ease-in-out group-hover:scale-110 w-full rounded-2xl"/>
            <h2 id="headLetter" className="">S</h2>
            <div className="rounded-2xl" id="textContainer">
              <h3 className="mb-5 bg-gray-200 rounded-full">SUPPORT</h3>
              <p className="my-5">RELIABLE OPERATIONS AND CONTINUOUS IMPROVEMENT </p>
              <button className="text-orange-500 border-2 border-orange-500 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:bg-orange-500">EXPLORE</button>
            </div>
          </div>
          <div id="imgContainer"  className="relative overflow-hidden group rounded-2xl">
            <img id="image" src="../images/homepageImages/modernize.webp" className="transition-transform duration-500 ease-in-out group-hover:scale-110 w-full rounded-2xl"/>
            <h2 id="headLetter">M</h2>
            <div className="rounded-2xl" id="textContainer">
              <h3 className="mb-5 bg-gray-200 rounded-full">MODERNIZE</h3>
              <p className="my-5">SYSTEM UPGRADES AND INNOVATION </p>
              <button className="text-orange-500 border-2 border-orange-500 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:bg-orange-500">EXPLORE</button>
            </div>
          </div>
          <div id="imgContainer"  className="relative overflow-hidden group rounded-2xl">
            <img id="image" src="../images/homepageImages/automate.webp" className="transition-transform duration-500 ease-in-out group-hover:scale-110 w-full rounded-2xl" />
            <h2 id="headLetter">A</h2>
            <div className="rounded-2xl" id="textContainer">
              <h3 className="mb-5 bg-gray-200 rounded-full">AUTOMATE</h3>
              <p className="my-5">TASK AND WORKFLOW EFFICIENCY</p>
              <button className="text-orange-500 border-2 border-orange-500 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:bg-orange-500">EXPLORE</button>
            </div>
          </div>
          <div id="imgContainer"  className="relative overflow-hidden group rounded-2xl">
            <img id="image" src="../images/homepageImages/reinforce.webp" className="transition-transform duration-500 ease-in-out group-hover:scale-110 w-full rounded-2xl"/>
            <h2 id="headLetter">R</h2>
            <div className="rounded-2xl" id="textContainer">
              <h3 className="mb-5 bg-gray-200 rounded-full">REINFORCE</h3>
              <p className="my-5">ROBUST PROTECTION OF SYSTEMS, DATA & ACCESS </p>
              <button className="text-orange-500 border-2 border-orange-500 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:bg-orange-500">EXPLORE</button>
            </div>
          </div>
          <div id="imgContainer"  className="relative overflow-hidden group rounded-2xl">
            <img id="image" src="../images/homepageImages/transform.webp" className="transition-transform duration-500 ease-in-out group-hover:scale-110 w-full rounded-2xl"/>
            <h2 id="headLetter">T</h2>
            <div className="rounded-2xl" id="textContainer">
              <h3 className="mb-5 bg-gray-200 rounded-full">TRANFORM</h3>
              <p className="my-5">END-TO-END BUSINESS REINVENTION </p>
              <button className="text-orange-500 border-2 border-orange-500 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:bg-orange-500">EXPLORE</button>
            </div>
          </div>
        </div>
      </div>
      );
    </div>
  )
}
