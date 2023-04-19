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
        query: "Vita",
      };

      axios.get(this.store.apiUrl, {
        params
      }).then((resp) => {
        console.log(resp.data);
      })

    }
  }
}

</script>
<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>