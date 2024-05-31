import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { dateFormatter } from "../utils";

function Chart({ chartData, priceMax, priceMin }) {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <AreaChart
        width={500}
        height={500}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* вставили форматор даты в XAxis
        решение нашёл тут: https://codesandbox.io/p/sandbox/recharts-area-chart-with-date-axis-6o55k?file=%2Fsrc%2FDateArea.js%3A2%2C66-2%2C74 */}
        <XAxis dataKey="date" tickFormatter={dateFormatter} />
        <YAxis
          dataKey="priceUsd"
          type="number"
          domain={[Math.floor(priceMin), Math.ceil(priceMax)]}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="priceUsd"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
