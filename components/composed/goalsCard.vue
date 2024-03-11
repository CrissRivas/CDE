<template>
  <v-card max-width="600" min-width="300" min-height="250">
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-row justify="center" align="center">
      <v-col>
        <p class="font-weight-thin text-caption text-grey-darken-1">Previsto</p>
        <p class="text-lg-h5 text-center text-amber-accent-4">
          {{ "$" + formatoMexico(goal) }}
        </p>
      </v-col>
      <v-col cols="1">
        <v-tooltip activator="parent" location="top">Logrados</v-tooltip>
        <v-icon icon="mdi-crown" size="x-large" color="amber-accent-4">
        </v-icon>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <p class="font-weight-thin text-caption text-grey-darken-1">
              Recaudado
            </p>
            <p
              class="text-h6 text-lg-h4 font-weight-bold text-center text-amber-accent-4"
            >
              {{ "$" + formatoMexico(collected) }}
            </p>

            <p class="font-weight-thin text-caption text-grey-darken-1">
              {{ percentage.toFixed(2) }} %
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col>
        <p class="font-weight-thin text-caption text-grey-darken-1">Previsto</p>
        <p class="text-center text-grey-darken-1">
          {{ "$" + formatoMexico(goal_fail) }}
        </p>
      </v-col>
      <v-col cols="1">
        <v-tooltip activator="parent" location="top">Fallidos</v-tooltip>
        <v-icon icon="mdi-skull" size="large" color="grey-darken-1"> </v-icon>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <p class="font-weight-thin text-caption text-grey-darken-1">
              Recaudado
            </p>
            <p class="font-weight-bold text-center text-grey-darken-1">
              {{ "$" + formatoMexico(collected_fail) }}
            </p>
            <p class="font-weight-thin text-caption text-grey-darken-1">
              {{ percentage_fail.toFixed(2) }} %
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      percentage: 0,
      percentage_fail: 0,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    goal: {
      type: Number,
      required: false,
    },
    goal_fail: {
      type: Number,
      required: false,
    },
    collected: {
      type: Number,
      required: false,
    },
    collected_fail: {
      type: Number,
      required: false,
    },
  },
  methods: {
    findTotal() {
      this.percentage = (this.collected * 100) / this.goal;
      this.percentage_fail = (this.collected_fail * 100) / this.goal_fail;
    },
    formatoMexico(dato) {
      const exp = /(\d)(?=(\d{3})+(?!\d))/g;
      const rep = "$1,";
      let arr = dato.toString().split(".");
      arr[0] = arr[0].replace(exp, rep);
      return arr[1] ? arr.join(".") : arr[0];
    },
  },
  watch: {
    goal() {
      this.findTotal();
    },
    goal_fail() {
      this.findTotal();
    },
    collected() {
      this.findTotal();
    },
    collected_fail() {
      this.findTotal();
    },
  },
};
</script>

<style lang="scss" scoped></style>
