<script>
import { store } from "../store";
export default {
    name: "SelettoreGenere",
    data() {
        return {
            store
        }
    },
    computed: {
        filtroFilm() {
            return this.store.filtroFilm;
        },
        filtroSerie() {
            return this.store.filtroSerie;
        },
        generiFilm() {
            return this.store.generiFilm;
        },
        generiSerie() {
            return this.store.generiSerie;
        },
    }
}
</script>

<template>
    <form>
        <select v-if="filtroFilm === true" class="form-select form-select-sm mb-2" aria-label=".form-select-sm example"
            v-model="this.store.genereFilmSelezionato">
            <option :value=1>Tutti</option>
            <option v-for="genere in generiFilm" :key="genere.id" :value="genere.id">{{
                genere.name }}</option>
        </select>
    </form>
    <form>
        <select v-if="filtroSerie === true" class="form-select form-select-sm pb-2" aria-label=".form-select-sm example"
            v-model="this.store.genereSerieSelezionato">
            <option :value=1>Tutti</option>
            <option v-for="genere in generiSerie" :key="genere.id" :value="genere.id">{{ genere.name }}</option>
        </select>
    </form>
</template>

<style lang="scss" scoped></style>