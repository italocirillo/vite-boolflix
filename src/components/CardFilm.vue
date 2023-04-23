<script>
import LangFlag from 'vue-lang-code-flags';
import flag from 'vue-lang-code-flags/relation';
import { store } from '../store';
export default {
    name: "Card",
    emits: ["richiediInfo"],
    data() {
        return {
            store,
            flag,
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
        },
        descrizione() {
            return this.film.overview;
        },
        listaGeneriFilmSelezionato() {
            return this.store.listaGeneriFilmSelezionato;
        },
        listaAttoriFilmSelezionato() {
            return this.store.listaAttoriFilmSelezionato;
        },
    },
    props: {
        film: Object,
    },
    components: { LangFlag }
}
</script>

<template>
    <div class="card">
        <!-- Poster -->
        <div class="immagine-poster">
            <!-- Immagine -->
            <img v-if="film.poster_path !== null" :src="'https://image.tmdb.org/t/p/w342' + film.poster_path"
                class="card-img-top" :alt="titoloFilm + ': immagine non trovata'">
            <img class="card-img-top" v-else src="../assets/img/image-not-found.png" :alt="titoloFilm">
        </div>
        <!-- Informazioni Film -->
        <div class="informazioni-film">
            <!-- Titolo -->
            <div class="card-body">
                <h4 class="card-title">{{ titoloFilm }}</h4>
                <!-- Controllo che il titolo originale e il titolo non coincidano -->
                <h5 v-if="titoloOriginale !== titoloFilm" class="card-text">{{ titoloOriginale }}</h5>
                <p class="card-text">{{ descrizione }}</p>
            </div>
            <!-- Info -->
            <!-- Lingua -->
            <ul class=" list-group list-group-flush">
                <li class="list-group-item">
                    <lang-flag v-if="Object.keys(this.flag).includes(lingua)" :iso="lingua" :squared="false"
                        :title=lingua />
                    <p v-else class="text-light">{{ lingua }}</p>
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
            <!-- Maggiori info -->
            <div class="dropdown" @click="this.store.idSelezionato = this.film.id;
            this.$emit('richiediInfo');">
                <button class="btn btn-secondary dropdown-toggle info" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <span>Maggiori info <i class="fa-solid fa-circle-info"></i></span>
                </button>
                <div class="dropdown-menu">
                    <div>
                        <strong>generi: </strong>
                        <ul>
                            <li v-for="( genere, index ) in  listaGeneriFilmSelezionato  " :key=" index " class="info-lista">
                                {{ genere }},</li>
                        </ul>
                    </div>
                    <div>
                        <strong>attori: </strong>
                        <ul>
                            <li v-for="( attori, index ) in  listaAttoriFilmSelezionato  " :key=" index " class="info-lista">
                                {{ attori }},
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    height: 100%;
    width: 100%;
    background-color: #1b1b1b;
    color: black;
    cursor: pointer;
    position: relative;

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

    .informazioni-film {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0%;
        transition: 1s;

        .card-body {
            text-align: center;
            overflow-y: auto;
            color: black;
            background-color: rgba($color: #f9f9f9, $alpha: 0.8);

            h4 {
                text-transform: uppercase;
                font-size: 1rem;
                font-weight: 900;
                color: rgb(39, 38, 38);
            }

            h5 {
                text-transform: uppercase;
                color: #f9f9f9;
                font-size: 0.5rem;
            }

            p {
                text-align: start;
                color: rgb(49, 35, 25);
            }
        }

        .list-group-item {
            background-color: #1b1b1b;
            padding: 0em 1em;
        }

        .info {
            font-size: 0.7rem;
            background-color: rgba($color: #a5a3a3, $alpha: 0.5);
            padding: 0em;
        }

        .dropdown-menu {

            strong {
                text-transform: uppercase;
                display: inline-block;
                font-size: 0.6rem;
                padding: 0;
            }

            ul {
                list-style: none;
                list-style-type: none;
                display: inline;
                padding: 0;

                li {
                    display: inline-block;
                    font-size: 0.6rem;
                }
            }
        }
    }

    .immagine-poster {
        transition: 0.25s;
    }

}

.card:hover {
    animation: capovolgi 0.5s linear;

    .informazioni-film {
        opacity: 100%;
    }

    .immagine-poster {
        visibility: hidden;
    }
}


@keyframes capovolgi {
    0% {
        transform: rotateY(0deg);
    }

    100% {
        transform: rotateY(180deg);
        opacity: 0%;
    }

}
</style>