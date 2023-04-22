<script>
import LangFlag from 'vue-lang-code-flags';
import flag from '../../node_modules/vue-lang-code-flags';
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
        },
        descrizione() {
            return this.film.overview;
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
        transition: 2s;

        .card-body {
            text-align: center;
            overflow-y: auto;
            color: black;
            background-color: rgba($color: #f9f9f9, $alpha: 0.3);

            h4 {
                text-transform: uppercase;
                font-size: 1rem;
                font-weight: 900;
                color: #f9f9f9;
            }

            h5 {
                text-transform: uppercase;
                color: rgb(39, 38, 38);
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
    }

    .immagine-poster {
        transition: 0.5s;
    }

}

.card:hover {
    animation: capovolgi 1s linear;

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