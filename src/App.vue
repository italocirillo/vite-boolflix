<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from "axios";
import { store } from "./store";

export default {
  components: { AppHeader, AppMain },
  emits: ["cerca", "richiediInfoFilm", "richiediInfoSerie"],
  data() {
    return {
      store
    }
  },
  computed: {
    idSelezionato() {
      return this.store.idSelezionato;
    }
  },
  mounted() {
    // Ottieni Generi
    this.ottieniGenereCategoria("movie");
    this.ottieniGenereCategoria("tv");
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
        if (categoria === "movie") {
          this.store.generiFilm = resp.data.genres;
        } else if (categoria === "tv") {
          this.store.generiSerie = resp.data.genres;
        }
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        this.store.loading = false;
      })
    },

    //RichiediInfo
    richiediInfo(categoria, id) {
      const params = {
        api_key: "98f46d7d18a354762b374158a8da360e",
        language: "it-IT",
      };
      // Chiamata axios
      axios.get(this.store.apiUrl + `${categoria}/` + `${id}`, {
        params
      }).then((resp) => {
        console.log(resp.data.genres);
      }).catch((error) => {
        console.log(error);
      })
    }
  }
}

</script>
<template>
  <AppHeader @cerca="eseguiRicerca" />
  <AppMain @richiediInfoFilm="richiediInfo('movie', idSelezionato)"
    @richiediInfoSerie="richiediInfo('tv', idSelezionato)" />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>