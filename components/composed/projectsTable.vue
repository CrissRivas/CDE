<template>
  <v-card variant="flat">
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Buscar.."
        prepend-inner-icon="mdi-magnify"
        density="compact"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>
    <v-data-table
      :headers="headers"
      :items="items"
      v-model:page="page"
      :search="search"
      item-key="_id"
      density="compact"
      :custom-filter="filterTextComa"
      :items-per-page="itemsPerPage"
      items-per-page-text="Filas por pagina"
      hover
    >
      <!-- Fecha inicial -->
      <template v-slot:header.initial_date>
        <v-tooltip activator="parent" location="top">
          Inicio de campaña
        </v-tooltip>
        <v-icon size="x-large" icon="mdi-calendar-start"></v-icon>
      </template>

      <template v-slot:item.initial_date="{ item }">
        <p class="text-caption">
          {{ FD(item.initial_date) }}
        </p>
      </template>
      <!-- Fecha inicial -->
      <!-- Fecha final -->
      <template v-slot:header.final_date>
        <v-tooltip activator="parent" location="top">
          Final de campaña
        </v-tooltip>
        <v-icon size="x-large" icon="mdi-calendar-end"></v-icon>
      </template>
      <template v-slot:item.final_date="{ item }">
        <p class="text-caption">
          {{ FD(item.final_date) }}
        </p>
      </template>
      <!-- Fecha inicial -->
      <!-- Localidad -->
      <template v-slot:header.city>
        <v-tooltip activator="parent" location="top"> Locación </v-tooltip>
        <v-icon size="x-large" icon="mdi-map-marker"></v-icon>
      </template>
      <template v-slot:item.city="{ item }">
        <v-chip
          density="comfortable"
          size="small"
          @click="addSearch(item.city)"
        >
          {{ item.city }}
        </v-chip>
      </template>

      <!-- Localidad -->

      <!-- Nombre -->
      <template v-slot:header.name>
        <v-tooltip activator="parent" location="top"> Nombre </v-tooltip>
        <v-icon size="x-large" icon="mdi-book-open-page-variant"></v-icon>
      </template>

      <template v-slot:item.name="{ item }">
        <p class="text-caption">{{ item.name }}</p>
      </template>
      <!-- Nombre -->
      <!-- Artista -->
      <template v-slot:header.artist>
        <v-tooltip activator="parent" location="top"> Artista </v-tooltip>
        <v-icon size="x-large" icon="mdi-palette"></v-icon>
        <v-icon size="x-large" icon="mdi-head-lightbulb"></v-icon>
      </template>
      <template v-slot:item.artist="{ item }">
        <v-chip
          density="comfortable"
          size="small"
          @click="addSearch(item.artist)"
        >
          {{ item.artist }}
        </v-chip>
      </template>
      <!-- Artista -->
      <!-- Clasificación -->
      <template v-slot:header.classification>
        <v-tooltip activator="parent" location="top"> Clasificación </v-tooltip>
        <v-icon size="x-small" icon="mdi-alpha-e-box"></v-icon>
      </template>
      <template v-slot:item.classification="{ item }">
        <v-chip density="comfortable" size="small">
          {{ item.classification }}
        </v-chip>
      </template>

      <!-- Clasificación -->
      <!-- Impreso -->
      <template v-slot:header.printed>
        <v-tooltip activator="parent" location="top"> Impreso </v-tooltip>
        <v-icon size="x-small" icon="mdi-printer"></v-icon>
      </template>
      <!-- Impreso -->
      <template v-slot:item.printed="{ item }">
        <v-icon size="x-small" icon="mdi-printer" v-if="item.printed" />
        <v-icon
          size="x-small"
          icon="mdi-printer-pos-off-outline"
          color="grey-darken-1"
          v-else
        />
      </template>
      <!-- Logrados -->
      <template v-slot:header.succes>
        <v-tooltip activator="parent" location="top"> Logrados </v-tooltip>
        <v-icon size="x-small" icon="mdi-crown" color="amber-accent-4"></v-icon>
      </template>
      <template v-slot:item.succes="{ item }">
        <v-icon
          size="x-small"
          icon="mdi-crown"
          color="amber-accent-4"
          v-if="item.succes == 'succes'"
        />
        <v-icon size="x-small" icon="mdi-skull" color="grey-darken-1" v-else />
      </template>
      <!-- Logrados -->
      <!-- Meta inicial -->
      <template v-slot:header.goal>
        <v-tooltip activator="parent" location="top"> Meta inicial </v-tooltip>
        <v-icon size="x-large" icon="mdi-currency-usd"></v-icon>
        <v-icon size="x-large" icon="mdi-run-fast"></v-icon>
      </template>
      <template v-slot:item.goal="{ item }">
        <p class="text-caption">{{ "$" + comaFormat(item.goal) }}</p>
      </template>
      <!-- Meta inicial -->
      <!--  Dinero recaudado -->
      <template v-slot:header.collected>
        <v-tooltip activator="parent" location="top">
          Dinero recaudado
        </v-tooltip>
        <v-icon size="x-large" icon="mdi-currency-usd"></v-icon>
        <v-icon size="x-large" icon="mdi-flag-checkered"></v-icon>
      </template>
      <template v-slot:item.collected="{ item }">
        <p
          :class="
            item.collected / item.goal < 1.2
              ? item.collected / item.goal < 1
                ? 'text-caption text-grey-darken-1'
                : 'text-caption text-amber-accent-4'
              : 'text-caption text-red-accent-1'
          "
        >
          {{ "$" + comaFormat(item.collected) }}
        </p>
      </template>
      <!--  Dinero recaudado -->
      <!-- Kickstarter -->
      <template v-slot:header.link>
        <v-tooltip activator="parent" location="top"> Kickstarter </v-tooltip>
        <v-icon size="x-small" icon="mdi-kickstarter" color="green"></v-icon>
      </template>
      <template v-slot:item.link="{ item }">
        <v-btn
          :href="item.link"
          append-icon="mdi-kickstarter"
          density="compact"
          size="x-small"
          variant="plain"
          target="_blank"
        >
          <template v-slot:append>
            <v-icon color="green"></v-icon>
          </template>
        </v-btn>
      </template>
      <!-- Kickstarter -->
      <!--  Reporte detallado-->
      <template v-slot:header._id>
        <v-tooltip activator="parent" location="top">
          Reporte detallado
        </v-tooltip>
        <v-icon size="x-small" icon="mdi-finance"></v-icon>
      </template>
      <template v-slot:item._id="{ item }">
        <v-btn
          :to="'/kickstarter/' + item._id"
          icon="mdi-finance"
          size="x-small"
          variant="plain"
        >
        </v-btn>
      </template>
      <!--  Reporte detallado-->

      <!-- Paginacion -->
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
      <!-- Paginacion -->
    </v-data-table>
  </v-card>
