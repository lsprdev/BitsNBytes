<template>
  <NavBar />
  <IndexCards :cards="dogsData" />
</template>

<script>
import NavBar from './components/NavBar.vue'
import IndexCards from './components/IndexCards.vue'

export default {
  name: 'App',
  data() {
        return {
            dogsData: [
                {
                    photo: "https://i.imgur.com/xu1RODe.jpg",
                    name: "Maicon",
                    age: "2 anos",
                    desc: "Gente Boa",
                },
                {
                    photo: "https://i.imgur.com/vMfgNE6.jpg",
                    name: "Rogério",
                    age: "1 anos",
                    desc: "Gente boa 2.0",
                },
                {
                    photo: "https://i.imgur.com/4tzW2ur.jpg",
                    name: "Fumaça",
                    age: "3 anos",
                    desc: "Sou o Fumaça, fico pelo Campus Araquari geralmente com o meu amigo Maicon; adoro carinho e brincadeiras.",
                },
            ],
        };
    },
  components: {
    NavBar,
    IndexCards
  }
}
</script>

<style>

</style>
