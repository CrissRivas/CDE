<template>
  <v-card density="compact" variant="flat">
    <v-card-actions>
      <p class="text-h6">{{ title }}</p>
      <v-spacer></v-spacer>

      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <p>
            {{ text }}
          </p>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  props: {
    text: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped></style>
