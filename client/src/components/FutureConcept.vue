<template>
   <div class="futureConcept">
       <div class="flexContainer">
            <h1><strong>APACE CITY</strong></h1>
            <h2>COMING FALL 2021</h2>
            <div class="imageContainer">
                <b-img center fluid src='@/assets/FutureConcept.png'></b-img>
            </div>
       </div>
   </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FutureConcept extends Vue {
}
</script>

<style>
@media screen and (max-width: 576px) {
    h1 {
        font-size: 3rem !importatant;
        padding: 1rem 1.5rem !important;
    }

    .imageContainer {
        width: 100% !important;
    }
}

h1 {
    font-size: 5rem;
    padding: 2rem 2.5rem;
    background-color: white;
    color: black;
}

h2 {
    margin-top: .5rem;
    color: white;
}

.flexContainer {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.imageContainer {
    width: 60%;
}

.futureConcept {
    min-height: 100vh;
    max-width: 100vw;
    background-image: linear-gradient(to bottom right, #171717, #1B1B1B, #1D1D1D, #1E1E1E, #000000);
}
</style>
