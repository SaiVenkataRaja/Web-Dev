'use client'
import Connect from "@/app/components/connect";
import Link from "next/link";
import FooterTop from "@/app/components/footerTop";
import Footer from "@/app/components/footer";
import { useState } from "react";
export default function Leadership() {
    const [isBoxOpen, setisBoxOpen] = useState(false)
    return (
        <div>
            <div className="text-center">
                <h1 className=" text-sm  py-4 mt-10 "><p className="text-gray-500 hover:text-orange-500 border-b-0 hover:border-b hover:border-orange-500" href='/'>CES </p> / LEADERSHIP </h1>
                <h1 className="text-5xl py-4">Guiding Tomorrow’s Technology Our<br></br> Leadership in Action</h1>
                <p className="text-xl text-gray-500">Meet our global leaders with extensive experience committed to making a difference for our clients and <br></br>employees.    </p>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-12 pl-20  my-20">
                <div className="relative flex flex-col items-center my-10 cursor-pointer group hover:scale-105 transition-transform duration-300">
                    <img className=" rounded-2xl shadow-lg" src="https://cesltd.com/wp-content/uploads/2025/02/venkat-photo.webp" />
                    <div className="absolute -bottom-8 bg-white shadow-md rounded-xl p-4 w-48 text-center">
                        <div className="bg-gray-200 w-8 h-8 mx-auto flex items-center justify-center rounded-full">
                            <img className="w-5 h-5  filter grayscale hover:filter-none transition duration-300" src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" />
                        </div>
                        <p className="text-l mt-2 font-semibold">Venkat Davarapalli   </p>
                        <p className="text-sm text-gray-500">Chairman</p>
                    </div>
                </div>
                <div className="relative flex flex-col items-center cursor-pointer my-10 group hover:scale-105 transition-transform duration-300">
                    <img className=" rounded-2xl shadow-lg" src="https://cesltd.com/wp-content/uploads/2025/02/leader-mohan-k.webp" />
                    <div className="absolute -bottom-10 bg-white shadow-md rounded-xl p-4 w-48 text-center">
                        <div className="bg-gray-200 w-8 h-8 mx-auto flex items-center justify-center rounded-full">
                            <img className="w-5 h-5  filter grayscale hover:filter-none transition duration-300" src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" />
                        </div>
                        <p className="text-l mt-2 font-semibold">Mohana Kancharla</p>
                        <p className="text-sm text-gray-500">Promoter & Whole-Time Director</p>
                    </div>
                </div>
                <div className="relative flex flex-col items-center cursor-pointer my-10 group hover:scale-105 transition-transform duration-300">
                    <img className=" rounded-2xl shadow-lg" src="https://cesltd.com/wp-content/uploads/2025/02/leader-amarnath.webp" />
                    <div className="absolute -bottom-8 bg-white shadow-md rounded-xl p-4 w-48 text-center">
                        <div className="bg-gray-200 w-8 h-8 mx-auto flex items-center justify-center rounded-full">
                            <img className="w-5 h-5  filter grayscale hover:filter-none transition duration-300" src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" />
                        </div>
                        <p className="text-l mt-2 font-semibold">Amarnath Alur</p>
                        <p className="text-sm text-gray-500">Oracle</p>
                    </div>
                </div><div className="relative flex flex-col items-center cursor-pointer my-10 group hover:scale-105 transition-transform duration-300">
                    <img className=" rounded-2xl shadow-lg" src="https://cesltd.com/wp-content/uploads/2025/02/leader-raju-k.webp" />
                    <div className="absolute -bottom-8 bg-white shadow-md rounded-xl p-4 w-48 text-center">
                        <div className="bg-gray-200 w-8 h-8 mx-auto flex items-center justify-center rounded-full">
                            <img className="w-5 h-5  filter grayscale hover:filter-none transition duration-300" src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" />
                        </div>
                        <p className="text-l mt-2 font-semibold">Raju Konduru</p>
                        <p className="text-sm text-gray-500">DIgital Transformation</p>
                    </div>
                </div><div className="relative flex flex-col items-center cursor-pointer my-10 group hover:scale-105 transition-transform duration-300">
                    <img className=" rounded-2xl shadow-lg" src="https://cesltd.com/wp-content/uploads/2025/02/leader-raju-vedala.webp" />
                    <div className="absolute -bottom-8 bg-white shadow-md rounded-xl p-4 w-48 text-center">
                        <div className="bg-gray-200 w-8 h-8 mx-auto flex items-center justify-center rounded-full">
                            <img className="w-5 h-5  filter grayscale hover:filter-none transition duration-300" src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" />
                        </div>
                        <p className="text-l mt-2 font-semibold">Raju Vedala</p>
                        <p className="text-sm text-gray-500">SAP & Workday</p>
                    </div>
                </div><div className="relative flex flex-col items-center cursor-pointer my-10 group hover:scale-105 transition-transform duration-300">
                    <img className=" rounded-2xl shadow-lg" src="https://cesltd.com/wp-content/uploads/2025/02/leader-velu-p.webp" />
                    <div className="absolute -bottom-8 bg-white shadow-md rounded-xl p-4 w-48 text-center">
                        <div className="bg-gray-200 w-8 h-8 mx-auto flex items-center justify-center rounded-full">
                            <img className="w-5 h-5  filter grayscale hover:filter-none transition duration-300" src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" />
                        </div>
                        <p className="text-l mt-2 font-semibold">Velu Palani</p>
                        <p className="text-sm text-gray-500">Salesforce</p>
                    </div>
                </div><div className="relative flex flex-col items-center cursor-pointer my-10 group hover:scale-105 transition-transform duration-300">
                    <img className=" rounded-2xl shadow-lg" src="https://cesltd.com/wp-content/uploads/2025/03/leader_ramesh_t.webp" />
                    <div className="absolute -bottom-8 bg-white shadow-md rounded-xl p-4 w-48 text-center">
                        <div className="bg-gray-200 w-8 h-8 mx-auto flex items-center justify-center rounded-full">
                            <img className="w-5 h-5  filter grayscale hover:filter-none transition duration-300" src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" />
                        </div>
                        <p className="text-l mt-2 font-semibold">Ramesh Tavva</p>
                        <p className="text-sm text-gray-500">F&A</p>
                    </div>
                </div><div className="relative flex flex-col items-center cursor-pointer my-10 group hover:scale-105 transition-transform duration-300">
                    <img className=" rounded-2xl shadow-lg" src=" https://cesltd.com/wp-content/uploads/2025/03/leader_adrees.webp" />
                    <div className="absolute -bottom-8 bg-white shadow-md rounded-xl p-4 w-48 text-center">
                        <div className="bg-gray-200 w-8 h-8 mx-auto flex items-center justify-center rounded-full">
                            <img className="w-5 h-5  filter grayscale hover:filter-none transition duration-300" src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" />
                        </div>
                        <p className="text-l mt-2 font-semibold">Adrees Rana</p>
                        <p className="text-sm text-gray-500">Retail</p>
                    </div>
                </div><div className="relative flex flex-col items-center cursor-pointer my-10 group hover:scale-105 transition-transform duration-300">
                    <img className=" rounded-2xl shadow-lg" src="https://cesltd.com/wp-content/uploads/2022/12/leader-jaisimha-pic.webp" />
                    <div className="absolute -bottom-8 bg-white shadow-md rounded-xl p-4 w-48 text-center">
                        <div className="bg-gray-200 w-8 h-8 mx-auto flex items-center justify-center rounded-full">
                            <img className="w-5 h-5  filter grayscale hover:filter-none transition duration-300" src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" />
                        </div>
                        <p className="text-l mt-2 font-semibold">Jayasimha Reddy Sunki</p>
                        <p className="text-sm text-gray-500">IT Infrastructure</p>
                    </div>
                </div><div className="relative flex flex-col items-center cursor-pointer my-10 group hover:scale-105 transition-transform duration-300">
                    <img className=" rounded-2xl shadow-lg" src="https://cesltd.com/wp-content/uploads/2025/03/leader-neena.webp" />
                    <div className="absolute -bottom-8 bg-white shadow-md rounded-xl p-4 w-48 text-center">
                        <div className="bg-gray-200 w-8 h-8 mx-auto flex items-center justify-center rounded-full">
                            <img className="w-5 h-5  filter grayscale hover:filter-none transition duration-300" src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" />
                        </div>
                        <p className="text-l mt-2 font-semibold">Neena Abraham</p>
                        <p className="text-sm text-gray-500">Human Resources</p>
                    </div>
                </div><div className="relative flex flex-col items-center cursor-pointer my-10 group hover:scale-105 transition-transform duration-300">
                    <img className=" rounded-2xl shadow-lg" src="https://cesltd.com/wp-content/uploads/2025/03/leader-julian.webp" />
                    <div className="absolute -bottom-8 bg-white shadow-md rounded-xl p-4 w-48 text-center">
                        <div className="bg-gray-200 w-8 h-8 mx-auto flex items-center justify-center rounded-full">
                            <img className="w-5 h-5  filter grayscale hover:filter-none transition duration-300" src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" />
                        </div>
                        <p className="text-l mt-2 font-semibold">Julian Acebo</p>
                        <p className="text-sm text-gray-500">Client Engagement & Solutions</p>
                    </div>
                </div>
            </div>
            <FooterTop setisBoxOpen={setisBoxOpen} />
            <Connect isOpen={isBoxOpen} onClose={() => setisBoxOpen(false)} />
            <Footer />
        </div>
    )
}