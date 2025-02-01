<script setup>
import { Bar } from "vue-chartjs";
import {
   Chart as ChartJS,
   Title,
   Tooltip,
   Legend,
   BarElement,
   CategoryScale,
   LinearScale,
} from "chart.js";

ChartJS.register(
   Title,
   Tooltip,
   Legend,
   BarElement,
   CategoryScale,
   LinearScale
);

const chartData = {
   labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
   datasets: [
      {
         label: "Visit",
         backgroundColor: "#6575ed",
         data: [40, 20, 12, 15, 30, 50, 75],
      },
   ],
};
const chartOptions = {
   responsive: true,
   maintainAspectRatio: false,
};
</script>
<template>
   <div class="chart">
      <h4 class="font-semibold text-xl">Website Views</h4>
      <p class="text-gray-500 text-sm mt-1">Last campaign performance</p>
      <div class="h-80">
         <Bar :options="chartOptions" :data="chartData" />
      </div>
   </div>
</template>
