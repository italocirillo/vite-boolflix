<script>
import LangFlag from 'vue-lang-code-flags';
export default {
    name: "Card",
    data() {
        return {
            countryList: ["am", "ar", "az", "bn", "be", "cact", "cs", "de", "el", "en", "es", "et", "fa", "fr", "bg", "ha", "hi", "hu", "hy", "it", "id", "ja", "jv", "km", "ko", "lv", "mr", "ms", "nl", "pl", "pt", "ro", "ru", "sw", "ta", "te", "th", "tr", "uk", "uz", "vi", "zh"]
        }
    },
    computed: {
        lingua() {
            return this.film.original_language;
        },
        valutazione() {
            return Math.ceil((this.film.vote_average / 2));
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
        <img v-if="film.poster_path !== null" :src="'https://image.tmdb.org/t/p/w342' + film.poster_path"
            class="card-img-top" :alt="film.title + ': immagine non trovata'">
        <h2 v-else>IMMAGINE NON DISPONIBILE</h2>
        <div class="card-body">
            <h5 v-if="film.title" class="card-title">{{ film.title }}</h5>
            <h5 v-else class="card-title">{{ film.name }}</h5>
            <p v-if="film.original_title" class="card-text">{{ film.original_title }}</p>
            <p v-else>{{ film.original_name }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <lang-flag v-if="this.countryList.includes(lingua)" :iso="lingua" :squared="false" :title=lingua />
                <div v-else>{{ lingua }}</div>
            </li>
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