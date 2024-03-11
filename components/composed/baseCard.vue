<template>
  <v-row justify="center" align="center">
    <v-col v-for="item in items" align="center">
      <v-card
        variant="outlined"
        height="200"
        theme="dark"
        class="pa-2"
        :rounded="100"
        max-width="340"
        :to="item.to"
      >
        <v-img :src="item.img" height="100px" />
        <v-card-title> {{ item.title }} </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
