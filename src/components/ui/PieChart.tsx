'use client';
import { ResponsivePie } from "@nivo/pie";

export function PieChart(props: any) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          {
            id: "A",
            value: 634,
          },
          {
            id: "B",
            value: 456,
          },
          {
            id: "C",
            value: 150,
          },
          {
            id: "D",
            value: 258,
          },
          {
            id: "E",
            value: 511,
          },
        ]}
        sortByValue
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        cornerRadius={0}
        activeOuterRadiusOffset={2}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLabel="id"
        arcLabelsRadiusOffset={0.6}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        enableArcLinkLabels={false}
        colors={{ scheme: "paired" }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 50,
            itemHeight: 18,
            itemDirection: "left-to-right",
            symbolSize: 18,
            symbolShape: "circle",
          },
        ]}
        theme={{
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
        }}
        role="application" />
    </div>
  );
}

