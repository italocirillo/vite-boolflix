import { reactive } from "vue";

export const store = reactive({
    catalogoFilm: [],
    catalogoSerie: [],
    apiUrl: "https://api.themoviedb.org/3/search/",
    loading: false,
    filmDaCercare: "",
    filtroFilm: true,
    filtroSerie: true,
});