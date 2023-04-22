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
    <div v-if="catalogoFilm.length === 0 || catalogoSerie === 0" class="nessun-film">
        <h1>Cerca un film o una serie</h1>
    </div>
    <div v-else>
        <!-- LOADING -->
        <div v-if="this.store.loading" class="container">
            <p>Loading... <i class="fa-sharp fa-solid fa-spinner"></i></p>
        </div>

        <div v-else class="container">
            <!-- FILM -->
            <div>
                <h2 v-if="catalogoFilm.length > 0" class="text-start p-3">FILM Trovati: {{
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
                <h2 v-if="catalogoSerie.length > 0" class="text-start p-3">SERIE Trovate: {{
                    catalogoSerie.length
                }}</h2>
                <div class="row row-cols-lg-6 row-cols-md-4 row-cols-sm-1 g-3">
                    <div class="col p-1" v-for="film in catalogoSerie" :key="film.id">
                        <CardFilm :film="film" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.nessun-film {
    padding: 20em 0em;
    text-align: center;

    h1 {
        text-transform: uppercase;
    }
}

.container {
    padding-top: 8em;
}
</style>