'use client'

import React, { useState } from 'react';

import Link from "next/link";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardContent, Card, CardTitle } from "@/components/ui/card";
import { BarChart } from "@/components/ui/BarChart";
import { FrameIcon } from "@/components/ui/FrameIcon";
import { PieChart } from "@/components/ui/PieChart";
import Multiselect from 'multiselect-react-dropdown';
import { ResponsiveBar } from '@nivo/bar'



export default function Dashboard() {

  const [selectedOption, setSelectedOption] = useState<any[]>([]);


  function onSelect(selectedList: any, selectedItem: any) {
    setSelectedOption([...selectedOption, selectedItem.name]);

    console.log(selectedOption);
  }

  function onRemove(selectedList: any, removedItem: any) {
    setSelectedOption(selectedOption.filter(item => item !== removedItem.name));

    console.log(selectedOption);
  }


  var places = [
    { name: 'Alun-alun Kota Malang', id: 1 },
    { name: 'Malang Night Paradise', id: 2 },
    { name: 'Hawai Waterpark', id: 3 },
    { name: 'Malang Smart Arena', id: 4 },
    { name: 'Kampung Warna - Warni', id: 5 },
    { name: 'Kayutangan Heritage', id: 6 },
    { name: 'Museum Brawijaya', id: 7 },
    { name: 'Pecinan Malang', id: 8 },
    { name: 'Taman Rekreasi Sengkaling', id: 9 },
    { name: 'Pos Ketan Legenda', id: 10 },
    { name: 'Jatim Park 1', id: 11 },
    { name: 'Jatim Park 2', id: 12 },
    { name: 'Jatim Park 3', id: 13 },
    { name: 'Selecta Park', id: 14 },
    { name: 'Onsen Hot Spring', id: 15 },
    { name: 'Kunang Kunang Park', id: 16 },
    { name: 'Pahlawan Monument', id: 17 }
  ];

  var averageTravelerAge = {
    info: { xAxis: "Place", yAxis: "Average age" },
    data: [
      {
        name: "Alun-alun Kota Malang",
        data: 29,
        place: "Alun-alun Kota Malang"
      },
      {
        name: "Malang Night Paradise",
        data: 25,
        place: "Malang Night Paradise"
      },
      {
        name: "Hawai Waterpark",
        data: 24,
        place: "Hawai Waterpark"
      },
      {
        name: "Malang Smart Arena",
        data: 28,
        place: "Malang Smart Arena"
      },
      {
        name: "Kampung Warna - Warni",
        data: 31,
        place: "Kampung Warna - Warni"
      },
      {
        name: "Kayutangan Heritage",
        data: 30,
        place: "Kayutangan Heritage"
      },
      {
        name: "Museum Brawijaya",
        data: 35,
        place: "Museum Brawijaya"
      },
      {
        name: "Pecinan Malang",
        data: 36,
        place: "Pecinan Malang"
      },
      {
        name: "Taman Rekreasi Sengkaling",
        data: 27,
        place: "Taman Rekreasi Sengkaling"
      },
      {
        name: "Pos Ketan Legenda",
        data: 26,
        place: "Pos Ketan Legenda"
      },
      {
        name: "Jatim Park 1",
        data: 22,
        place: "Jatim Park 1"
      },
      {
        name: "Jatim Park 2",
        data: 23,
        place: "Jatim Park 2"
      },
      {
        name: "Jatim Park 3",
        data: 21,
        place: "Jatim Park 3"
      },
      {
        name: "Selecta Park",
        data: 34,
        place: "Selecta Park"
      },
      {
        name: "Onsen Hot Spring",
        data: 29,
        place: "Onsen Hot Spring"
      },
      {
        name: "Kunang Kunang Park",
        data: 33,
        place: "Kunang Kunang Park"
      },
      {
        name: "Pahlawan Monument",
        data: 42,
        place: "Pahlawan Monument"
      }
    ]
  }



  var travelerInterests = [
    {
      "place": "Alun-alun Kota Malang",
      "Hiking": 0.0,
      "Relax": 16.0,
      "Picnic": 14.0,
      "Sports": 4.0,
      "Attractions": 14.0,
      "Water": 0.0,
      "Action": 6.0,
      "Coffee": 12.0,
      "Shopping": 10.0,
      "Playground": 8.0,
      "Culinary": 16.0
    },
    {
      "place": "Malang Night Paradise",
      "Hiking": 0.0,
      "Relax": 13.21,
      "Picnic": 9.43,
      "Sports": 3.77,
      "Attractions": 16.98,
      "Water": 0.0,
      "Action": 15.09,
      "Coffee": 7.55,
      "Shopping": 5.66,
      "Playground": 15.09,
      "Culinary": 13.21
    },
    {
      "place": "Hawai Waterpark",
      "Hiking": 0.0,
      "Relax": 13.56,
      "Picnic": 10.17,
      "Sports": 3.39,
      "Attractions": 13.56,
      "Water": 16.95,
      "Action": 15.25,
      "Coffee": 3.39,
      "Shopping": 1.69,
      "Playground": 15.25,
      "Culinary": 6.78
    },
    {
      "place": "Malang Smart Arena",
      "Hiking": 0.0,
      "Relax": 10.42,
      "Picnic": 6.25,
      "Sports": 18.75,
      "Attractions": 12.5,
      "Water": 0.0,
      "Action": 14.58,
      "Coffee": 8.33,
      "Shopping": 4.17,
      "Playground": 14.58,
      "Culinary": 10.42
    },
    {
      "place": "Kampung Warna - Warni",
      "Hiking": 0.0,
      "Relax": 14.58,
      "Picnic": 12.5,
      "Sports": 2.08,
      "Attractions": 16.67,
      "Water": 0.0,
      "Action": 8.33,
      "Coffee": 12.5,
      "Shopping": 12.5,
      "Playground": 6.25,
      "Culinary": 14.58
    },
    {
      "place": "Kayutangan Heritage",
      "Hiking": 0.0,
      "Relax": 14.58,
      "Picnic": 10.42,
      "Sports": 2.08,
      "Attractions": 16.67,
      "Water": 0.0,
      "Action": 6.25,
      "Coffee": 14.58,
      "Shopping": 14.58,
      "Playground": 4.17,
      "Culinary": 16.67
    },
    {
      "place": "Museum Brawijaya",
      "Hiking": 0.0,
      "Relax": 19.51,
      "Picnic": 9.76,
      "Sports": 2.44,
      "Attractions": 21.95,
      "Water": 0.0,
      "Action": 4.88,
      "Coffee": 12.2,
      "Shopping": 12.2,
      "Playground": 2.44,
      "Culinary": 14.63
    },
    {
      "place": "Pecinan Malang",
      "Hiking": 0.0,
      "Relax": 13.46,
      "Picnic": 9.62,
      "Sports": 1.92,
      "Attractions": 15.38,
      "Water": 0.0,
      "Action": 5.77,
      "Coffee": 15.38,
      "Shopping": 17.31,
      "Playground": 3.85,
      "Culinary": 17.31
    },
    {
      "place": "Taman Rekreasi Sengkaling",
      "Hiking": 3.33,
      "Relax": 13.33,
      "Picnic": 11.67,
      "Sports": 6.67,
      "Attractions": 13.33,
      "Water": 10.0,
      "Action": 8.33,
      "Coffee": 5.0,
      "Shopping": 5.0,
      "Playground": 13.33,
      "Culinary": 10.0
    },
    {
      "place": "Pos Ketan Legenda",
      "Hiking": 0.0,
      "Relax": 19.05,
      "Picnic": 9.52,
      "Sports": 2.38,
      "Attractions": 14.29,
      "Water": 0.0,
      "Action": 4.76,
      "Coffee": 16.67,
      "Shopping": 9.52,
      "Playground": 2.38,
      "Culinary": 21.43
    },
    {
      "place": "Jatim Park 1",
      "Hiking": 0.0,
      "Relax": 12.9,
      "Picnic": 9.68,
      "Sports": 4.84,
      "Attractions": 16.13,
      "Water": 11.29,
      "Action": 14.52,
      "Coffee": 3.23,
      "Shopping": 3.23,
      "Playground": 16.13,
      "Culinary": 8.06
    },
    {
      "place": "Jatim Park 2",
      "Hiking": 0.0,
      "Relax": 12.9,
      "Picnic": 9.68,
      "Sports": 4.84,
      "Attractions": 16.13,
      "Water": 11.29,
      "Action": 14.52,
      "Coffee": 3.23,
      "Shopping": 3.23,
      "Playground": 16.13,
      "Culinary": 8.06
    },
    {
      "place": "Jatim Park 3",
      "Hiking": 0.0,
      "Relax": 12.9,
      "Picnic": 9.68,
      "Sports": 4.84,
      "Attractions": 16.13,
      "Water": 11.29,
      "Action": 14.52,
      "Coffee": 3.23,
      "Shopping": 3.23,
      "Playground": 16.13,
      "Culinary": 8.06
    },
    {
      "place": "Selecta Park",
      "Hiking": 7.14,
      "Relax": 16.07,
      "Picnic": 14.29,
      "Sports": 3.57,
      "Attractions": 14.29,
      "Water": 0.0,
      "Action": 7.14,
      "Coffee": 8.93,
      "Shopping": 5.36,
      "Playground": 12.5,
      "Culinary": 10.71
    },
    {
      "place": "Onsen Hot Spring",
      "Hiking": 0.0,
      "Relax": 20.83,
      "Picnic": 10.42,
      "Sports": 2.08,
      "Attractions": 12.5,
      "Water": 18.75,
      "Action": 6.25,
      "Coffee": 8.33,
      "Shopping": 2.08,
      "Playground": 10.42,
      "Culinary": 8.33
    },
    {
      "place": "Kunang Kunang Park",
      "Hiking": 1.85,
      "Relax": 14.81,
      "Picnic": 12.96,
      "Sports": 3.7,
      "Attractions": 14.81,
      "Water": 0.0,
      "Action": 9.26,
      "Coffee": 9.26,
      "Shopping": 7.41,
      "Playground": 14.81,
      "Culinary": 11.11
    },
    {
      "place": "Pahlawan Monument",
      "Hiking": 0.0,
      "Relax": 17.07,
      "Picnic": 9.76,
      "Sports": 2.44,
      "Attractions": 19.51,
      "Water": 0.0,
      "Action": 4.88,
      "Coffee": 14.63,
      "Shopping": 9.76,
      "Playground": 4.88,
      "Culinary": 17.07
    }
  ]

  function filterData(data: Array<any>) {
    return selectedOption.length > 0
      ? data.filter(item => selectedOption.includes(item.place))
      : data;
  }



  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4" href="#">
          <FrameIcon className="w-6 h-6" />
          <span className="sr-only">Density Dashboard</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Home
          </Link>
          <Link className="font-bold" href="#">
            Dashboard
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Reports
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Settings
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button className="rounded-full ml-auto" size="icon" variant="ghost">
            <Avatar className="h-9 w-9">
              <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
              <span className="sr-only">Toggle user menu</span>
            </Avatar>
          </Button>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="max-w-6xl w-full mx-auto grid gap-2">
          <h1 className="font-semibold text-3xl">User Density Dashboard</h1>

          {/* <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedOption} onChange={handleSelectChange}>
            <option value="all" selected>All countries</option>
            <option value="one">one</option>
            <option value="two">two</option>
          </select> */}

          <Multiselect
            options={places} // Options to display in the dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />

          <div className="flex">
            <Card className="p-0 w-full h-full overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Visitors interests regarding to the visited place</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full aspect-[16/9]">
                  <ResponsiveBar
                    data={filterData(travelerInterests)}
                    keys={[
                      "Hiking",
                      "Relax",
                      "Picnic",
                      "Sports",
                      "Attractions",
                      "Water",
                      "Action",
                      "Coffee",
                      "Shopping",
                      "Playground",
                      "Culinary",
                    ]}
                    indexBy="place"
                    margin={{ top: 50, right: 130, bottom: 120, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'nivo' }}
                    defs={[
                      {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                      },
                      {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                      }
                    ]}
                    fill={[
                      {
                        match: {
                          id: 'fries'
                        },
                        id: 'dots'
                      },
                      {
                        match: {
                          id: 'sandwich'
                        },
                        id: 'lines'
                      }
                    ]}
                    borderColor={{
                      from: 'color',
                      modifiers: [
                        [
                          'darker',
                          1.6
                        ]
                      ]
                    }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 45,
                      legend: 'Place',
                      legendPosition: 'middle',
                      legendOffset: 110,
                      truncateTickAt: 0
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Visitor interests (in %)',
                      legendPosition: 'middle',
                      legendOffset: -40,
                      truncateTickAt: 0
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{
                      from: 'color',
                      modifiers: [
                        [
                          'darker',
                          1.6
                        ]
                      ]
                    }}
                    legends={[
                      {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                          {
                            on: 'hover',
                            style: {
                              itemOpacity: 1
                            }
                          }
                        ]
                      }
                    ]}

                    barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                  />
                </div>
              </CardContent>
            </Card>

          </div>


          <div className="flex">
            <Card className="p-0 w-full h-full overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Average visitor age</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <BarChart
                  className="w-full aspect-[16/9]"
                  xAxis={averageTravelerAge.info.xAxis}
                  yAxis={averageTravelerAge.info.yAxis}
                  data={filterData(averageTravelerAge.data)}
                />
              </CardContent>
            </Card>

          </div>

          <div className="flex gap-4">
            <Card className="p-0 w-1/2 overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Map Visualization</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <BarChart className="w-full aspect-[16/9]" data={filterData(travelerInterests)} />
              </CardContent>
            </Card>
            <Card className="p-0 w-1/2 overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Demographic Information</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart className="w-full aspect-[16/9]" />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="grid gap-6 max-w-6xl w-full mx-auto">
          <Card className="p-0 overflow-hidden">
            <CardHeader>
              <CardDescription className="text-xl font-medium">Average Density</CardDescription>
              <CardTitle className="text-2xl">158 people</CardTitle>
            </CardHeader>
          </Card>
          <Card className="p-0 overflow-hidden">
            <CardHeader>
              <CardDescription className="text-xl font-medium">Peak Density</CardDescription>
              <CardTitle className="text-2xl">312 people</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
}