<script>
import { store } from "../store";
export default {
    name: "Ricerca",
    emits: ["cerca"],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="w-50 input-group mb-3 ">
        <input @keyup.enter="$emit('cerca')" type="search" class="form-control" placeholder="Ricerca film"
            aria-label="Ricerca" aria-describedby="basic-addon1" v-model="this.store.filmDaCercare">
        <button @click="$emit('cerca')" class="input-group-text" id="basic-addon1"><i
                class="fa-solid fa-magnifying-glass"></i></button>
    </div>
</template>

<style lang="scss"></style>