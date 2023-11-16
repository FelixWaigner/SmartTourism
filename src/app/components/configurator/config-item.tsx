'use client';

import React from 'react';

//TypeScript interface for the props that this component expects
interface ConfigItemProps {
  id: number;              
  title: string;       
  selected: boolean;
  toggleSelection: () => void;  // Callback function to toggle the selection of the item
}

export default function ConfigItem(props: ConfigItemProps) {
  return (
    <li className="inline">
      <input
        type="checkbox"
        id={props.id.toString()}  // Set the 'id' attribute for the input
        value={props.title.toLowerCase()}  // Set the 'value' attribute for the input
        className="hidden peer" 
        checked={props.selected}  // Set the checked state of the checkbox
        onChange={props.toggleSelection}  // Call the toggleSelection function when the checkbox value changes
      />
      <label
        htmlFor={props.id.toString()}  // Associate the label with the input using 'for' and 'id' attributes
        className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-gray-200 border-0 border-gray-200 rounded-xl cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-400 peer-checked:bg-green-300 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover-bg-gray-200 dark-text-gray-400 dark-bg-gray-800 dark:hover-bg-gray-700 ${props.selected ? 'peer-checked' : ''}`}
      >
        <div className="block">
          <svg
            className="mb-2 w-10 h-10 text-sky-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M20.5 18.5H3L8.5 9.5L12 13.5L15 6L20.5 18.5Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          <div className="w-full text-lg font-semibold">{props.title}</div>
          <div className="w-full text-sm"></div>
        </div>
      </label>
    </li>
  );
}
