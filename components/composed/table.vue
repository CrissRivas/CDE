<template>
  <v-data-table
    v-model:page="page"
    :headers="headers"
    :items="items"
    item-key="name"
    :items-per-page="itemsPerPage"
    density="compact"
    items-per-page-text="Filas por pagina"
    hover
  >
    <template v-slot:header.name>
      <p class="font-weight-bold text-h6">{{ title }}</p>
    </template>
    <template v-slot:header.projects>
      <v-tooltip activator="parent" location="top">Logrados</v-tooltip>
      <v-icon icon="mdi-crown" size="x-large" color="amber-accent-4"></v-icon>
    </template>
    <template v-slot:header.fail>
      <v-tooltip activator="parent" location="top">Fallidos</v-tooltip>
      <v-icon icon="mdi-skull" size="x-large" color="grey-darken-1"></v-icon>
    </template>

    <template v-slot:item.projects="{ item }">
      <p class="font-weight-bold text-amber-accent-4">{{ item.projects }}</p>
    </template>
    <template v-slot:item.fail="{ item }">
      <p class="font-weight-thin text-grey-darken-1">{{ item.fail }}</p>
    </template>
    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination
          v-if="pagination"
          v-model="page"
          rounded="circle"
          density="compact"
          :length="pageCount"
        ></v-pagination>
      </div>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      itemsPerPage: 10,
      pagination: true,
      headers: [
        {
          key: "name",
          align: "start",
        },
        {
          key: "projects",
          align: "center",
        },
        {
          key: "fail",
          align: "center",
        },
      ],
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    end: {
      type: Boolean,
      required: false,
      default: false,
    },
    fail_end: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    pageCount() {
      const pages = Math.ceil(this.items.length / this.itemsPerPage);
      pages <= 1 ? (this.pagination = false) : (this.pagination = true);
      // if (pages == 1) this.pagination = false;
      return pages;
    },
  },
};
</script>

<style lang="scss" scoped></style>
