"use client";

import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
} from "recharts";
import GetDummyData from "./data";

export default function WorkLocationTrends() {
  const data = GetDummyData();

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"
      >
        <XAxis dataKey="name" stroke="#777777" fontSize={12} />
        <YAxis stroke="#777777" fontSize={12} />
        <Tooltip
          wrapperClassName="!text-sm dark:!bg-stone-800 rounded-md dark:!border-border"
          labelClassName="!font-bold"
          separator=": "
          formatter={(value, name) => {
            if (name === "office") {
              return [value, "work in office"];
            }
            return [value, "work from home"];
          }}
        />
        <Legend
          iconType="circle"
          formatter={(value) =>
            value === "office" ? (
              <span className="text-sm">work in office</span>
            ) : (
              <span className="text-sm">work from home</span>
            )
          }
        />
        <Bar dataKey="office" stackId="1" fill="#ec4899" />
        <Bar dataKey="wfh" stackId="1" fill="#6b7280" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
