<template>
  <v-skeleton-loader v-if="ready" class="mx-auto" elevation="12" type="card" />
  <v-card min-width="300" min-height="250" class="px-4" v-else>
    <v-card-title> Metas </v-card-title>
    <v-row justify="center" align="center">
      <v-col>
        <p class="font-weight-thin text-center text-caption text-grey-darken-1">
          Previsto
        </p>
        <p class="text-lg-h5 text-center text-amber-accent-4">
          {{ "$" + fnum(global.successful.goal) }}
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
            <p
              class="font-weight-thin text-center text-caption text-grey-darken-1"
            >
              Recaudado
            </p>
            <p
              class="text-h6 text-lg-h4 font-weight-bold text-center text-amber-accent-4"
            >
              {{ "$" + fnum(global.successful.collected) }}
            </p>

            <p
              class="font-weight-thin text-caption text-center text-grey-darken-1"
            >
              {{ fnum(percentage_successful) }} %
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col>
        <p class="font-weight-thin text-center text-caption text-grey-darken-1">
          Previsto
        </p>
        <p class="text-center text-grey-darken-1">
          {{ "$" + fnum(global.unsuccessful.goal) }}
        </p>
      </v-col>
      <v-col cols="1">
        <v-tooltip activator="parent" location="top">Fallidos</v-tooltip>
        <v-icon icon="mdi-skull" size="large" color="grey-darken-1"> </v-icon>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <p
              class="font-weight-thin text-center text-caption text-grey-darken-1"
            >
              Recaudado
            </p>
            <p class="font-weight-bold text-center text-grey-darken-1">
              {{ "$" + fnum(global.unsuccessful.collected) }}
            </p>
            <p
              class="font-weight-thin text-caption text-center text-grey-darken-1"
            >
              {{ fnum(percentage_unsuccessful) }} %
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps(["global", "ready"]);
const percentage_successful = computed(
  () => (props.global.successful.collected / props.global.successful.goal) * 100
);

const percentage_unsuccessful = computed(
  () =>
    (props.global.unsuccessful.collected / props.global.unsuccessful.goal) * 100
);
</script>

<style lang="scss" scoped></style>
