<script>
import LangFlag from 'vue-lang-code-flags';
import flag from 'vue-lang-code-flags/relation';
export default {
    name: "Card",
    data() {
        return {
            flag
        }
    },
    computed: {
        lingua() {
            return this.film.original_language;
        },
        valutazione() {
            return Math.ceil((this.film.vote_average / 2));
        },
        titoloFilm() {
            if (this.film.title) {
                return this.film.title;
            } else {
                return this.film.name;
            }
        },
        titoloOriginale() {
            if (this.film.original_title) {
                return this.film.original_title;
            } else {
                return this.film.original_name;
            }
        }
    },
    props: {
        film: Object,
    },
    components: { LangFlag }
}
</script>

<template>
    <div class="card">
        <!-- Immagine -->
        <img v-if="film.poster_path !== null" :src="'https://image.tmdb.org/t/p/w342' + film.poster_path"
            class="card-img-top" :alt="titoloFilm + ': immagine non trovata'">
        <h2 v-else>IMMAGINE NON DISPONIBILE</h2>
        <!-- Titolo -->
        <div class="card-body">
            <h5 class="card-title">{{ titoloFilm }}</h5>
            <!-- Controllo che il titolo originale e il titolo non coincidano -->
            <p v-if="titoloOriginale !== titoloFilm" class="card-text">{{ titoloOriginale }}</p>
        </div>
        <!-- Info -->
        <!-- Lingua -->
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <lang-flag v-if="Object.keys(this.flag).includes(lingua)" :iso="lingua" :squared="false" :title=lingua />
                <div v-else>{{ lingua }}</div>
            </li>
            <!-- Valutazione -->
            <li class=" list-group-item valutazione">
                <ul>
                    <li v-for="n in 5">
                        <i v-if="n <= valutazione" class="fa-solid fa-star"></i>
                        <i v-else class="fa-regular fa-star"></i>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.card {
    height: 100%;
    background-color: rgb(96, 167, 167);
    color: black;

    .valutazione {
        ul {
            padding: 0em;
            width: 100%;
            list-style: none;
            display: flex;
            justify-items: flex-start;
            justify-content: space-between;

            i {
                color: rgb(218, 157, 3);
            }
        }
    }

}
</style>