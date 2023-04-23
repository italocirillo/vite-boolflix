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
        },
        genereFilmSelezionato() {
            return this.store.genereFilmSelezionato;
        },
        genereSerieSelezionato() {
            return this.store.genereSerieSelezionato;
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
            <div v-if="this.store.filtroFilm">
                <h2 v-if="catalogoFilm.length > 0" class="text-start p-3">FILM Trovati:</h2>
                <div class="row row-cols-lg-6 row-cols-md-4 row-cols-sm-1 g-3">
                    <template v-for="film in catalogoFilm" :key="film.id">
                        <div class="col p-1"
                            v-if="film.genre_ids.includes(genereFilmSelezionato) || (genereFilmSelezionato === 1)">
                            <CardFilm :film="film" />
                        </div>
                    </template>
                </div>
            </div>
            <!-- SERIE TV  -->
            <div v-if="this.store.filtroSerie">
                <h2 v-if="catalogoSerie.length > 0" class="text-start p-3">SERIE Trovate:</h2>
                <div class="row row-cols-lg-6 row-cols-md-4 row-cols-sm-1 g-3">
                    <template v-for="film in catalogoSerie" :key="film.id">
                        <div class="col p-1"
                            v-if="film.genre_ids.includes(genereSerieSelezionato) || (genereSerieSelezionato === 1)">
                            <CardFilm :film="film" />
                        </div>
                    </template>
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
    padding-top: 10em;
}
</style>