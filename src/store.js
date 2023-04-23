import { reactive } from "vue";

export const store = reactive({
    catalogoFilm: [],
    catalogoSerie: [],
    apiUrl: "https://api.themoviedb.org/3/",
    loading: false,
    barraRicerca: false,
    filmDaCercare: "",
    filtroFilm: true,
    filtroSerie: true,
    genereFilmSelezionato: 1,
    genereSerieSelezionato: 1,
});