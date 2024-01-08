'use client';
import { ResponsiveBar } from "@nivo/bar";

export function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          {
            name: "Hiking",
            data: 111,
          },
          {
            name: "Relax",
            data: 157,
          },
          {
            name: "Picnic",
            data: 129,
          },
          {
            name: "Sports",
            data: 187,
          },
          {
            name: "Attractions",
            data: 119,
          },
          {
            name: "Games",
            data: 22,
          },
          {
            name: "Water",
            data: 101,
          },
          {
            name: "Culinary",
            data: 83,
          },
        ]}
        keys={["data"]}
        indexBy="name"
        margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Preferences",
          legendPosition: "middle",
          legendOffset: 45,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Number of people",
          legendPosition: "middle",
          legendOffset: -45,
          truncateTickAt: 0,
        }}
        theme={{
          axis: {
            legend: {
              text: {
                fontSize: "16px",
                outlineWidth: 10,
              },
            },
          },
          text:{
            fontSize: "16px",
          },
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role="application"
        ariaLabel="A bar chart showing data" />
    </div>
  );
}
