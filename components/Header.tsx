import Image from "next/image";
import Link from "next/link";


function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div className="flex items-center justify-between space-x-2">
                <Link href="/">
                    <Image
                        className="rounded-full"
                        src="https://i.ibb.co/xhGRKfn/me4portfolio.jpg"
                        width={50}
                        height={64}
                        alt="logo"
                    />
                </Link>
                <h1>Adam Smith Engineering</h1>
            </div>
            <div>
                <Link
                    href="https://www.themanape.com/"
                    className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#83c5be] flex items-center rounded-full text-center"
                >
                    Check out my ongoing artistic collaboration with Illustrator Adam Lott
                </Link>
            </div>
        </header>
    )
}

export default Header
