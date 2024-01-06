import Image from "next/image";
import { HiMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {

    return(
        <div className="pt-5 px-6 lg:px-14 flex ">
            <Image src="/icon/lutos-logo.png" sizes="100vw" height={100} width={100} alt="logo" objectFit="cover"  />
            <div className=" flex justify-end w-full lg:hidden">
                <HiMenuAlt3 size={40} />
            </div>
            <ul className="lg:flex mt-5 justify-between w-2/3 ml-auto hidden">
                <li className="cursor-pointer">Menu</li>
                <li className="cursor-pointer">Contact Us</li>
                <li className="cursor-pointer">Reservation</li>
                <li className="cursor-pointer">Order online</li>
                <li className="cursor-pointer">Shop</li>
                <li className="cursor-pointer">Career</li>
            </ul>
        </div>
    )
}

export default Navbar;