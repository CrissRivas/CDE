<template>
  <v-skeleton-loader v-if="ready" class="mx-auto" elevation="12" type="card" />
  <v-card min-width="300" min-height="250" v-else>
    <v-card-title> Proyectos </v-card-title>

    <v-row justify="center">
      <v-col>
        <p class="text-h2 font-weight-bold text-center">{{ table.name }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row justify="center" align="center">
          <v-tooltip activator="parent" location="top">Logrados</v-tooltip>
          <p class="text-h4 font-weight-bold text-amber-accent-4">
            {{ table.successful }}
          </p>
          <v-icon
            icon="mdi-crown"
            size="x-large"
            color="amber-accent-4"
          ></v-icon>
          <p class="font-weight-thin text-caption text-grey-darken-1">
            {{ progress }} %
          </p>
        </v-row>
      </v-col>
      <v-col>
        <v-row justify="center" align="center">
          <v-tooltip activator="parent" location="top">Fallidos</v-tooltip>
          <p class="text-h4 text-grey-darken-1">{{ table.unsuccessful }}</p>
          <v-icon
            icon="mdi-skull"
            size="x-large"
            color="grey-darken-1"
          ></v-icon>
          <p class="font-weight-thin text-caption text-grey-darken-1">
            {{ 100 - progress }} %
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

<script setup lang="ts">
const props = defineProps(["table", "ready"]);
const progress = computed(() =>
  ((props.table.successful / props.table.name) * 100).toFixed(2)
);
</script>

<style lang="scss" scoped></style>