</template>

<script>
import { format } from "date-fns";

export default {
  data() {
    return {
      search: "",
      page: 1,
      itemsPerPage: 15,
      pagination: true,
      headers: [
        { key: "initial_date", align: "center", width: 10 },
        { key: "final_date", align: "center", width: 10 },
        { key: "city", align: "center", width: 10 },
        { key: "name", align: "center", width: 500 },
        { key: "artist", align: "center", width: 300 },
        { key: "goal", align: "center", width: 1 },
        { key: "collected", align: "center", width: 1 },
        { key: "classification", align: "center", width: 1 },
        { key: "printed", align: "center", width: 1 },
        { key: "succes", align: "center", width: 1 },
        { key: "link", align: "center", width: "10px" },
        { key: "_id", align: "center", width: "10px" },
      ],
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    FD(data) {
      return format(new Date(data), "dd/MM/yyyy");
    },
    comaFormat(dato) {
      const exp = /(\d)(?=(\d{3})+(?!\d))/g;
      const rep = "$1,";
      let arr = dato.toString().split(".");
      arr[0] = arr[0].replace(exp, rep);
      return arr[1] ? arr.join(".") : arr[0];
    },
    filterTextComa(value, query, item) {
      if (value != null && query != null && typeof value === "string") {
        const queryArray = query.split(",");
        for (let i = 0; i < queryArray.length; i++) {
          if (value.toLowerCase().includes(queryArray[i].trim().toLowerCase()))
            return true;
        }
        return false;
      }
      return false;
    },
    addSearch(query) {
      this.search += this.search === "" ? query : "," + query;
    },
  },
  computed: {
    pageCount() {
      const pages = Math.ceil(this.items.length / this.itemsPerPage);
      if (pages == 1) this.pagination = false;
      return pages;
    },
  },
};
</script>
