"use client";

import Image from "next/image";
import logo from "../app/assets/2.png";
import { RainbowButton } from "./ui/rainbow-button";
import { signIn } from "next-auth/react";

const Navbar = () => {

    return (
        <>
            <nav className="relative items-center align-middle justify-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
                <div className="flex justify-between w-full">
                    <a href="javascript:void(0)">
                        <Image src={logo} width={120} height={50} alt="logo" />
                    </a>

                    <div className="ml-auto">
                        <button onClick={() => signIn("github")}>
                            <RainbowButton className="text-white">
                                Get started
                            </RainbowButton>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
