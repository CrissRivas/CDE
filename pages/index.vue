<template>
  <v-container>
    <v-row justify="center">
      <BaseCard />
    </v-row>
  </v-container>
</template>

<script>
import BaseCard from "@/components/composed/baseCard.vue";
export default {
  components: {
    BaseCard,
  },
  setup() {
    useHead({
      title: "Camino del Errante",
    });
  },
  data() {
    return {
      cards: [
        {
          title: "Investigacion de Kickstater",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Kickstarter_logo_2019.svg/1920px-Kickstarter_logo_2019.svg.png",
        },
        {
          title: "Investigacion de Webtoon",
          img: "https://upload.wikimedia.org/wikipedia/commons/0/09/Naver_Line_Webtoon_logo.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
