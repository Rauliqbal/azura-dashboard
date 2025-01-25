<script setup>
import { Line } from "vue-chartjs";
import {
   CategoryScale,
   Chart as ChartJS,
   Legend,
   LinearScale,
   LineElement,
   PointElement,
   Title,
   Tooltip,
} from "chart.js";

ChartJS.register(
   Title,
   Tooltip,
   Legend,
   Tooltip,
   LineElement,
   PointElement,
   LinearScale,
   CategoryScale
);

const chartData = {
   labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dev",
   ],

   datasets: [
      {
         label: "Total",
         backgroundColor: "#6575ed",
         data: [20, 40, 55, 45, 21, 34, 56, 102, 90, 86, 120, 108],
      },
   ],
};
const chartOptions = {
   responsive: true,
};
</script>
<template>
   <div class="chart">
      <h4 class="font-semibold text-xl">Total Sales</h4>
      <p class="text-gray-500 text-sm mt-1">Last campaign performance</p>
      <Line :data="chartData" :options="chartOptions" />
   </div>
</template>
