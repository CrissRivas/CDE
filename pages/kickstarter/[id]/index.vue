<template>
  <v-container>
    <v-row>
      <v-col sm="9">
        <p class="text-h2">{{ getP.name }}</p>
        <p
          class="font-weight-thin text-caption font-italic text-center text-grey-darken-1"
        >
          Creado por: {{ getP.artist }}
        </p>
        <br />
        <p>{{ getP.description }}</p>
      </v-col>
      <v-col>
        <v-card class="pa-2" variant="outlined">
          <v-row>
            <v-col>
              <p class="font-weight-thin">
                Del:
                <span class="font-weight-black text-body-1">{{ i_dte }}</span>
                <br />
                Al:
                <span class="font-weight-black text-body-1">{{ f_dte }}</span>
                <br />
                <span class="font-italic"> ( {{ d_dte }} días )</span>
              </p>
              <p class="text-caption text-center">
                <v-icon icon="mdi-map-marker" /> {{ getP.city }}
              </p>
              <v-card-actions>
                <v-btn
                  :href="getP.link"
                  append-icon="mdi-kickstarter"
                  size="x-large"
                  target="_blank"
                  block
                  variant="outlined"
                  rounded="xl"
                >
                  <template v-slot:append>
                    <v-icon color="green"></v-icon>
                  </template>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="1">
        <v-tooltip location="top" :text="getP.printed ? 'Impreso' : 'Digital'">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              variant="plain"
              size="x-large"
              :icon="getP.printed ? 'mdi-printer' : 'mdi-file-pdf-box'"
            ></v-btn>
          </template>
        </v-tooltip>
      </v-col>
      <v-col cols="1">
        <v-tooltip
          location="top"
          :text="getP.succes === 'succes' ? 'Logrado' : 'Fallido'"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              variant="plain"
              size="x-large"
              :color="
                getP.succes === 'succes' ? 'amber-accent-4' : 'grey-darken-1'
              "
              :icon="getP.succes === 'succes' ? 'mdi-crown' : 'mdi-skull'"
            ></v-btn>
          </template>
        </v-tooltip>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="pa-2">
          <v-row justify="center">
            <v-col sm="2" justify="center">
              <v-tooltip location="top" text="# de contribuidores">
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props" icon="mdi-account-group" />
                  <p>
                    {{ getP.sponsors }}
                  </p>
                </template>
              </v-tooltip>
            </v-col>
            <v-col sm="2" justify="center">
              <v-tooltip location="top" text="Meta inicial">
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props" icon="mdi-currency-usd" />
                  <v-icon v-bind="props" icon="mdi-run-fast" />
                  <p>
                    {{ "$" + comaFormat(getP.goal) }}
                  </p>
                </template>
              </v-tooltip>
            </v-col>
            <v-col sm="2" justify="center">
              <v-tooltip location="top" text="Recaudado">
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props" icon="mdi-currency-usd" />
                  <v-icon v-bind="props" icon="mdi-flag-checkered" />
                  <p>
                    {{ "$" + comaFormat(getP.collected) }}
                  </p>
                </template>
              </v-tooltip>
            </v-col>
            <v-col sm="2" justify="center" v-if="getP.printed">
              <v-tooltip location="top" text="Precio minimo de impresión">
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props" icon="mdi-currency-usd" />
                  <v-icon v-bind="props" icon="mdi-printer" />
                  <p>
                    {{ "$" + comaFormat(getP.minimun_printed) }}
                  </p>
                </template>
              </v-tooltip>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col sm="2" justify="center">
              <v-tooltip location="top" text="Ticket promedio">
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props" icon="mdi-currency-usd" />
                  <v-icon v-bind="props" icon="mdi-invoice-text-multiple" />
                  <p>
                    {{
                      "$" + comaFormat((getP.goal / getP.sponsors).toFixed(2))
                    }}
                  </p>
                </template>
              </v-tooltip>
            </v-col>
            <v-col sm="2" justify="center" v-if="getP.printed">
              <v-tooltip location="top" text="Porcentaje superado">
                <template v-slot:activator="{ props }">
                  <v-icon
                    v-bind="props"
                    icon="mdi-currency-usd"
                    :class="
                      getP.collected / getP.goal < 1.2
                        ? getP.collected / getP.goal < 1
                          ? 'text-grey-darken-1'
                          : 'text-amber-accent-4 font-weight-black'
                        : 'text-red-accent-1 font-weight-black'
                    "
                  />
                  <v-icon
                    v-bind="props"
                    icon="mdi-percent"
                    :class="
                      getP.collected / getP.goal < 1.2
                        ? getP.collected / getP.goal < 1
                          ? 'text-grey-darken-1'
                          : 'text-amber-accent-4 font-weight-black'
                        : 'text-red-accent-1 font-weight-black'
                    "
                  />
                  <p
                    :class="
                      getP.collected / getP.goal < 1.2
                        ? getP.collected / getP.goal < 1
                          ? 'text-grey-darken-1'
                          : 'text-amber-accent-4 font-weight-black'
                        : 'text-red-accent-1 font-weight-black'
                    "
                  >
                    {{ ((getP.collected / getP.goal) * 100).toFixed(2) + "%" }}
                  </p>
                </template>
              </v-tooltip>
            </v-col>

            <v-col sm="2" justify="center">
              <v-tooltip location="top" text="Combo más comprado">
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props" icon="mdi-currency-usd" />
                  <v-icon v-bind="props" icon="mdi-arrow-up-bold" />
                  <p>
                    {{ most.sponsors + " X $" + comaFormat(most.price) }}
                  </p>
                </template>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <!-- <tableSponsors :items="getP.sponsored" /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import tableSponsors from "@/components/composed/tableSponsors.vue";
import { format, differenceInDays } from "date-fns";
import es from "date-fns/locale/es";

export default {
  components: {
    tableSponsors,
  },
  data() {
    return {
      id: this.$route.params.id,
      ready: false,
      i_dte: "",
      f_dte: "",
      d_dte: "",
      most: {
        price: 0,
        sponsors: 0,
      },
      getP: {
        _id: "",
        initial_date: new Date(),
        final_date: new Date(),
        city: "",
        name: "",
        description: "",
        artist: "",
        classification: "",
        printed: false,
        closed: "",
        succes: "",
        goal: "",
        collected: "",
        sponsors: "",
        sponsored: [],
        minimun_printed: "",
        link: "",
      },
    };
  },
  async mounted() {
    this.getP = await getPr(this.id);
    this.i_dte = this.FD(this.getP.initial_date);
    this.f_dte = this.FD(this.getP.final_date);
    this.d_dte = this.difDates(this.getP.initial_date, this.getP.final_date);
    this.most = this.mostSponsors(this.getP.sponsored);
  },
  methods: {
    mostSponsors(array) {
      return array.reduce((mostSponsor, objt) => {
        return objt.sponsors > mostSponsor.sponsors ? objt : mostSponsor;
      }, array[0]);
    },
    difDates(inicio, fin) {
      return differenceInDays(fin, inicio);
    },
    comaFormat(dato) {
      const exp = /(\d)(?=(\d{3})+(?!\d))/g;
      const rep = "$1,";
      let arr = dato.toString().split(".");
      arr[0] = arr[0].replace(exp, rep);
      return arr[1] ? arr.join(".") : arr[0];
    },
    FD(data) {
      return format(data, "d 'de' MMMM 'del' yyyy", { locale: es });
    },
  },
};
</script>

<style lang="scss" scoped></style>
