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
    <Ricerca @cerca="$emit('cerca')" />

    <div v-if="this.store.loading" class="container">
        <p>Loading... <i class="fa-sharp fa-solid fa-spinner"></i></p>
    </div>
    <div v-else class="container">
        <h2 v-if="this.store.catalogoFilm.length > 0" class="text-center p-3">Film Trovati:{{ this.store.catalogoFilm.length
        }}</h2>
        <div class="row row-cols-4 g-1">
            <div class="col p-1" v-for="film in store.catalogoFilm" :key="film.id">
                <CardFilm :film="film" />
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>