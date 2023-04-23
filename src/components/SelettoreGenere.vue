<script>
import { store } from "../store";
export default {
    name: "SelettoreGenere",
    emits: ["ottieniGeneriFilm", "ottieniGeneriSerie"],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <form>
        <select class="form-select form-select-sm mb-2" aria-label=".form-select-sm example"
            @click.stop="$emit('ottieniGeneriFilm')">
            <option selected>Generi film</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </form>
    <form>
        <select class="form-select form-select-sm pb-2" aria-label=".form-select-sm example"
            @click.stop="$emit('ottieniGeneriSerie')">
            <option selected>Generi serie</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </form>
</template>

<style lang="scss" scoped></style>