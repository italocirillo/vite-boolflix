<script>
import { store } from '../store';
import Ricerca from './Ricerca.vue';
import SelettoreGenere from './SelettoreGenere.vue';
import * as bootstrap from '../../node_modules/bootstrap';


export default {
    name: "AppHeader",
    components: { Ricerca, SelettoreGenere },
    emits: ["cerca", "ottieniGeneriFilm", "ottieniGeneriSerie"],
    data() {
        return {
            bootstrap,
            store
        }
    },
    computed: {
        filtroFilm() {
            return this.store.filtroFilm;
        },
        filtroSerie() {
            return this.store.filtroSerie;
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
                            <li class="nav-item" @click="this.store.filtroSerie = true; this.store.filtroFilm = true">
                                <a class="nav-link" aria-current="page" href="#"
                                    :class=" filtroFilm === true && filtroSerie === true ? 'active' : '' ">TUTTI</a>
                            </li>
                            <li class="nav-item" @click=" this.store.filtroFilm = true; this.store.filtroSerie = false; ">
                                <a class="nav-link" href="#"
                                    :class=" filtroFilm === true && filtroSerie === false ? 'active' : '' ">Film</a>
                            </li>
                            <li class="nav-item" @click=" this.store.filtroSerie = true; this.store.filtroFilm = false ">
                                <a class="nav-link" href="#"
                                    :class=" filtroSerie === true && filtroFilm === false ? 'active' : '' ">Serie tv</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="selettore col-2">
            <SelettoreGenere @ottieniGeneriFilm=" $emit('ottieniGeneriFilm') "
                @ottieniGeneriSerie=" $emit('ottieniGeneriSerie') " />
        </div>
        <div class="ricerca col-3">
            <!-- RICERCA -->
            <Ricerca @cerca=" $emit('cerca') " />
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