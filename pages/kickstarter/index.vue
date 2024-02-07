<template>
  <div>
    {{ datos }}
  </div>
</template>

<script lang="ts">
import { getKickAnalitycs, getKick } from "@/composables/backend";
export default {
  data() {
    return {
      datos: {},
    };
  },
  async mounted() {
    this.datos = await getKick(10, 20);
  },
};
</script>

<style lang="scss" scoped></style>
