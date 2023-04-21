<script>
import { store } from '../store';
import CardFilm from './CardFilm.vue';

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },
    computed: {
        catalogoFilm() {
            return this.store.catalogoFilm;
        },
        catalogoSerie() {
            return this.store.catalogoSerie;
        }

    },
    emits: ["cerca"],
    components: { CardFilm },
}
</script>

<template>
    <!-- LOADING -->
    <div v-if="this.store.loading" class="container">
        <p>Loading... <i class="fa-sharp fa-solid fa-spinner"></i></p>
    </div>

    <div v-else class="container">
        <!-- FILM -->
        <div>
            <h2 v-if="catalogoFilm.length > 0" class="text-center p-3">FILM Trovati: {{
                catalogoFilm.length
            }}</h2>
            <div class="row row-cols-lg-6 row-cols-md-4 row-cols-sm-1 g-3">
                <div class="col p-1" v-for="film in catalogoFilm" :key="film.id">
                    <CardFilm :film="film" />
                </div>
            </div>
        </div>
        <!-- SERIE TV  -->
        <div>
            <h2 v-if="catalogoSerie.length > 0" class="text-center p-3">SERIE Trovate: {{
                catalogoSerie.length
            }}</h2>
            <div class="row row-cols-lg-6 row-cols-md-4 row-cols-sm-1 g-3">
                <div class="col p-1" v-for="film in catalogoSerie" :key="film.id">
                    <CardFilm :film="film" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>