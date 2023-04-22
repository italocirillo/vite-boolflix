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
    <form @submit.prevent="">
        <i v-if="this.store.barraRicerca === false" class="fa-solid fa-magnifying-glass px-2 fs-3"
            @click="this.store.barraRicerca = !this.store.barraRicerca"></i>
        <div v-else class=" input-group">
            <input type="search" class="form-control" placeholder="Ricerca film" aria-label="Ricerca"
                aria-describedby="basic-addon1" v-model.trim="this.store.filmDaCercare">
            <button @click="$emit('cerca')" class="input-group-text" id="basic-addon1"><i
                    class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </form>
</template>

<style lang="scss"></style>