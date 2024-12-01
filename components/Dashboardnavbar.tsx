"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../app/assets/2.png";
import { RainbowButton } from "./ui/rainbow-button";
import { signOut, useSession } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";

const DashboardNavbar = () => {
    const { data: session } = useSession();
    const [isMobile, setIsMobile] = useState(false);

    const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 600);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    return (
        <>
            <nav className="relative items-center align-middle justify-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
                <div className="flex justify-between w-full">
                    <a href="javascript:void(0)">
                        <Image src={logo} width={120} height={50} alt="logo" />
                    </a>

                    <div className="ml-auto gap-x-4 flex items-center space-x-2">
                        {session && session.user ? (
                            <h1 className="text-white px-4 py-3 rounded-full border">
                                {isMobile ? session.user.name.charAt(0) : session.user.name}
                            </h1>
                        ) : (
                            <h1 className="text-white">Guest</h1>
                        )}

                        <button onClick={() => signOut()}>
                            <RainbowButton className="text-white flex items-center">
                                {isMobile ? <FaSignOutAlt /> : 'Signout'}
                            </RainbowButton>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default DashboardNavbar;
