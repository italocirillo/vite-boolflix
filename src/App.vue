<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from "axios";
import { store } from "./store";

export default {
  components: { AppHeader, AppMain },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.ottieniFilm();
  },

  methods: {
    ottieniFilm() {
      const params = {
        api_key: "98f46d7d18a354762b374158a8da360e",
        language: "it-IT"
      };
      if (this.store.statoRicerca) {
        params.query = this.store.filmDaCercare;
        axios.get(this.store.apiUrl, {
          params
        }).then((resp) => {
          this.store.catalogoFilm = resp.data.results;
          console.log(resp.data.results);
        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          this.store.statoRicerca = false;
        })
      }
    },
    eseguiRicerca() {
      this.store.statoRicerca = true;
      this.ottieniFilm();
      this.store.filmDaCercare = "";
    }
  }
}

</script>
<template>
  <AppHeader />
  <AppMain @cerca="eseguiRicerca" />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>