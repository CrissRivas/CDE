<template>
  <v-card>
    <v-row>
      <v-col :sm="middle ? 4 : 6" align="center" justify="center">
        <v-skeleton-loader
          v-if="ready"
          class="mx-auto"
          elevation="12"
          type="table"
        />
        <generalTable
          :table="table"
          :title="title"
          :prefix="prefix"
          :subfix="subfix"
          :cast="cast"
          v-else
        />
      </v-col>
      <v-col :sm="middle ? 8 : 6" align="center" justify="center">
        <v-skeleton-loader
          v-if="ready"
          class="mx-auto"
          elevation="12"
          type="table"
        />
        <BarChart :data="chart" v-else />
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps([
  "table",
  "chart",
  "title",
  "ready",
  "middle",
  "prefix",
  "subfix",
  "cast",
]);
</script>

<style lang="scss" scoped></style>
