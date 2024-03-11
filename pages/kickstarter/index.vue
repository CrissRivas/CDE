<template>
  <v-container>
    <v-row>
      <v-col>
        <p class="font-weight-bold text-h3 text-center">Proyectos Mexicanos</p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col justify="center" align="center">
        <infoCard
          title="Proyectos"
          :success="analitycs.projects.succes"
          :fail="analitycs.projects.fail"
        />
      </v-col>
      <v-col justify="center" align="center">
        <goalsCard
          title="Metas"
          :goal="analitycs.global.goal"
          :goal_fail="analitycs.global.goal_fail"
          :collected="analitycs.global.collected"
          :collected_fail="analitycs.global.collected_fail"
        />
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col>
        <v-card>
          <v-row>
            <v-col sm="4">
              <tble title="Estados" :items="analitycs.states" />
            </v-col>
            <v-col>
              <BarChart :data="analitycs.states_chart" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col sm="6">
        <v-card class="pa-2">
          <v-row>
            <v-col sm="6">
              <tble title="Metas" :items="analitycs.goals" />
            </v-col>
            <v-col sm="6">
              <BarChart :data="analitycs.goals_chart" :height="270" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="6">
        <v-card class="pa-2">
          <v-row>
            <v-col sm="6">
              <tble title="Donadores" :items="analitycs.sponsors" />
            </v-col>
            <v-col sm="6">
              <BarChart :data="analitycs.sponsors_chart" :height="270" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col sm="6">
        <v-card class="pa-2">
          <v-row>
            <v-col sm="6">
              <tble title="Ticket promedio" :items="analitycs.average_ticket" />
            </v-col>
            <v-col sm="6">
              <BarChart :data="analitycs.average_ticket_chart" :height="270" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col sm="6">
        <v-card class="pa-2">
          <v-row>
            <v-col sm="6">
              <tble
                title="% Superado"
                :items="analitycs.percentage_surpassed"
              />
            </v-col>
            <v-col sm="6">
              <BarChart
                :data="analitycs.percentage_surpassed_chart"
                :height="270"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <projectsTable :items="datos" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  getKickAnalitycs,
  getKick,
  generalResponse,
} from "@/composables/backend";
import infoCard from "~/components/composed/infoCard.vue";
import goalsCard from "~/components/composed/goalsCard.vue";
import tble from "~/components/composed/table.vue";
import BarChart from "~/components/composed/BarChart.vue";
import projectsTable from "~/components/composed/projectsTable.vue";

export default {
  components: {
    infoCard,
    goalsCard,
    tble,
    BarChart,
    projectsTable,
  },
  setup() {
    useHead({
      title: "Investigación Kickstarter",
    });
  },
  data() {
    return {
      analitycs: new generalResponse(),
      datos: [],
    };
  },
  async mounted() {
    this.analitycs = await getKickAnalitycs();
    this.datos = await getKick();
  },
};
</script>

<style lang="scss" scoped></style>
