<script>
export default {
    name: "Card",
    props: {
        film: Object,
    }
}
</script>

<template>
    <div class="card" style="width: 18rem;">
        <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" class="card-img-top"
            :alt="film.title + ': immagine non trovata'">
        <div class="card-body">
            <h5 class="card-title">{{ film.title }}</h5>
            <p class="card-text">{{ film.original_title }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ film.original_language }}</li>
            <li class="list-group-item">{{ film.vote_average }}</li>
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