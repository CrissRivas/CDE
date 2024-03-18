<template>
  <v-card>
    <v-row>
      <v-col sm="2">
        <v-data-table
          :headers="headers"
          :items="indexItems"
          density="compact"
          :items-per-page="itemsPerPage"
          hover
          v-model:page="page"
          item-key="index"
        >
          <template v-slot:header.price>
            <v-tooltip activator="parent" location="top">Precio</v-tooltip>
            <v-icon size="x-large" icon="mdi-currency-usd" />
          </template>
          <template v-slot:header.sponsors>
            <v-tooltip activator="parent" location="top">Compradores</v-tooltip>
            <v-icon size="x-large" icon="mdi-account-group" />
          </template>
          <template v-slot:item.price="{ item }">
            <p>
              {{ "$ " + comaFormat(item.price) }}
            </p>
          </template>

          <template v-slot:bottom>
            <div class="text-center pt-2">
              <v-pagination
                v-if="pagination"
                v-model="page"
                rounded="circle"
                density="compact"
                :length="pageCount"
              ></v-pagination>
            </div>
          </template>
        </v-data-table>
      </v-col>
      <v-col>
        <Line id="Charts" :options="chartOptions" :data="data" :height="450" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { Line } from "vue-chartjs";
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
  components: {
    Line,
  },
  data() {
    return {
      page: 1,
      itemsPerPage: 15,
      pagination: true,
      headers: [
        {
          key: "price",
          align: "center",
        },
        {
          key: "sponsors",
          align: "center",
        },
      ],
      indexItems: [],
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
      data: {
        labels: [],
        datasets: [
          {
            label: "Precios",
            data: [],
          },
          {
            label: "Ticket promedio",
            data: [],
          },
        ],
      },
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
      spanGaps: true,
    },
  },
  watch: {
    items(i) {
      this.indexItems = this.addIndex(i);
    },
  },
  methods: {
    makeChart(array) { 
      array.forEach((a) => {
        this.data.labels.push("$ " + comaFormat(a.price));
        this.data.datasets[0].data.push(a.sponsors);
        this.data.datasets[1].data.push(NaN);
      });
    },
    addIndex(array) {
      return array.map((obj, index) => {
        return {
          ...obj,
          index: String(index),
        };
      });
    },
    comaFormat(dato) {
      const exp = /(\d)(?=(\d{3})+(?!\d))/g;
      const rep = "$1,";
      let arr = dato.toString().split(".");
      arr[0] = arr[0].replace(exp, rep);
      return arr[1] ? arr.join(".") : arr[0];
    },
  },
  computed: {
    pageCount() {
      const pages = Math.ceil(this.items.length / this.itemsPerPage);
      pages <= 1 ? (this.pagination = false) : (this.pagination = true);
      return pages;
    },
  },
};
</script>

<style lang="scss" scoped></style>
