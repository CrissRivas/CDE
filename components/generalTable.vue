<template>
  <v-data-table
    v-model:page="page"
    :headers="headers"
    :items="table"
    item-key="name"
    :items-per-page="itemsPerPage"
    density="compact"
    items-per-page-text="Filas por pagina"
    hover
  >
    <template v-slot:header.name>
      <p class="font-weight-bold text-h6">{{ title }}</p>
    </template>
    <template v-slot:header.successful>
      <v-tooltip activator="parent" location="top">Logrados</v-tooltip>
      <v-icon icon="mdi-crown" size="x-large" color="amber-accent-4"></v-icon>
    </template>
    <template v-slot:header.unsuccessful>
      <v-tooltip activator="parent" location="top">Fallidos</v-tooltip>
      <v-icon icon="mdi-skull" size="x-large" color="grey-darken-1"></v-icon>
    </template>

    <template v-slot:item.name="{ item }">
      <p>
        {{
          typeof item.name === "string"
            ? item.name
            : prefix + (cast ? fnum(item.name) : item.name) + subfix
        }}
      </p>
    </template>
    <template v-slot:item.successful="{ item }">
      <p class="font-weight-bold text-amber-accent-4">{{ item.successful }}</p>
    </template>
    <template v-slot:item.unsuccessful="{ item }">
      <p class="font-weight-thin text-grey-darken-1">{{ item.unsuccessful }}</p>
    </template>
    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination
          v-if="pageCount <= 1 ? false : true"
          v-model="page"
          rounded="circle"
          density="compact"
          :length="pageCount"
        />
      </div>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TableItem } from "~/composables/apiDTO";

const props = defineProps<{
  table: TableItem[]; // Declara que el prop table es un array de elementos de tipo TableItem
  title: string;
  prefix: { type: string; required: false; default: "" };
  subfix: { type: string; required: false; default: "" };
  cast: boolean;
}>();

const itemsPerPage = 10;
const headers: any = [
  {
    key: "name",
    align: "start",
  },
  {
    key: "successful",
    align: "center",
  },
  {
    key: "unsuccessful",
    align: "center",
  },
];
let page = ref(1);

const pageCount = computed(() => Math.ceil(props.table.length / itemsPerPage));
</script>

<style lang="scss" scoped></style>
