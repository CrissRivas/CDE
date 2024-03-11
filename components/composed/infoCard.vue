<template>
  <v-card max-width="600" min-width="300" min-height="250">
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-row justify="center">
      <v-col>
        <p class="text-h2 font-weight-bold text-center">{{ totals }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row justify="center" align="center">
          <v-tooltip activator="parent" location="top">Logrados</v-tooltip>
          <p class="text-h4 font-weight-bold text-amber-accent-4">
            {{ success }}
          </p>
          <v-icon
            icon="mdi-crown"
            size="x-large"
            color="amber-accent-4"
          ></v-icon>
          <p class="font-weight-thin text-caption text-grey-darken-1">
            {{ progress.toFixed(2) }} %
          </p>
        </v-row>
      </v-col>
      <v-col>
        <v-row justify="center" align="center">
          <v-tooltip activator="parent" location="top">Fallidos</v-tooltip>
          <p class="text-h4 text-grey-darken-1">{{ fail }}</p>
          <v-icon
            icon="mdi-skull"
            size="x-large"
            color="grey-darken-1"
          ></v-icon>
          <p class="font-weight-thin text-caption text-grey-darken-1">
            {{ 100 - progress.toFixed(2) }} %
          </p>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-progress-linear
          color="amber-accent-4"
          bg-color="grey-darken-1"
          v-model="progress"
          :height="25"
        ></v-progress-linear>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      totals: 50,
      progress: 0,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    success: {
      type: Number,
      required: false,
    },
    fail: {
      type: Number,
      required: false,
    },
  },
  methods: {
    findTotal() {
      this.totals = this.success + this.fail;
      this.progress = (this.success * 100) / this.totals;
    },
  },
  watch: {
    success() {
      this.findTotal();
    },
    fail() {
      this.findTotal();
    },
  },
};
</script>

<style lang="scss" scoped></style>
