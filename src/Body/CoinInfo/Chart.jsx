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
import { getAssetsHistory } from "../../api/assets";
import { periods } from "./constants";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { buildPeriud, parseTime } from "./utils";

function Chart({ coinData }) {
  const [period, setPeriod] = React.useState(periods[0]);
  const [chartData, setChartData] = React.useState([]);

  React.useEffect(() => {
    const { start, end } = buildPeriud(period);
    getAssetsHistory(coinData.id, period.interval, start, end).then((json) =>
      setChartData(
        json.data.map(({ time, ...rest }) => ({
          ...rest,
          date: parseTime(time),
        }))
      )
    );
  }, [coinData.id, period]);
  return (
    <>
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
          <XAxis dataKey="date" />
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
      <ButtonGroup size="sm">
        {periods.map((_period) => (
          <Button
            key={_period.label}
            active={period.label === _period.label}
            variant="outline-primary"
            onClick={() => setPeriod(_period)}
          >
            {_period.label}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
}

export default Chart;
