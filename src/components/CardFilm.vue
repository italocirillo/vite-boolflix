<script>
import LangFlag from 'vue-lang-code-flags';
export default {
    name: "Card",
    data() {
        return {
            countryList: ["am", "ar", "az", "bn", "be", "cact", "cs", "de", "el", "en", "es", "et", "fa", "fr", "bg", "ha", "hi", "hu", "hy", "it", "id", "ja", "jv", "km", "ko", "lv", "mr", "ms", "nl", "pl", "pt", "ro", "ru", "sw", "ta", "te", "th", "tr", "uk", "uz", "vi", "zh"]
        }
    },
    props: {
        film: Object,
    },
    components: { LangFlag }
}
</script>

<template>
    <div class="card" style="width: 18rem;">
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
                <lang-flag v-if="this.countryList.includes(film.original_language)" :iso="film.original_language"
                    :squared="false" :title=film.original_language />
                <div v-else>{{ film.original_language }}</div>
            </li>
            <li class=" list-group-item">{{ film.vote_average }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.card {
    height: 100%;
    background-color: bisque;
    color: black;
}
</style>