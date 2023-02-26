

function Banner() {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
            <div>
                <h1 className="text-7xl">Today is the day</h1>
                <h2 className="mt-5 md:mt-0">
                    Welcome to{" "}
                    <span className="underline decoration-4 decoration-[#02c39a]">
                        the inside of my brain
                    </span>{" "}
                </h2>
            </div>
            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                A day in the life of a SWE trying to break into the game.
            </p>
        </div>
    ); 
}

export default Banner
