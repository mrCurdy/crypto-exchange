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

// m1, m5, m15, m30, h1, h2, h6, h12, d1

function Chart({ coinData, chartData, interval }) {
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
        <XAxis dataKey="time" />
        <YAxis dataKey="priceUsd" />
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
