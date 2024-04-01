<template>
  <div>
    <v-toolbar
      :collapse="collapse"
      color="white"
      density="compact"
      class="mb-2"
    >
      <template v-slot:prepend>
        <NuxtLink to="/" class="d-flex align-center">
          <img src="assets/png/logo.png" height="40 " />
        </NuxtLink>
      </template>
      <v-row justify="center" align="center">
        <v-col v-if="!collapse" cols="10" class="d-sm-none">
          <v-text-field
            density="compact"
            variant="solo"
            label="Buscar temas"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
        <v-col v-if="!collapse" cols="4" class="d-none d-sm-flex">
          <v-text-field
            density="compact"
            variant="solo"
            label="Buscar temas"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>

      <template v-slot:append>
        <v-btn icon @click="collapse = !collapse">
          <v-icon size="x-large" v-if="collapse">mdi-magnify</v-icon>
          <v-icon size="x-large" v-else>mdi-chevron-left</v-icon>
        </v-btn>
      </template>
    </v-toolbar>

    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let collapse = ref(true);
</script>
