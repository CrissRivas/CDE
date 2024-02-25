<template>
  <div>
    <v-toolbar
      :collapse="collapse"
      color="white"
      density="compact"
      class="mb-4"
    >
      <template v-if="collapse" v-slot:prepend>
        <v-btn icon @click="collapse = !collapse">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
      <v-row justify="center">
        <v-col v-if="!collapse" cols="3">
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
          <v-icon size="x-large" v-if="collapse">mdi-chevron-right</v-icon>
          <v-icon size="x-large" v-if="!collapse">mdi-chevron-left</v-icon>
        </v-btn>
      </template>
    </v-toolbar>

    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: true,
    };
  },
};
</script>
