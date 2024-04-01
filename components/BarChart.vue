<template>
  <Bar id="Charts" :options="chartOptions" :data="data" :height="450" />
</template>

<script setup lang="ts">
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
const props = defineProps(["data"]);
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      grid: {
        color: "#424242",
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
