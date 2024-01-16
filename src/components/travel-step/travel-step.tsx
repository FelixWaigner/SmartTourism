interface TravelStepProps {
    date: string;
    location: string;
    labels: string[];
    activities: string[];
    description?: string;
}

import pic from "@/assets/alun-alun.png";

import { useState } from "react";
import Image from 'next/image'


export default function TravelStep(props: TravelStepProps) {

    const [showMoreInfo, setShowMoreInfo] = useState(false);


    return (
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{props.date}</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{props.location}</h3>

            <ul className="flex mt-2">
                {props.labels.map((label, index) => (
                    <li key={index}>
                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{label}</span>
                    </li>
                ))}

            </ul>
            <p className="mb-4 mt-3 text-base font-normal text-gray-500 dark:text-gray-400">{props.description}</p>
            <button
                onClick={() => setShowMoreInfo(!showMoreInfo)}
                className="mt-2 text-blue-500 flex items-center w-full "
            >
                {showMoreInfo ? 'Less' : 'More'}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-5 h-5 ml-2 mt-[0.5] transform ${showMoreInfo ? 'rotate-180' : ''}`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
            {showMoreInfo && (
                <div className="mt-2">
                    <Image src={pic} alt="Alun-Alun" className="" />
                    <div className="flex w-full gap-3 mt-3">
                        <button type="button" className="w-1/2 text-green-700 hover:text-white border-2 border-green-400 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Google maps</button>
                        <button type="button" className="w-1/2 text-red-700 hover:text-white border-2 border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Change place</button>
                    </div>
                </div>
            )}
        </li>
    )
}