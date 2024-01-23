type GetRewardButtonProps = {
    onClick: () => void; // Add an onClick prop
};

export default function GetRewardButton({ onClick }: GetRewardButtonProps) {
    return (
        <div className="mb-10 ms-4 w-full">
            <div className="absolute bg-gray-200 mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <button
                type="button"
                className="w-11/12 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={onClick}
            >
                ✨ Get discount on next stop ✨
            </button>
        </div>
    );
}
