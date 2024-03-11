<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <v-img src="assets/png/Errante.png" height="300" />
      </v-col>
    </v-row> 
      <BaseCard :items="cards" />
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
          to: "/kickstarter",
        },
        {
          title: "Investigacion de Webtoon",
          img: "https://upload.wikimedia.org/wikipedia/commons/0/09/Naver_Line_Webtoon_logo.png",
          to: "/webtoon",
        },
        {
          title: "Investigacion de Royalavera",
          img: "https://upload.wikimedia.org/wikipedia/commons/0/09/Naver_Line_Webtoon_logo.png",
          to: "/royalavera",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
