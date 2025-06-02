'use client'
import Footer from "@/app/components/footer";
import FooterTop from "@/app/components/footerTop";
import { useState } from "react";
import Link from "next/link";
import Connect from "@/app/components/connect";
export default function Culture() {
    const [isBoxOpen, setisBoxOpen] = useState(false);
    return (
        <div className="mx-16">
            <div className="flex gap-28">
                <div>
                    <h1 className=" text-sm  py-4 mt-10"><Link className="text-gray-500 hover:text-orange-500 border-b-0 hover:border-b hover:border-orange-500" href='/'>CES </Link> / CULTURE </h1>
                    <h1 className="text-5xl py-5">We keep looking for reasons to <br></br>rejoice small moments by bringing<br></br> in fun and excitement</h1>

                    <button className="cursor-pointer border-2 border-orange-500 my-10 px-6 py-4 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white font-bold transition-colors duration-300">LEARN MORE</button>
                </div>
                <div>
                    <img src="https://cesltd.com/wp-content/uploads/2025/02/hero-culture.webp" className="my-12" width="550px" />
                </div>
            </div>
            <div className="flex gap-28 my-20">
                <div className="w-1/2">
                    <h1 className="text-5xl"><p className="">Expand your prospect.<br></br>Come and work with the<br></br> finest. Reinvent yourself by <br></br>enhancing your skills.</p>
                    </h1>
                </div>
                <div className="w-1/2">
                    <h1 className="text-xl text-gray-500  "><p className="pb-4">At CES, the secret to distinction is the fun that we all have together from<br></br> time to time. We keep looking for reasons to rejoice small moments by<br></br> bringing in fun and excitement. These small milestones are worth<br></br> celebrating as they reflect how far we have come and it also gives you <br></br>fulfilment to enjoy the moment with your fellow associates. We celebrate<br></br> those special moments, as they will always be cherished.</p>
                        <p className="pb-4"> All festivals and birthdays are celebrated with great vigor and enthusiasm.<br></br> We organize trips to getaways and various events related to sports, food<br></br> and more. No matter what your choice is but there is something or the<br></br> other for everyone in the organisation.</p>
                        <p className="pb-4">The company has innovations at every turn, values that are important to <br></br>the business and values that matter to the individuals. Learn more about <br></br>life in a company that aims to build a smarter place.</p>
                        <p className="pb-4">The company’s technology independence, global talent and extensive<br></br>partner alliance combine to deliver powerful next-generation IT services<br></br> and solutions.</p></h1>
                </div>
            </div>
            <FooterTop setisBoxOpen={setisBoxOpen} />
            <Connect isOpen={isBoxOpen} onClose={() => setisBoxOpen(false)} />
            <Footer />
        </div>
    )
}