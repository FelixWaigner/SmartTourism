"use client"

import { useState } from "react";
import image from "@/assets/discount-qr.png";
import Image from 'next/image'

export default function Discount() {

    const [blur, setBlur] = useState(true);

    const removeBlur = () => {
        setBlur(!blur);
    };

    return (
        <div>
            <h3 className="mt-10 mb-8">Your Discount</h3>


            <div className="max-w-md w-full h-full mx-auto z-10 bg-[#f8fafb] rounded-3xl">
                <div className="flex flex-col">
                    <div className="bg-white relative border-gray-300 border-2 rounded-3xl p-4 ">
                        <div className="flex-none sm:flex">
                            <div className=" relative h-32 w-32   sm:mb-0 mb-3 hidden">
                                <a href="#"
                                    className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        className="h-4 w-4">
                                        <path
                                            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div className="flex-auto justify-evenly">
                                <div className="flex flex-col items-center">
                                    <p>You got a discount for:</p>
                                    <p className="mt-4 mb-4 text-xl font-semibold"><u>Malang Night Paradise</u></p>
                                </div>
                                <div className="border-dashed border-b-2 my-5"></div>
                                <div className=" py-5">
                                    <div className={`transition-blur duration-200 ${blur ? "blur-md" : ""}`}>
                                        <Image src={image} alt="Picture of the author" className="" />
                                        <p className="w-full flex justify-center">Code: MNP-81273981732</p>
                                    </div>
                                </div>
                                <div className="border-dashed border-b-2 my-5 pt-5">
                                    <div dir="rtl">
                                        <div className="absolute rounded-s-full w-5 h-5 border-gray-300 bg-[#f8fafb] border-t-2 border-r-2 border-b-2  -mt-2 -left-[2px]"></div>
                                    </div>
                                    <div dir="ltr">
                                        <div className="absolute rounded-s-full w-5 h-5 border-gray-300 border-t-2 border-l-2 border-b-2 bg-[#f8fafb]  -mt-2 -right-[2px]"></div>
                                    </div>

                                </div>

                                <div className="text-center ">
                                    <p className="font-semibold py-2 text-green-500" onClick={removeBlur}><u>Redeem code</u></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-md w-full h-full mx-auto z-10 bg-[#f8fafb] rounded-3xl mb-20">
                <div className="flex flex-col">
                    <div className="bg-white relative border-gray-300 border-2 rounded-3xl p-4 mt-8">
                        <div className="flex-none sm:flex">
                            <div className=" relative h-32 w-32   sm:mb-0 mb-3 hidden">
                                <a href="#"
                                    className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        className="h-4 w-4">
                                        <path
                                            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div className="flex-auto justify-evenly">
                                <div className="flex flex-col items-center">
                                    <p>You got a discount for:</p>
                                    <p className="mt-4 mb-4 text-xl font-semibold"><u>20 minute taxi ride</u></p>
                                </div>
                                <div className="border-dashed border-b-2 my-5"></div>
                                <div className=" py-5">
                                    <div className={`transition-blur duration-200 ${blur ? "blur-md" : ""}`}>
                                        <Image src={image} alt="Picture of the author" className="" />
                                        <p className="w-full flex justify-center">Code: TXI-73273947191</p>
                                    </div>
                                </div>
                                <div className="border-dashed border-b-2 my-5 pt-5">
                                    <div dir="rtl">
                                        <div className="absolute rounded-s-full w-5 h-5 border-gray-300 bg-[#f8fafb] border-t-2 border-r-2 border-b-2  -mt-2 -left-[2px]"></div>
                                    </div>
                                    <div dir="ltr">
                                        <div className="absolute rounded-s-full w-5 h-5 border-gray-300 border-t-2 border-l-2 border-b-2 bg-[#f8fafb]  -mt-2 -right-[2px]"></div>
                                    </div>

                                </div>

                                <div className="text-center ">
                                    <p className="font-semibold py-2 text-green-500" onClick={removeBlur}><u>Redeem code</u></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}