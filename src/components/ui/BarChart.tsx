'use client';
import { ResponsiveBar } from "@nivo/bar";

export function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar

        data={props.data}
        keys={["data"]}
        indexBy="name"
        margin={{ top: 0, right: 100, bottom: 120, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "set3" }}
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
          tickRotation: 45,
          legend: props.xAxis,
          legendPosition: "middle",
          legendOffset: 110,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: props.yAxis,
          legendPosition: "middle",
          legendOffset: -45,
          truncateTickAt: 0,
        }}
        // theme={{
        //   axis: {
        //     legend: {
        //       text: {
        //         fontSize: "16px",
        //         outlineWidth: 10,
        //       },
        //     },
        //   },
        //   text: {
        //     fontSize: "16px",
        //   },
        //   tooltip: {
        //     container: {
        //       fontSize: "12px",
        //     },
        //   },
        // }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role="application"
        ariaLabel="A bar chart showing data" />
    </div>
  );
}
