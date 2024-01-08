"use client"

import { useState } from "react";
import image from "../../../../public/discount-qr.png";
import Image from 'next/image'

export default function Discount() {

    const [blur, setBlur] = useState(true);

    const removeBlur = () => {
        setBlur(!blur);
    };
    //<div className="absolute left-0 top-0 w-full h-full"></div>

    return (
        <div>
            <h3 className="mt-10 mb-10">Your Discount</h3>
            <p>You got a discount for <u>Malang Night Paradise</u></p>
            <div className="mt-5 py-5">
                <div className={`transition-blur duration-200 ${blur ? "blur-md" : ""}`}>
                    <Image src={image} alt="Picture of the author" className="" />
                    <p className="w-full flex justify-center">Code: MNP-81273981732</p>
                </div>
            </div>

            <div>
                <button
                    type="button"
                    className="w-full mt-14 relative text-white bg-green-400 hover-bg-green-500 focus:outline-none focus:ring-4 focus-ring-green-300 font-medium rounded-full text-sm px-5 py-3.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
                    onClick={removeBlur}
                >
                    Redeem coupon
                </button>
            </div>
        </div>
    )
}