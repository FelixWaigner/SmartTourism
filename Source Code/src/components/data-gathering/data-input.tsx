type DataInputProps = {
    onClose: () => void; 
};

export default function DataInput(props: DataInputProps) {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-end">
            <div className="modal-content bg-white w-full h-[93vh] p-5 rounded-t-lg">
                <h2 className="text-xl font-bold mb-4">Data Input</h2>
                <input type="text" placeholder="Enter some data..." className="border p-2 w-full mb-4"/>
                <button onClick={props.onClose} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Close</button>
            </div>
        </div>
    );
}


