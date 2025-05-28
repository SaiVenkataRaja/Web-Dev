import "../styles/contact.css"
import "../components/footerTop"
import FooterTop from "../components/footerTop"
import Footer from "../components/footer"
export default function Contact() {
    return (

        <div className="justify-items-center my-10">
            <p className="text-sm text-gray-400"> CES / <span className="text-black">CONTACT</span></p>
            <div className="relative overflow-hidden group">
                <img className="my-10 rounded-4xl" src="../images/contactPageImage.webp" />
                <div className="absolute inset-0 flex items-center justify-center" id="textcontainer">
                    <h3 className="bg-white text-5xl mt-40 px-5 py-4 rounded-3xl ">From Anywhere to Everywhere -<br></br>  We’re Right Here.<span className="text-orange-500 border-b-2 hover:border-none cursor-pointer">Reach Out.</span></h3>
                </div>
            </div>
            <div id="grid-container" className=" grid grid-cols-2 space-x-50 my-10">
                <div className="border-b-3 border-gray-300 py-6 w-full ">
                    <h4 id="heading">US Headquaters</h4>
                    <h2 id="locs">Chicago</h2>
                    <p id="addr"> 235 Remington Blvd, Suite #H<br></br>
                        Bolingbrook, IL 60440<br></br>
                        Tel: (630) 296-8939</p>
                </div>
                <div className="border-b-3 border-gray-300 py-6 w-full">
                    <h4 id="heading">Branch Office</h4>
                    <h2 id="locs">Detroit</h2>
                    <p id="addr">100 W. Kirby St, Suite #105<br></br>
                        Detroit, MI 48202<br></br>
                        Tel: (313) 202-0941</p>
                </div>
                <div className="border-b-3 border-gray-300 py-6 w-full">
                    <h4 id="heading">Branch Office</h4>
                    <h2 id="locs">Sugar Land</h2>
                    <p id="addr"> 2245 Texas Dr.<br></br>
                       Suite 300<br></br>
                       Sugar Land, TX 77479<br></br>
                       Tel: (281) 566-2610</p>
                </div>
                <div className="border-b-3 border-gray-300 py-6 w-full">
                    <h4 id="heading">India Headquarters</h4>
                    <h2 id="locs">Hyderabad</h2>
                    <p id="addr"> 7th Floor, Tower A, Ramky Selenium<br></br>
                       Nanakramguda, Gachibowli<br></br>
                       Hyderabad - 500032<br></br>
                       Tel: (91) 40-42421122</p>
                </div>
                <div className="border-b-3 border-gray-300 py-6 w-full">
                    <h4 id="heading">ODC India</h4>
                    <h2 id="locs">Chennai</h2>
                     <p id="addr"> 1st Floor Beta Block<br></br>
                      No. 25, Rajiv Gandhi Salai<br></br>
                      Navalur, Chennai - 600130<br></br>
                       Tel: (91) 44-45114302</p>
                </div>
                <div className="border-b-3 border-gray-300 py-6 w-full">
                    <h4 id="heading">ODC India</h4>
                    <h2 id="locs">Visakhapatnam</h2>
                     <p id="addr"> Plot No : 8, IT & ITES SEZ,<br></br>
                      Rishikonda Hill No 2, Madhuravada<br></br>
                      Visakhapatnam - 530045<br></br>
                      Tel: (91) 891-667 8899</p>
                </div>
                <div className="border-b-3 border-gray-300 py-6 w-full">
                    <h4 id="heading">ODC India</h4>
                    <h2 id="locs">Chennai</h2>
                    <p id="addr"> 151, Village Road, Nungambakkam<br></br>
                       Chennai - 600034<br></br>
                       Tel: (91) 44-42326666</p>
                </div>
                <div className="border-b-3 border-gray-300 py-6 w-full">
                    <h4 id="heading">Branch Office USA</h4>
                    <h2 id="locs">Irving</h2>
                    <p id="addr"> 5605 North MacArthur Blvd, Suite #1005<br></br>
                       Irving, TX 75038<br></br>
                        Tel: (786) 763-3586</p>
                </div>
                <div className="border-b-3 border-gray-300 py-6 w-full">
                    <h4 id="heading">Canada Office</h4>
                    <h2 id="locs">Windsor</h2>
                    <p id="addr"> 6-2557 Dougall Avenue, Suite #524<br></br>
                       Windsor, ON N8X 1T5<br></br>
                        Tel: (416) 362-6500</p>
                </div>
                <div className="border-b-3 border-gray-300 py-6 w-full">
                    <h4 id="heading">Ireland Office</h4>
                    <h2 id="locs">Cork</h2>
                    <p id="addr">Unit 3D North Point House<br></br>
                       North Point Business Park<br></br>
                        New Mallow Road<br></br>
                        Cork T23 AT2P
                        </p>
                </div>
                <div className="border-b-3 border-gray-300 py-6 w-full">
                    <h4 id="heading">UAE Office</h4>
                    <h2 id="locs">Dubai</h2>
                    <p id="addr">SAB Tech Building, 1st floor<br></br>
                       318th Road, Al Quoz 3<br></br>
                        Dubai, UAE<br></br>
                        Tel: (971) 4-347 5380</p>
                </div>

                <div className="border-b-3 border-gray-300 py-6 w-full">
                    <h4 id="heading">Saudi Office</h4>
                    <h2 id="locs">Riyadh</h2>
                    <p id="addr">Al Jawhra Tower, Mezzanine Floor<br></br>
                       Al-Olaya St, P.O.Box 67929<br></br>
                        Riyadh 11517<br></br>
                        Tel: (966) 11-2018440</p>
                </div><div className="border-b-3 border-gray-300 py-6 w-full">
                    <h4 id="heading">Mexico Office</h4>
                    <h2 id="locs">Monterrey</h2>
                    <p id="addr"> Avenida Constitución 2050, Int. 34-121<br></br>
                       Colonia Obispado Monterrey, Nuevo Leon<br></br>
                        64060, Mexico</p>
                </div>
                <div className="border-b-3 border-gray-300 py-6 w-full">
                    <h4 id="heading">Mexico Office</h4>
                    <h2 id="locs">Guadalajara</h2>
                    <p id="addr"> AMADO NERVO, 785, B,<br></br>
                       LADRON DE GUEVARA, Guadalajara<br></br>
                        44600, Jalisco</p>
                </div>
                <div className="border-b-3 border-gray-300 py-6 w-full">
                    <h4 id="heading">Dallas office</h4>
                    <h2 id="locs">Dallas</h2>
                    <p id="addr"> 2714 W Kingsley Road Suite C1<br></br>
                       Garland<br></br>
                       TX 75041</p>
                </div>
            </div>
            <FooterTop />
            <Footer />
        </div>
    )
}