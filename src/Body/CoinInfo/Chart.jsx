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
import { buildPeriud, parseTime, formatTick } from "./utils";
import { useDispatch } from "react-redux";
import { setErrorMessage } from "../../service/state";
import { sortPrice } from "./utils";

function Chart({ coinData, periodParams, setPricePoints, pricePoints }) {
  // вместо него использовать use navigate use params
  const [period, setPeriod] = React.useState(periods[0]);
  const [chartData, setChartData] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const { start, end } = buildPeriud(period);
    getAssetsHistory(coinData.id, period.interval, start, end)
      .then((json) => {
        setChartData(
          json.data.map(({ time, ...rest }) => ({
            ...rest,
            date: parseTime(time, period.dateFormat),
          }))
        );

        const pricePoints = json.data.sort(sortPrice);

        setPricePoints({
          low: formatTick(pricePoints[0].priceUsd),
          high: formatTick(pricePoints[pricePoints.length - 1].priceUsd),
        });
      })
      .catch((error) => dispatch(setErrorMessage(error.message)));
  }, [coinData.id, period, setPricePoints, dispatch]);

  React.useEffect(() => {
    if (periodParams) {
      const _period = periods.find(({ label }) => label === periodParams);
      if (_period) {
        setPeriod(_period);
      }
    }
  }, [periodParams]);

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
          {/* domain как то криво работает, его нужно отформатировать */}
          <YAxis
            dataKey="priceUsd"
            orientation="right"
            tickFormatter={(value) => formatTick(value)}
            mirror
            domain={[() => pricePoints.low, () => pricePoints.high]}
          />
          <Tooltip />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#129a74" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#129a74" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="priceUsd"
            stroke="#129a74"
            // fill="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
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
