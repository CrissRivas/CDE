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
          prefix=""
          :table="city?.table"
          :chart="city?.chart"
          title="Ciudades"
          :middle="true"
          :ready="pcity"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="6">
        <TableChart
          prefix=""
          :cast="false"
          subfix=""
          :table="year?.table"
          :chart="year?.chart"
          title="Año publicado"
          :middle="false"
          :ready="pyear"
        />
      </v-col>
      <v-col sm="6">
        <TableChart
          prefix=""
          :cast="false"
          subfix=""
          :table="month?.table"
          :chart="month?.chart"
          title="Mes publicado"
          :ready="pmonth"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6">
        <TableChart
          prefix=""
          :cast="false"
          subfix=""
          :table="day?.table"
          :chart="day?.chart"
          title="Duración en dias"
          :ready="pday"
        />
      </v-col>
      <v-col sm="6">
        <TableChart
          prefix="<"
          :cast="true"
          subfix=""
          :table="sponsor?.table"
          :chart="sponsor?.chart"
          title="numero de sponsors"
          :ready="psponsor"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6">
        <TableChart
          prefix="<$"
          :cast="true"
          subfix=""
          :table="goal?.table"
          :chart="goal?.chart"
          title="Metas"
          :ready="pgoal"
        />
      </v-col>
      <v-col sm="6">
        <TableChart
          prefix="<$"
          :cast="true"
          subfix=""
          :table="collected?.table"
          :chart="collected?.chart"
          title="Recaudado"
          :ready="pcollected"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6">
        <TableChart
          prefix="<$"
          :cast="true"
          subfix=""
          :table="average?.table"
          :chart="average?.chart"
          title="Ticket Promedio"
          :ready="paverage"
        />
      </v-col>
      <v-col sm="6">
        <TableChart
          prefix="<"
          :cast="true"
          subfix="%"
          :table="percentage?.table"
          :chart="percentage?.chart"
          title="Porcentage superado"
          :ready="ppercentage"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { pending, data: projects } = await apiFetch("kick/projects");
const { pending: pglobal, data: global } = await apiFetch("kick/global");
const { pending: pcity, data: city } = await apiFetch("kick/city");
const { pending: pyear, data: year } = await apiFetch("kick/year");
const { pending: pmonth, data: month } = await apiFetch("kick/month");
const { pending: pday, data: day } = await apiFetch("kick/day");
const { pending: psponsor, data: sponsor } = await apiFetch("kick/sponsor");
const { pending: pgoal, data: goal } = await apiFetch("kick/goal");
const { pending: pcollected, data: collected } = await apiFetch(
  "kick/collected"
);
const { pending: paverage, data: average } = await apiFetch("kick/average");
const { pending: ppercentage, data: percentage } = await apiFetch(
  "kick/percentage"
);
// class tableChart {
//   table: Table[] = [];
//   chart: Object = {};
// }
// interface Table {
//   name: string | number;
//   successful: number;
//   unsuccessful: number;
// }
</script>

<style lang="scss" scoped></style>
