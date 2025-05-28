export default function FooterTop() {
        return (
        <div className="w-full flex justify-center">
                <div>
                    <img src="https://cesltd.com/wp-content/uploads/2025/02/shake-hand.webp" width="600px" />
                </div>
                <div className=" flex flex-col items-center justify-center  bg-gradient-to-br from-sky-300  to-orange-300  rounded-xl ml-8">
                    <h1 className="text-5xl px-16 my-5">Let’s Make Things Happen</h1>
                    <p className="text-xl text-center mb-4 ">Every success story starts with the right conversation <br></br>
                        Ready to write yours?</p>
                    <button  className="cursor-pointer border-2 border-gray-400 px-5 py-2 rounded-3xl font-bold hover:bg-black hover:text-white transition-colors duration-300">Connect Now!</button>
                </div>
            </div>
    )

}