<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from "axios";
import { store } from "./store";

export default {
  components: { AppHeader, AppMain },
  emits: ["cerca,ottienGeneriFilm,ottieniGeneriSerie"],
  data() {
    return {
      store
    }
  },

  methods: {
    // Ottieni Film
    ottieniFilm(ricercaCategoria) {
      this.store.loading = true;
      const params = {
        api_key: "98f46d7d18a354762b374158a8da360e",
        language: "it-IT"
      };
      params.query = this.store.filmDaCercare;
      // Chiamata axios
      axios.get(this.store.apiUrl + "search/" + ricercaCategoria, {
        params
      }).then((resp) => {
        // Scelta tra movie e serie
        if (ricercaCategoria === "movie") {
          this.store.catalogoFilm = resp.data.results;
          console.log(resp.data.results);
        } else if (ricercaCategoria === "tv") {
          this.store.catalogoSerie = resp.data.results;
          console.log(resp.data.results);
        }
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        this.store.loading = false;
      })
    },

    // Cerca Film
    eseguiRicerca() {
      this.store.barraRicerca = !this.store.barraRicerca;
      this.ottieniFilm("movie");
      this.ottieniFilm("tv");
      this.store.filmDaCercare = "";
    },

    // Ottieni Generi

    ottieniGenereCategoria(categoria) {
      this.store.loading = true;
      const params = {
        api_key: "98f46d7d18a354762b374158a8da360e",
        language: "it-IT"
      }
      axios.get(this.store.apiUrl + `/genre/${categoria}/list`, {
        params
      }).then((resp) => {
        console.log(resp.data.genres);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        this.store.loading = false;
      })
    },
    ottieniGeneriFilm() {
      this.ottieniGenereCategoria("movie");
    },
    ottieniGeneriSerie() {
      this.ottieniGenereCategoria("tv");
    }
  }
}

</script>
<template>
  <AppHeader @cerca="eseguiRicerca" @ottieniGeneriFilm="ottieniGeneriFilm" @ottieniGeneriSerie="ottieniGeneriSerie" />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>