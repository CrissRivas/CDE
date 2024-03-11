<template>
  <Bar id="Charts" :options="chartOptions" :data="data" :height="height" />
</template>

<script>
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

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartOptions: {
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
      },
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    height: {
      type: Number,
      required: false,
      default: 450,
    },
  },
};
</script>

<style lang="scss" scoped></style>
