"use client"

import { useState } from "react"
import Image from "next/image"
import logo from "../app/assets/2.png"
import { RainbowButton } from "./ui/rainbow-button"


export default () => {

    const [state, setState] = useState(false)

    return (
        <>
            <nav className="relative items-center align-middle justify-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
                <div className="flex justify-between w-full"> {/* Use w-full to take full width */}
                    <a href="javascript:void(0)">
                        <Image src={logo} width={120} height={50} alt="logo" />
                    </a>

                    <div className="ml-auto"> {/* Add ml-auto to push the button to the right */}
                        <RainbowButton className="text-white">Get started</RainbowButton>
                    </div>
                </div>
            </nav>

        </>
    )
}