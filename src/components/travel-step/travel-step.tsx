interface TravelStepProps {
    date: string;
    location: string;
    labels: string[];
    activities: string[];
    description?: string;
}

export default function TravelStep(props: TravelStepProps) {
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
    </li>
    )
}