<template>
  <v-card>
    <v-row>
      <v-col sm="4" align="center" justify="center">
        <v-skeleton-loader
          v-if="ready"
          class="mx-auto"
          elevation="12"
          type="table"
        />
        <generalTable :table="table" :title="title" v-else />
      </v-col>
      <v-col sm="8" align="center" justify="center">
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
const props = defineProps(["table", "chart", "title", "ready"]);
</script>

<style lang="scss" scoped></style>
