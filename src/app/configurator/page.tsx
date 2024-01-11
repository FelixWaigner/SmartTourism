"use client";

import React, { useState } from 'react';
import ConfigItem from '@/components/configurator/config-item';
import { useRouter } from 'next/navigation'

import hiking from "@/activity-svgs/hiking.svg";
import relax from "@/activity-svgs/relax.svg";
import picnic from "@/activity-svgs/picnic.svg";
import sports from "@/activity-svgs/sports.svg";
import attractions from "@/activity-svgs/attractions.svg";
import water from "@/activity-svgs/water.svg";
import playground from "@/activity-svgs/playground.svg";
import coffee from "@/activity-svgs/coffee.svg";
import shopping from "@/activity-svgs/shopping.svg";
import culinary from "@/activity-svgs/culinary.svg";
import action from "@/activity-svgs/action.svg";



// Define the type for the component's state, which includes an array of selected items
type ConfiguratorState = {
  selectedItems: string[];
};

export default function Configurator() {

  const router = useRouter()

  const [count, setCount] = useState(7);

  const increment = () => {
    if (count < 99) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  //Activities
  const activities = [
    {
      "title": "Hiking",
      "picture": hiking
    },
    {
      "title": "Relax",
      "picture": relax
    },
    {
      "title": "Picnic",
      "picture": picnic
    },
    {
      "title": "Sports",
      "picture": sports
    },
    {
      "title": "Attractions",
      "picture": attractions
    },
    {
      "title": "Water",
      "picture": water
    },
    {
      "title": "Action",
      "picture": action
    },
    {
      "title": "Coffee",
      "picture": coffee
    },
    {
      "title": "Shopping",
      "picture": shopping
    },
    {
      "title": "Playground",
      "picture": playground
    },
    {
      "title": "Culinary",
      "picture": culinary
    },
  ];

  // Initialize the state
  const [state, setState] = useState<ConfiguratorState>({
    selectedItems: [],  // Initialize selectedItems as an empty array
  });

  // Function to toggle the selection of an activity item
  const toggleItemSelection = (item: string) => {
    setState((prevState) => ({
      selectedItems: prevState.selectedItems.includes(item)
        ? prevState.selectedItems.filter((selectedItem) => selectedItem !== item)
        : [...prevState.selectedItems, item],
    }));
  };

  // Function to handle the "Next" button click
  const handleNextButtonClick = () => {
    console.log("Selected Items:", state.selectedItems);
    console.log("days spent: ", count)
    router.push('/tourist-dashboard')
    //Send data to recommender system API here
  };

  return (
    <div className='p-4'>
      <h3 className='mt-10 font-bold'>Welcome to Malang</h3>
      <p className="text-gray-500 dark:text-gray-400 mt-3">Tell us about your interests and desired duration of stay so we can create a personalized trip for you.</p>

      <div className="mt-12 mb-24">
        <form className="flex flex-col align-middle items-center ">
          <div className="relative flex items-center w-full">
            <button type="button" onClick={decrement} className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg px-6 py-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
              </svg>
            </button>
            <input type="text" id="bedrooms-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-green-500 focus:border-green-400 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={count} required />
            <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
              <span> Days</span>
            </div>
            <button type="button" onClick={increment} className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg px-6 py-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
              <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </form>

        <ul className="mt-8 grid grid-cols-2 gap-2">
          {activities.map((activity, index) => (
            <ConfigItem
              key={index}
              id={index}
              title={activity.title}
              picture={activity.picture}
              selected={state.selectedItems.includes(activity.title)}
              toggleSelection={() => toggleItemSelection(activity.title)}
            />
          ))}
        </ul>

        <div className="fixed bottom-16 left-0 h-9 w-full bg-gradient-to-t from-white via-white"></div>
        <div className='fixed bottom-0 left-0 pb-4 w-full px-3 bg-white'>
          <button
            type="button"
            onClick={handleNextButtonClick}
            className="w-full relative text-white bg-green-400 hover-bg-green-500 focus:outline-none focus:ring-4 focus-ring-green-300 font-medium rounded-full text-sm px-5 py-3.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
