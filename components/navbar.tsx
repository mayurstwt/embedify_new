"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../app/assets/2.png";
import { RainbowButton } from "./ui/rainbow-button";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Renamed for clarity

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="relative items-center align-middle justify-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
                <div className="flex justify-between w-full"> {/* Use w-full to take full width */}
                    <a href="javascript:void(0)">
                        <Image src={logo} width={120} height={50} alt="logo" />
                    </a>

                    <div className="ml-auto"> {/* Add ml-auto to push the button to the right */}
                        <RainbowButton className="text-white" onClick={toggleMenu}>
                            {isMenuOpen ? "Close Menu" : "Get started"}
                        </RainbowButton>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="absolute bg-white shadow-lg mt-2">
                        {/* Menu items can go here */}
                        <ul>
                            <li><a href="#link1">Link 1</a></li>
                            <li><a href="#link2">Link 2</a></li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
