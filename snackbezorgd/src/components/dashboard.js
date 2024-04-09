import { Card, CardContent, Stack } from "@mui/joy/";
import * as React from "react";
import { Grid } from "@mui/material/";
import axios from "axios";
import Typography from "@mui/material/Typography";
import BarChartIcon from "@mui/icons-material/BarChart";
import PaymentsIcon from "@mui/icons-material/Payments";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const styles = {
  text: {
    fontFamily: "inter",
    fontWeight: 800,
  },
  card: {
    height: "180px",
    width: "330px",
    backgroundColor: "#fff",
    borderRadius: 35,
    marginRight: 4,
  },
  cardTextTitle: {
    color: "#000",
    marginLeft: "1vw",
  },
  cardTextValue: {
    color: "#000",
    marginLeft: "1vw",
    fontWeight: 800,
    fontSize: "30px",
  },
  svgIcon: {
    height: "100px",
    marginTop: "1vw",
    position: "absolute",
    right: -100,
    color: "#fda912",
    width: "100%",
  },
  customTooltip: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  graphBackground: {
    backgroundColor: "#fff",
    borderRadius: 35,
    marginTop: 5,
    width: 1250,
    padding: 2,
  },
};

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Stack sx={styles.customTooltip}>
        {payload.map((pld) => (
          <Stack style={{ display: "inline-block", padding: 10 }}>
            <Stack sx={{ color: pld.fill }}> €{pld.value}</Stack>
            <Stack>Totale Opbrengst</Stack>
          </Stack>
        ))}
      </Stack>
    );
  }

  return null;
};

export default function Dashboard() {
  const [rows, setRows] = React.useState([]);
  const [summarizeData, setSummarizeData] = React.useState([]);
  const [summarizeDataDaily, setSummarizeDataDaily] = React.useState([]);
  const [totalOrders, setTotalOrders] = React.useState(0);
  const [totalOrdersTime, setTotalOrdersTime] = React.useState(0);
  const [totalCost, setTotalCost] = React.useState(0);
  const apiUrl = process.env.REACT_APP_API_URL;

  React.useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/order/`);
        setRows(
          response.data.map((order) => ({
            id: order.order_number,
            firstName: order.account.first_name,
            lastName: order.account.last_name,
            email: order.account.email,
            time: order.time,
            paid: order.paid,
            total: new Intl.NumberFormat("nl-NL", {
              style: "currency",
              currency: "EUR",
            }).format(parseFloat(order.total)),
            fullName: `${order.account.first_name || ""} ${
              order.account.last_name || ""
            }`,
          }))
        );
        const calculatedTotalCost = response.data.reduce((total, order) => {
          const orderCost = parseFloat(order.total) || 0;
          return total + orderCost;
        }, 0);
        setTotalCost("€" + calculatedTotalCost.toFixed(2).replace(/\./g, ","));
        setTotalOrders(response.data.length);
        setTotalOrdersTime(response.data.time);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const getMonthName = (monthNumber) => {
    const months = [
      "Januari",
      "Februari",
      "Maart",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Augustus",
      "September",
      "Oktober",
      "November",
      "December",
    ];
    return months[monthNumber - 1];
  };

  const getDay = (dateString) => {
    const date = new Date(dateString);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayOfWeek = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const dayOfMonth = date.getDate();

    return `${dayOfWeek} ${monthName} ${dayOfMonth}`;
  };

  React.useEffect(() => {
    const fetchSummarizeMonthly = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/summarize/monthly/`);
        const summarizedDataWithMonthNames = response.data.map((item) => ({
          ...item,
          month: getMonthName(item.month),
        }));
        setSummarizeData(summarizedDataWithMonthNames);
        console.log(summarizedDataWithMonthNames);
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    };

    fetchSummarizeMonthly();
  }, []);

  React.useEffect(() => {
    const fetchSummarizeDaily = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/summarize/daily/`);
        const summarizeDataDaily = response.data.map((item) => ({
          ...item,
          date: getDay(item.date),
        }));
        setSummarizeDataDaily(summarizeDataDaily);
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    };

    fetchSummarizeDaily();
  }, []);

  return (
    <React.Fragment>
      <Grid
        mt={1}
        container
        columnSpacing={{ sm: 1, md: 1, lg: 1, xl: 1 }}
        spacing={2}
        direction="row"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <Card sx={styles.card} variant="solid">
            <CardContent orientation="horizontal">
              <CardContent>
                <Typography sx={styles.cardTextTitle} level="body-md">
                  Totaal Orders
                </Typography>
                <Typography sx={styles.cardTextValue} level="h2">
                  {totalOrders}
                </Typography>
                <BarChartIcon sx={styles.svgIcon} />
              </CardContent>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <Card sx={styles.card} variant="solid">
            <CardContent orientation="horizontal">
              <CardContent>
                <Typography sx={styles.cardTextTitle} level="body-md">
                  Totaal Opbrengst
                </Typography>
                <Typography sx={styles.cardTextValue} level="h2">
                  {totalCost}
                </Typography>
                <PaymentsIcon sx={styles.svgIcon} />
              </CardContent>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Stack sx={styles.graphBackground}>
        <AreaChart
          width={1200}
          height={250}
          data={summarizeData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colortotalProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fda912" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#fda912" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis tickCount={3} />
          <CartesianGrid opacity={0.5} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
          />
          <Area
            type="monotone"
            dataKey="totalProfitMonthly"
            strokeWidth={4}
            stroke="#fda912"
            fillOpacity={1}
            fill="url(#colortotalProfit)"
          />
        </AreaChart>
      </Stack>
      <Stack sx={styles.graphBackground}>
        <AreaChart
          width={1200}
          height={250}
          data={summarizeDataDaily}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colortotalProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fda912" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#fda912" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" type="category" />
          <YAxis />
          <CartesianGrid opacity={0.5} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
          />
          <Area
            type="monotone"
            dataKey="totalProfitDaily"
            strokeWidth={4}
            stroke="#fda912"
            fillOpacity={1}
            fill="url(#colortotalProfit)"
          />
        </AreaChart>
      </Stack>
    </React.Fragment>
  );
}
