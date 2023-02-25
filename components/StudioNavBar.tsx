import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";


function StudioNavBar(props: any) {
  return (
    <div>
        <div className="flex items-center p-5">
            <ArrowUturnLeftIcon className="h-6 w-6 text-[#f7ab0a] mr-2"/>
            <Link href="/" className="text-[#f7ab0a] flex items-center">Go To Website</Link>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavBar
