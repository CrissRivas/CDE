<template>
  <v-container>
    <v-row>
      <v-col sm="6">
        <InfoCard :table="projects" :ready="pending" />
      </v-col>
      <v-col sm="6">
        <GoalsCard :global="global" :ready="pglobal" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <TableChart
          :table="city?.table"
          :chart="city?.chart"
          title="Ciudades"
          :ready="pcity"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const { pending, data: projects } = await useLazyFetch(
  config.public.API_BASE_URL + "kick/projects"
);
const { pending: pglobal, data: global } = await useLazyFetch(
  config.public.API_BASE_URL + "kick/global"
);
const { pending: pcity, data: city } = await useLazyFetch<tableChart>(
  config.public.API_BASE_URL + "kick/city"
);
// const { pending : p-year , data: year } = await useLazyFetch(
//   config.public.API_BASE_URL + "kick/year"
// );
// const { pending : p-month , data: month } = await useLazyFetch(
//   config.public.API_BASE_URL + "kick/month"
// );
// const { pending : p-day , data: day } = await useLazyFetch(
//   config.public.API_BASE_URL + "kick/day"
// );
// const { pending : p-sponsor , data: sponsor } = await useLazyFetch(
//   config.public.API_BASE_URL + "kick/sponsor"
// );
// const { pending : p-goal , data: goal } = await useLazyFetch(
//   config.public.API_BASE_URL + "kick/goal"
// );
// const { pending : p-collected , data: collected } = await useLazyFetch(
//   config.public.API_BASE_URL + "kick/collected"
// );
// const { pending : p-average , data: average } = await useLazyFetch(
//   config.public.API_BASE_URL + "kick/average"
// );
// const { pending : p-percentage , data: percentage } = await useLazyFetch(
//   config.public.API_BASE_URL + "kick/percentage"
// );

// const ready = true;
// import {
//   getKickAnalitycs,
//   getKick,
//   generalResponse,
// } from "@/composables/backend";
// import infoCard from "~/components/composed/infoCard.vue";
// import goalsCard from "~/components/composed/goalsCard.vue";
// import tble from "~/components/composed/table.vue";
// import BarChart from "~/components/composed/BarChart.vue";
// import projectsTable from "~/components/composed/projectsTable.vue";
// import TextCard from "~/components/composed/TextCard.vue";

// export default {
//   components: {
//     infoCard,
//     goalsCard,
//     tble,
//     BarChart,
//     projectsTable,
//     TextCard,
//   },
//   setup() {
//     useHead({
//       title: "Investigación Kickstarter",
//     });
//   },
//   data() {
//     return {
//       analitycs: new generalResponse(),
//       datos: [],
//       loading: true,
//       textProjects:
//         "Para esta investigación se recabo información directamente de Kickstarter, la investigacion abarca desde el primer proyecto mexicano, hasta finales del 2023. Faltan unos cuantos proyectos debido a que esan por publicarse o hemos detectado que directamente es un fraude. Podremos encontrar la metodologia de la investigacion y el reporte en PDF al final de la pagina.",
//     };
//   },
//   async beforeMount() {
//     this.analitycs = await getKickAnalitycs();
//     this.datos = await getKick();
//     this.loading = false;
//   },
// };

class tableChart {
  table: Table[] = [];
  chart: Object = {};
}
interface Table {
  name: string | number;
  successful: number;
  unsuccessful: number;
}
</script>

<style lang="scss" scoped></style>
