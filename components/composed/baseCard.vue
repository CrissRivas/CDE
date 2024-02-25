<template>
  <v-row>
    <v-col v-for="item in items">
      <v-card outlined height="300" theme="dark">
        <v-img :src="item.img" width="100px" height="100px" cover />
        <v-card-title> item.title </v-card-title>
        <v-card-actions>
          <v-btn outlined append-icon="mdi-arrow-right"> Ver Analisis </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
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
  // },
  // props: {
  //   items: {
  //     type: array,
  //     required: true,
  //     default: [],
  //   },
  // },
};
</script>

<style lang="scss" scoped></style>
