<script>
import Ricerca from './Ricerca.vue';
import * as bootstrap from 'bootstrap'

export default {
    name: "AppHeader",
    components: { Ricerca },
    data() {
        return {
            barraRicerca: false,
            bootstrap
        }
    }
}
</script>

<template>
    <header class="row">

        <div class="sezione-sinistra col-5">
            <!-- Logo -->
            <img class="logo" src="../assets/img/logo.png" alt="logo">
            <!-- Nav -->
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Serie tv</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Film</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="ricerca col-4">
            <!-- RICERCA -->
            <i v-if="barraRicerca === false" class="fa-solid fa-magnifying-glass"
                @click="this.barraRicerca = !this.barraRicerca"></i>
            <Ricerca @cerca="$emit('cerca')" v-else />
        </div>
        <div class="sezione-destra col-2">
            <!-- Nav -->
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Utente</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa-solid fa-bell"></i></a>
                            </li>
                            <li class="nav-item foto-profilo">
                                <a class="nav-link" href="#"><img src="../assets/img/foto-profilo.jpeg"
                                        alt="foto-profilo"></a>
                                <i class="fa-solid fa-caret-down"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    position: fixed;
    z-index: 10;
    background-color: rgba($color: #1b1b1b, $alpha: 0.8);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 2em;

    .nav-link {
        text-transform: uppercase;
        font-size: 1.5rem;
        color: white;


        &.active {
            color: gray;
        }
    }

    .ricerca {
        text-align: end;
        cursor: pointer;

        i {
            font-size: 2rem;
        }
    }

    .sezione-sinistra {
        display: flex;
        align-items: center;

        .navbar-toggler {
            color: white;
        }

        .logo {
            width: 30%;
        }
    }

    .sezione-destra {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .foto-profilo {
            width: 100%;
            display: flex;
            align-items: center;
        }
    }


}
</style>