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
import { ResponsiveTreeMap } from '@nivo/treemap'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveChoropleth } from '@nivo/geo'
import { ResponsiveLine } from '@nivo/line'

import world from "@/assets/world.json";




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

  var travelerInterestsPlace = [
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

  var visitorsOcotber = {
    info: { xAxis: "Place", yAxis: "Visitors" },
    data: [
      {
        name: "Alun-alun Kota Malang",
        data: 582,
        place: "Alun-alun Kota Malang"
      },
      {
        name: "Malang Night Paradise",
        data: 363,
        place: "Malang Night Paradise",
      },
      {
        name: "Hawai Waterpark",
        data: 732,
        place: "Hawai Waterpark",
      },
      {
        name: "Malang Smart Arena",
        data: 229,
        place: "Malang Smart Arena",
      },
      {
        name: "Kampung Warna - Warni",
        data: 481,
        place: "Kampung Warna - Warni"
      },
      {
        name: "Kayutangan Heritage",
        data: 183,
        place: "Kayutangan Heritage",
      },
      {
        name: "Museum Brawijaya",
        data: 159,
        place: "Museum Brawijaya"
      },
      {
        name: "Pecinan Malang",
        data: 82,
        place: "Pecinan Malang",
      },
      {
        name: "Taman Rekreasi Sengkaling",
        data: 623,
        place: "Taman Rekreasi Sengkaling",
      },
      {
        name: "Pos Ketan Legenda",
        data: 253,
        place: "Pos Ketan Legenda"
      },
      {
        name: "Jatim Park 1",
        data: 1287,
        place: "Jatim Park 1",
      },
      {
        name: "Jatim Park 2",
        data: 826,
        place: "Jatim Park 2",
      },
      {
        name: "Jatim Park 3",
        data: 726,
        place: "Jatim Park 3",
      },
      {
        name: "Selecta Park",
        data: 347,
        place: "Selecta Park",
      },
      {
        name: "Onsen Hot Spring",
        data: 153,
        place: "Onsen Hot Spring"
      },
      {
        name: "Kunang Kunang Park",
        data: 59,
        place: "Kunang Kunang Park",
      },
      {
        name: "Pahlawan Monument",
        data: 182,
        place: "Pahlawan Monument",
      }
    ]
  }

  var travelerEnjoymentRatings = {
    info: { xAxis: "Place", yAxis: "Rating from 1 to 5" },
    data: [
      {
        name: "Alun-alun Kota Malang",
        place: "Alun-alun Kota Malang",
        data: 3.5
      },
      {
        name: "Malang Night Paradise",
        place: "Malang Night Paradise",
        data: 4.0
      },
      {
        name: "Hawai Waterpark",
        place: "Hawai Waterpark",
        data: 3.8
      },
      {
        name: "Malang Smart Arena",
        place: "Malang Smart Arena",
        data: 0.8
      },
      {
        name: "Kampung Warna - Warni",
        place: "Kampung Warna - Warni",
        data: 4.2
      },
      {
        name: "Kayutangan Heritage",
        place: "Kayutangan Heritage",
        data: 3.7
      },
      {
        place: "Museum Brawijaya",
        data: 3.9
      },
      {
        name: "Pecinan Malang",
        place: "Pecinan Malang",
        data: 2.1
      },
      {
        name: "Taman Rekreasi Sengkaling",
        place: "Taman Rekreasi Sengkaling",
        data: 4.1
      },
      {
        name: "Pos Ketan Legenda",
        place: "Pos Ketan Legenda",
        data: 3.6
      },
      {
        name: "Jatim Park 1",
        place: "Jatim Park 1",
        data: 4.3
      },
      {
        name: "Jatim Park 2",
        place: "Jatim Park 2",
        data: 4.0
      },
      {
        name: "Jatim Park 3",
        place: "Jatim Park 3",
        data: 4.2
      },
      {
        name: "Selecta Park",
        place: "Selecta Park",
        data: 3.8
      },
      {
        name: "Onsen Hot Spring",
        place: "Onsen Hot Spring",
        data: 4.0
      },
      {
        name: "Kunang Kunang Park",
        place: "Kunang Kunang Park",
        data: 1.9
      },
      {
        name: "Pahlawan Monument",
        place: "Pahlawan Monument",
        data: 3.9
      }
    ]
  }

  var averageStayDuration = {
    info: { xAxis: "Place", yAxis: "Average time spent (in h)" },
    data: [
      {
        place: "Alun-alun Kota Malang",
        name: "Alun-alun Kota Malang",
        data: 2
      },
      {
        place: "Malang Night Paradise",
        name: "Malang Night Paradise",
        data: 1.5
      },
      {
        place: "Hawai Waterpark",
        name: "Hawai Waterpark",
        data: 3.5
      },
      {
        place: "Malang Smart Arena",
        name: "Malang Smart Arena",
        data: 4
      },
      {
        place: "Kampung Warna - Warni",
        name: "Kampung Warna - Warni",
        data: 1
      },
      {
        place: "Kayutangan Heritage",
        name: "Kayutangan Heritage",
        data: 3
      },
      {
        place: "Museum Brawijaya",
        name: "Museum Brawijaya",
        data: 3.5
      },
      {
        place: "Pecinan Malang",
        name: "Pecinan Malang",
        data: 1
      },
      {
        place: "Taman Rekreasi Sengkaling",
        name: "Taman Rekreasi Sengkaling",
        data: 4
      },
      {
        place: "Pos Ketan Legenda",
        name: "Pos Ketan Legenda",
        data: 2
      },
      {
        place: "Jatim Park 1",
        name: "Jatim Park 1",
        data: 3.5
      },
      {
        place: "Jatim Park 2",
        name: "Jatim Park 2",
        data: 2
      },
      {
        place: "Jatim Park 3",
        name: "Jatim Park 3",
        data: 3
      },
      {
        place: "Selecta Park",
        name: "Selecta Park",
        data: 2.5
      },
      {
        place: "Onsen Hot Spring",
        name: "Onsen Hot Spring",
        data: 3
      },
      {
        place: "Kunang Kunang Park",
        name: "Kunang Kunang Park",
        data: 1.5
      },
      {
        place: "Pahlawan Monument",
        name: "Pahlawan Monument",
        data: 4
      }
    ]
  }

  var averageTravelerSpending = {
    info: { xAxis: "Place", yAxis: "Average spendings (in ₹)" },
    data: [
      {
        place: "Alun-alun Kota Malang",
        name: "Alun-alun Kota Malang",
        data: 5391
      },
      {
        place: "Malang Night Paradise",
        name: "Malang Night Paradise",
        data: 8493
      },
      {
        place: "Hawai Waterpark",
        name: "Hawai Waterpark",
        data: 6482
      },
      {
        place: "Malang Smart Arena",
        name: "Malang Smart Arena",
        data: 4541
      },
      {
        place: "Kampung Warna - Warni",
        name: "Kampung Warna - Warni",
        data: 7320
      },
      {
        place: "Kayutangan Heritage",
        name: "Kayutangan Heritage",
        data: 4849
      },
      {
        place: "Museum Brawijaya",
        name: "Museum Brawijaya",
        data: 5540
      },
      {
        place: "Pecinan Malang",
        name: "Pecinan Malang",
        data: 3521
      },
      {
        place: "Taman Rekreasi Sengkaling",
        name: "Taman Rekreasi Sengkaling",
        data: 7542
      },
      {
        place: "Pos Ketan Legenda",
        name: "Pos Ketan Legenda",
        data: 3953
      },
      {
        place: "Jatim Park 1",
        name: "Jatim Park 1",
        data: 9325
      },
      {
        place: "Jatim Park 2",
        name: "Jatim Park 2",
        data: 8539
      },
      {
        place: "Jatim Park 3",
        name: "Jatim Park 3",
        data: 9259
      },
      {
        place: "Selecta Park",
        name: "Selecta Park",
        data: 5832
      },
      {
        place: "Onsen Hot Spring",
        name: "Onsen Hot Spring",
        data: 6794
      },
      {
        place: "Kunang Kunang Park",
        name: "Kunang Kunang Park",
        data: 3212
      },
      {
        place: "Pahlawan Monument",
        name: "Pahlawan Monument",
        data: 4834
      }
    ]
  }

  var chatbotMessages = {
    "children": [
      {
        "name": '"Hiking trails"',
        "loc": 75
      },
      {
        "name": '"National parks"',
        "loc": 140
      },
      {
        "name": '"Mall"',
        "loc": 100
      },
      {
        "name": '"Shops"',
        "loc": 97
      },
      {
        "name": '"Museum Brawijaya"',
        "loc": 122
      },
      {
        "name": '"Historical places"',
        "loc": 104
      },
      {
        "name": '"Cultural differences"',
        "loc": 100
      },
      {
        "name": '"Car rental"',
        "loc": 84
      },
      {
        "name": '"Sights"',
        "loc": 75
      },
      {
        "name": '"Restaurants"',
        "loc": 119
      }
      ,
      {
        "name": '"Beach"',
        "loc": 35
      }
      ,
      {
        "name": '"Festivals"',
        "loc": 50
      }
      ,
      {
        "name": '"Events"',
        "loc": 119
      }
      ,
      {
        "name": '"Hawai Waterpark"',
        "loc": 129
      }
      ,
      {
        "name": '"Traditional food"',
        "loc": 80
      }
    ]

  }

  var gender = [
    {
      "id": "Diverse",
      "label": "Diverse",
      "value": 6,
      "color": "hsl(181, 70%, 50%)"
    },
    {
      "id": "Female",
      "label": "Female",
      "value": 51,
      "color": "hsl(147, 70%, 50%)"
    },
    {
      "id": "Male",
      "label": "Male",
      "value": 43,
      "color": "hsl(347, 70%, 50%)"
    }
  ]

  var geoData = [
    {
      "id": "AUS",
      "value": 565
    },
    {
      "id": "MYS",
      "value": 565
    },
    {
      "id": "GBR",
      "value": 300
    },
    {
      "id": "IND",
      "value": 790
    },
    {
      "id": "JPN",
      "value": 500
    },
    {
      "id": "KOR",
      "value": 500
    },
    {
      "id": "USA",
      "value": 115
    },
    {
      "id": "DEU",
      "value": 250
    },
    {
      "id": "CHN",
      "value": 600
    }
  ]

  var visitorInterests = [
    {
      "id": "Hiking",
      "label": "Hiking",
      "value": 19,
    },
    {
      "id": "Relax",
      "label": "Relax",
      "value": 7,
    },
    {
      "id": "Picnic",
      "label": "Picnic",
      "value": 3,
    },
    {
      "id": "Sports",
      "label": "Sports",
      "value": 7,
    },
    {
      "id": "Attractions",
      "label": "Attractions",
      "value": 11,
    },
    {
      "id": "Water",
      "label": "Water",
      "value": 11,
    },
    {
      "id": "Action",
      "label": "Action",
      "value": 8,
    },
    {
      "id": "Coffee",
      "label": "Coffee",
      "value": 3,
    },
    {
      "id": "Shopping",
      "label": "Shopping",
      "value": 4,
    },
    {
      "id": "Playground",
      "label": "Playground",
      "value": 3,
    },
    {
      "id": "Culinary",
      "label": "Culinary",
      "value": 24,
    }
  ]

  var visitorHistory = [
    {
      "id": "Visitors",
      "data": [
        {
          "x": "Jan",
          "y": 323
        },
        {
          "x": "Feb",
          "y": 365
        },
        {
          "x": "Mar",
          "y": 589
        },
        {
          "x": "Apr",
          "y": 625
        },
        {
          "x": "May",
          "y": 956
        },
        {
          "x": "Jun",
          "y": 1681
        },
        {
          "x": "Jul",
          "y": 1982
        },
        {
          "x": "Aug",
          "y": 1354
        },
        {
          "x": "Oct",
          "y": 589
        },
        {
          "x": "Nov",
          "y": 378
        },
        {
          "x": "Dec",
          "y": 196
        }
      ]
    },
  ]

  var visitorHistoryYear = [
    {
      "id": "Visitors",
      "data": [
        {
          "x": "2019",
          "y": 10382
        },
        {
          "x": "2020",
          "y": 6832
        },
        {
          "x": "2021",
          "y": 0
        },
        {
          "x": "2022",
          "y": 3823
        },
        {
          "x": "2023",
          "y": 5392
        },
      ]
    },
  ]

  function filterData(data: Array<any>) {
    return selectedOption.length > 0
      ? data.filter(item => selectedOption.includes(item.place))
      : data;
  }



  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
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
      </header> */}
      <main className="flex min-h-[calc(100vh-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="max-w-6xl w-full mx-auto grid gap-2">
          <h1 className="font-semibold text-3xl">Visitors Dashboard</h1>

          <Multiselect
            options={places} // Options to display in the dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            placeholder='Filter'
            className='mt-14'
          />

          <div className="flex gap-4 w-full mt-8">
            <Card className="p-0 w-1/2 h-full overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Visitor history 2023</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full aspect-[16/9]">
                  <ResponsiveLine
                    data={visitorHistory}
                    margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                      type: 'linear',
                      min: 'auto',
                      max: 'auto',
                      stacked: true,
                      reverse: false
                    }}
                    yFormat=" >-.2f"
                    lineWidth={3}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Month',
                      legendOffset: 36,
                      legendPosition: 'middle'
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Visitors',
                      legendOffset: -48,
                      legendPosition: 'middle'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="p-0 w-1/2 h-full overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Visitor history last 5 years</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full aspect-[16/9]">
                  <ResponsiveLine
                    data={visitorHistoryYear}
                    margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                      type: 'linear',
                      min: 'auto',
                      max: 'auto',
                      stacked: true,
                      reverse: false
                    }}
                    yFormat=" >-.2f"
                    lineWidth={3}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Month',
                      legendOffset: 36,
                      legendPosition: 'middle'
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Visitors',
                      legendOffset: -48,
                      legendPosition: 'middle'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex mt-14">
            <Card className="p-0 w-full h-full overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Visitors interests regarding to the visited place</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full aspect-[16/9]">
                  <ResponsiveBar
                    data={filterData(travelerInterestsPlace)}
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
                    colors={{ scheme: "set3" }}
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

          <div className="flex mt-14">
            <Card className="p-0 w-full h-full overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Average visitor age by place</CardDescription>
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

          <div className="flex w-full flex-col mt-14">
            <Card className="p-0 w-full h-full overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Average enjoyment rating by place</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <BarChart
                  className="w-full aspect-[16/9]"
                  xAxis={travelerEnjoymentRatings.info.xAxis}
                  yAxis={travelerEnjoymentRatings.info.yAxis}
                  data={filterData(travelerEnjoymentRatings.data)}
                />
              </CardContent>
            </Card>
          </div>

          <div className="flex mt-14">
            <Card className="p-0 w-full h-full overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Visitor feedback</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="p-4">
                          <div className="flex items-center">
                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Place
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Rating
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Feedback text
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                          </div>
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Hawai Waterpark
                        </th>
                        <td className="px-6 py-4">
                          4/5
                        </td>
                        <td className="px-6 py-4">
                          It was a great experience!
                        </td>
                      </tr>
                      <tr className="bg-red-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                          </div>
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Malang Smart Arena
                        </th>
                        <td className="px-6 py-4">
                          2/5
                        </td>
                        <td className="px-6 py-4">
                          The restrooms were not well-maintained, with overflowing trash bins and a lack of essential supplies like soap and paper towels. For a venue that prides itself on being 'smart', this basic aspect was surprisingly overlooked.
                        </td>
                      </tr>
                      <tr className="bg-orange-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                          </div>
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Pecinan Malang
                        </th>
                        <td className="px-6 py-4">
                          3/5
                        </td>
                        <td className="px-6 py-4">
                          The area tends to get quite crowded, especially on weekends, which can detract from the overall experience. The cleanliness of the streets could also be improved.
                        </td>
                      </tr>
                      <tr className="bg-green-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                          </div>
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Onsen Hot Spring
                        </th>
                        <td className="px-6 py-4">
                          5/5
                        </td>
                        <td className="px-6 py-4">
                          The quality of the hot springs themselves is outstanding. The water is the perfect temperature, offering therapeutic warmth that relaxes the muscles and calms the mind.
                        </td>
                      </tr>
                      <tr className="bg-red-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                          </div>
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Kunang Kunang Park
                        </th>
                        <td className="px-6 py-4">
                          1/5
                        </td>
                        <td className="px-6 py-4">
                          Many facilities, like benches and playground equipment, were in disrepair. The benches were chipped and splintered, and the playground equipment felt unsafe for children, with rusty parts and broken swings.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">300</span></span>
                    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                      <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                      </li>
                      <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex mt-14">
            <Card className="p-0 w-full h-full overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Visitors in October by place</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <BarChart
                  className="w-full aspect-[16/9]"
                  xAxis={visitorsOcotber.info.xAxis}
                  yAxis={visitorsOcotber.info.yAxis}
                  data={filterData(visitorsOcotber.data)}
                />
              </CardContent>
            </Card>
          </div>

          <div className="flex mt-14">
            <Card className="p-0 w-full h-full overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Average spendings by place</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <BarChart
                  className="w-full aspect-[16/9]"
                  xAxis={averageTravelerSpending.info.xAxis}
                  yAxis={averageTravelerSpending.info.yAxis}
                  data={filterData(averageTravelerSpending.data)}
                />
              </CardContent>
            </Card>
          </div>

          <div className="flex mt-14">
            <Card className="p-0 w-full h-full overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Average stay duration by place</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <BarChart
                  className="w-full aspect-[16/9]"
                  xAxis={averageStayDuration.info.xAxis}
                  yAxis={averageStayDuration.info.yAxis}
                  data={filterData(averageStayDuration.data)}
                />
              </CardContent>
            </Card>
          </div>

          <div className="flex mt-14">
            <Card className="p-0 w-full h-full overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Often mentioned in the chatbot</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full aspect-[16/9]">
                  <ResponsiveTreeMap
                    data={chatbotMessages}
                    identity="name"
                    value="loc"
                    valueFormat=".02s"
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                    labelSkipSize={10}
                    colors={{ scheme: 'set3' }}
                    label="id"
                    enableParentLabel={false}
                    orientLabel={false}
                    labelTextColor={{
                      from: 'color',
                      modifiers: [
                        [
                          'darker',
                          2
                        ]
                      ]
                    }}
                    borderColor={{
                      from: 'color',
                      modifiers: [
                        [
                          'darker',
                          0.1
                        ]
                      ]
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>


          <div className='flex mt-14'>
            <Card className="p-0 w-full h-full overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Visitor gender</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full aspect-[16/9]">
                  <ResponsivePie
                    data={gender}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    colors={{ scheme: 'set3' }}
                    borderColor={{
                      from: 'color',
                      modifiers: [
                        [
                          'darker',
                          0.2
                        ]
                      ]
                    }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabel={(e) => { return e.value + "%" }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                      from: 'color',
                      modifiers: [
                        [
                          'darker',
                          2
                        ]
                      ]
                    }}
                    defs={[
                      {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                      },
                      {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                      }
                    ]}
                    fill={[
                      {
                        match: {
                          id: 'ruby'
                        },
                        id: 'dots'
                      },
                      {
                        match: {
                          id: 'c'
                        },
                        id: 'dots'
                      },
                      {
                        match: {
                          id: 'go'
                        },
                        id: 'dots'
                      },
                      {
                        match: {
                          id: 'python'
                        },
                        id: 'dots'
                      },
                      {
                        match: {
                          id: 'scala'
                        },
                        id: 'lines'
                      },
                      {
                        match: {
                          id: 'lisp'
                        },
                        id: 'lines'
                      },
                      {
                        match: {
                          id: 'elixir'
                        },
                        id: 'lines'
                      },
                      {
                        match: {
                          id: 'javascript'
                        },
                        id: 'lines'
                      }
                    ]}
                    legends={[
                      {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                          {
                            on: 'hover',
                            style: {
                              itemTextColor: '#000'
                            }
                          }
                        ]
                      }
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='flex mt-14'>
            <Card className="p-0 w-full h-full overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Visitor origin</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full aspect-[16/9]">
                  <ResponsiveChoropleth
                    data={geoData}
                    features={world.features}
                    margin={{ top: 100, right: 0, bottom: 0, left: 0 }}
                    colors="greens"
                    domain={[0, 1000]}
                    unknownColor="#666666"
                    label="properties.name"
                    valueFormat=".2s"
                    projectionTranslation={[0.5, 0.5]}
                    projectionRotation={[-11, 0, 0]}
                    projectionScale={120}
                    graticuleLineColor="#dddddd"
                    borderWidth={0.5}
                    borderColor="#152538"
                    legends={[
                      {
                        anchor: 'center',
                        direction: 'column',
                        justify: false,
                        translateX: -365,
                        translateY: 40,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemsSpacing: 4,
                        symbolSize: 20,
                        itemDirection: 'left-to-right',
                        itemTextColor: '#777',
                        effects: [
                          {
                            on: 'hover',
                            style: {
                              itemTextColor: '#000',
                              itemBackground: '#f7fafb'
                            }
                          }
                        ]
                      }
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='flex mt-14'>
            <Card className="p-0 w-full h-full overflow-hidden">
              <CardHeader>
                <CardDescription className="text-xl font-medium">Visitor interests</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full aspect-[16/9]">
                  <ResponsivePie
                    data={visitorInterests}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    colors={{ scheme: 'set3' }}
                    borderColor={{
                      from: 'color',
                      modifiers: [
                        [
                          'darker',
                          0.2
                        ]
                      ]
                    }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabel={(e) => { return e.value + "%" }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                      from: 'color',
                      modifiers: [
                        [
                          'darker',
                          2
                        ]
                      ]
                    }}
                    defs={[
                      {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                      },
                      {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                      }
                    ]}
                    fill={[
                      {
                        match: {
                          id: 'ruby'
                        },
                        id: 'dots'
                      },
                      {
                        match: {
                          id: 'c'
                        },
                        id: 'dots'
                      },
                      {
                        match: {
                          id: 'go'
                        },
                        id: 'dots'
                      },
                      {
                        match: {
                          id: 'python'
                        },
                        id: 'dots'
                      },
                      {
                        match: {
                          id: 'scala'
                        },
                        id: 'lines'
                      },
                      {
                        match: {
                          id: 'lisp'
                        },
                        id: 'lines'
                      },
                      {
                        match: {
                          id: 'elixir'
                        },
                        id: 'lines'
                      },
                      {
                        match: {
                          id: 'javascript'
                        },
                        id: 'lines'
                      }
                    ]}
                    legends={[
                      {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                          {
                            on: 'hover',
                            style: {
                              itemTextColor: '#000'
                            }
                          }
                        ]
                      }
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
    </div>
  );
}