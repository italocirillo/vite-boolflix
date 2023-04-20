<script>
import { store } from '../store';
import CardFilm from './CardFilm.vue';
import Ricerca from './Ricerca.vue';

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },
    emits: ["cerca"],
    components: { Ricerca, CardFilm },
}
</script>

<template>
    <!-- RICERCA -->
    <Ricerca @cerca="$emit('cerca')" />
    <!-- LOADING -->
    <div v-if="this.store.loading" class="container">
        <p>Loading... <i class="fa-sharp fa-solid fa-spinner"></i></p>
    </div>
    <div v-else class="container">
        <!-- FILM -->
        <div>
            <h2 v-if="this.store.catalogoFilm.length > 0" class="text-center p-3">FILM Trovati:{{
                this.store.catalogoFilm.length
            }}</h2>
            <div class="row row-cols-4 g-1">
                <div class="col p-1" v-for="film in this.store.catalogoFilm" :key="film.id">
                    <CardFilm :film="film" />
                </div>
            </div>
        </div>
        <!-- SERIE TV  -->
        <div>
            <h2 v-if="this.store.catalogoSerie.length > 0" class="text-center p-3">SERIE Trovate:{{
                this.store.catalogoSerie.length
            }}</h2>
            <div class="row row-cols-4 g-1">
                <div class="col p-1" v-for="film in this.store.catalogoSerie" :key="film.id">
                    <CardFilm :film="film" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>