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

    <div class="container">
        <h2 class="text-center p-3">Film Trovati</h2>
        <div class="row row-cols-4 g-1">
            <div class="col p-1" v-for="film in store.catalogoFilm" :key="film.id">
                <CardFilm :film="film" />
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>