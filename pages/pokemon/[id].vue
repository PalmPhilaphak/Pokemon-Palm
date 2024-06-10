<template>
  <h1 class="text-center mt-5">Detail</h1>
  <div v-if="pokemon">
    <div class="card mx-auto mt-5" style="width: 18rem;">
      <img class="img" :src="pokemon.sprites.front_default" alt="">

      <div class="card-body text-center">
        <h3>name : {{ pokemon.name }}</h3>

        <p>height : {{ pokemon.height }}</p>
        <p>weight : {{ pokemon.weight }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="text-center">
      <h1>จะรีบไปไหน...</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Pokemon {
  name: string;
  id: number;
  sprites: { front_default: string };
  height: string;
  weight: string;
}

const pokemon = ref<Pokemon | null>(null);

const route = useRoute();

onMounted(async () => {
  try {
    const response = await axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + route.params.id);
    pokemon.value = response.data;
    console.log(pokemon.value.sprites);
  } catch (error) {
    console.error('งงนะ:', error);
  }
});

</script>

<style>

.img{
  width: 300px;
  height: 300px;
}

</style>