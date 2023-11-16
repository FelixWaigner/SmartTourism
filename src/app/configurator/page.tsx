"use client";

import React, { useState } from 'react';
import ConfigItem from '../components/configurator/config-item';


// Define the type for the component's state, which includes an array of selected items
type ConfiguratorState = {
  selectedItems: string[];
};

export default function Configurator() {
  
  //Activities
  const activities = ["Hiking", "Relax", "Picnic", "Sports", "Attractions", "Games", "Water", "Playground", "Coffee", "Shopping", "Culinary"];

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

    //Send data to recommender system API here
  };

  return (
    <div>
      <h3 className='mt-10 font-bold'>Welcome to Malang</h3>
      <p className="text-gray-500 dark:text-gray-400 mt-3">Tell us more about your interests so we can create a personalized trip for you.</p>

      <div className="mt-12 mb-24">
        <ul className="grid grid-cols-2 gap-2">
          {activities.map((activity, index) => (
            <ConfigItem
              key={index}
              id={index}
              title={activity}
              selected={state.selectedItems.includes(activity)}
              toggleSelection={() => toggleItemSelection(activity)}
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
