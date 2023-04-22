<script>
import { store } from "../store";
export default {
    name: "SelettoreGenere",
    emits: ["ottieniGeneri"],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <form>
        <select class="form-select form-select-sm " aria-label=".form-select-sm example" @click="$emit('ottieniGeneri')">
            <option selected>Generi film/tv</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </form>
</template>

<style lang="scss" scoped></style>