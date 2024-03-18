<template>
  <v-container>
    <v-row>
      <v-col>
        <p class="font-weight-bold text-h3 text-center">Proyectos Mexicanos</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <TextCard title="Proyectos y Metas" :text="textProjects" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col justify="center" align="center">
        <v-skeleton-loader
          v-if="loading"
          class="mx-auto"
          elevation="12"
          type="card"
        />
        <infoCard
          v-else
          title="Proyectos"
          :success="analitycs.projects.succes"
          :fail="analitycs.projects.fail"
        />
      </v-col>
      <v-col justify="center" align="center">
        <v-skeleton-loader
          v-if="loading"
          class="mx-auto"
          elevation="12"
          type="card"
        />
        <goalsCard
          v-else
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
              <v-skeleton-loader
                v-if="loading"
                class="mx-auto"
                elevation="12"
                type="table"
              />
              <tble v-else title="Estados" :items="analitycs.states" />
            </v-col>
            <v-col>
              <v-skeleton-loader
                v-if="loading"
                class="mx-auto"
                elevation="12"
                type="image@2,text@2"
              />
              <BarChart v-else :data="analitycs.states_chart" />
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
              <v-skeleton-loader
                v-if="loading"
                class="mx-auto"
                elevation="12"
                type="table"
              />
              <tble v-else title="Años" :items="analitycs.years" />
            </v-col>
            <v-col sm="6">
              <v-skeleton-loader
                v-if="loading"
                class="mx-auto"
                elevation="12"
                type="image@2,text@2"
              />
              <BarChart v-else :data="analitycs.years_chart" :height="270" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="6">
        <v-card class="pa-2">
          <v-row>
            <v-col sm="6">
              <v-skeleton-loader
                v-if="loading"
                class="mx-auto"
                elevation="12"
                type="table"
              />
              <tble v-else title="Meses" :items="analitycs.months" />
            </v-col>
            <v-col sm="6">
              <v-skeleton-loader
                v-if="loading"
                class="mx-auto"
                elevation="12"
                type="image@2,text@2"
              />
              <BarChart v-else :data="analitycs.months_chart" :height="270" />
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
              <v-skeleton-loader
                v-if="loading"
                class="mx-auto"
                elevation="12"
                type="table"
              />
              <tble v-else title="Metas" :items="analitycs.goals" />
            </v-col>
            <v-col sm="6">
              <v-skeleton-loader
                v-if="loading"
                class="mx-auto"
                elevation="12"
                type="image@2,text@2"
              />
              <BarChart v-else :data="analitycs.goals_chart" :height="270" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col sm="6">
        <v-card class="pa-2">
          <v-row>
            <v-col sm="6">
              <v-skeleton-loader
                v-if="loading"
                class="mx-auto"
                elevation="12"
                type="table"
              />
              <tble v-else title="Donadores" :items="analitycs.sponsors" />
            </v-col>
            <v-col sm="6">
              <v-skeleton-loader
                v-if="loading"
                class="mx-auto"
                elevation="12"
                type="image@2,text@2"
              />
              <BarChart v-else :data="analitycs.sponsors_chart" :height="270" />
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
              <v-skeleton-loader
                v-if="loading"
                class="mx-auto"
                elevation="12"
                type="table"
              />
              <tble
                v-else
                title="Ticket promedio"
                :items="analitycs.average_ticket"
              />
            </v-col>
            <v-col sm="6">
              <v-skeleton-loader
                v-if="loading"
                class="mx-auto"
                elevation="12"
                type="image@2,text@2"
              />
              <BarChart
                v-else
                :data="analitycs.average_ticket_chart"
                :height="270"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col sm="6">
        <v-card class="pa-2">
          <v-row>
            <v-col sm="6">
              <v-skeleton-loader
                v-if="loading"
                class="mx-auto"
                elevation="12"
                type="table"
              />
              <tble
                v-else
                title="% Superado"
                :items="analitycs.percentage_surpassed"
              />
            </v-col>
            <v-col sm="6">
              <v-skeleton-loader
                v-if="loading"
                class="mx-auto"
                elevation="12"
                type="image@2,text@2"
              />
              <BarChart
                v-else
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
        <v-skeleton-loader
          v-if="loading"
          class="mx-auto"
          elevation="12"
          type="table"
        />
        <projectsTable v-else :items="datos" />
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
import TextCard from "~/components/composed/TextCard.vue";

export default {
  components: {
    infoCard,
    goalsCard,
    tble,
    BarChart,
    projectsTable,
    TextCard,
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
      loading: true,
      textProjects:
        "Para esta investigación se recabo información directamente de Kickstarter, la investigacion abarca desde el primer proyecto mexicano, hasta finales del 2023. Faltan unos cuantos proyectos debido a que esan por publicarse o hemos detectado que directamente es un fraude. Podremos encontrar la metodologia de la investigacion y el reporte en PDF al final de la pagina.",
    };
  },
  async mounted() {
    this.analitycs = await getKickAnalitycs();
    this.datos = await getKick();
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped></style>
