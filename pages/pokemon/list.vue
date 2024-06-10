<template>
  <div class="d-flex justify-content-center">
    <HeaderComponent />
  </div>
  <h1 class="d-flex justify-content-center m-5">โปเกมอน บีบมะนาวฆ่างู</h1>
  <div v-if="pokemons.length">
    <div class="d-flex justify-content-center">
      Computed {{ searchQuery }}
      <br>
      <!-- Watch Effect {{ hola }} -->
    </div>
    <div class="d-flex justify-content-center">
      <input v-model="searchQuery" type="text" placeholder="computed..." class="form-control col-xl-3 mb-3" />
      <!-- <input v-model="hola" type="text" placeholder="watchEffect..." class="form-control col-xl-3 mb-3" /> -->
    </div>
    <div class="row d-flex justify-content-center m-5">
      <div v-for="pokemon in filteredPokemons" class="card col-xl-2 m-3" style="width: 18rem; margin-bottom: 1rem;">
      <!-- <div v-for="pokemon in filteredPokemons" class="card col-xl-2 m-3" style="width: 18rem; margin-bottom: 1rem;"> -->
        <img :src="pokemon.sprites.front_default" v-if="pokemon.sprites" class="card-img-top" />
        <div class="card-body">
          <h2 class="card-title text-center">{{ pokemon.name }}</h2>
          <NuxtLink :href="'/pokemon/' + pokemon.id" class="btn btn-primary col-xl-12 mt-3">รายละเอียด</NuxtLink>
        </div>
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
import { ref, onMounted, watchEffect , computed } from 'vue';
import axios from 'axios';
import HeaderComponent from '@/layouts/header';

interface Pokemon {
  name: string;
  id: string;
  sprites: { front_default: string };
}

// Reactive state
const pokemons = ref<Pokemon[]>([]);
const searchQuery = ref<string>('');
// const hola = ref<string>('');

// Fetch Pokemons
onMounted(async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
    pokemons.value = await Promise.all(
      response.data.results.map((pokemon: { url: string }) => 
        axios.get<Pokemon>(pokemon.url)
        .then(res => res.data)
      )
    );
  } catch (error) {
    console.error('Error:', error);
  }
});


//computed property ใหม่ทุกครั้งที่ pokemons หรือ searchQuery เปลี่ยนแปลง
// จะอัปเดตตามเหตุการณ์ที่เกิดขึ้นใน reactive dependencies ที่มีผลต่อ computed property นี้เท่านั้น
const filteredPokemons = computed(() => {
  return pokemons.value.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});


// มีผลต่อ reactive state โดยอัตโนมัติเมื่อ reactive state เปลี่ยนแปลง โดยไม่จำเป็นต้องระบุ reactive dependencies เป็นอย่างชัดเจน
// watchEffect(async () => {
//   searchQuery.value = hola.value;
//   if (searchQuery.value) {
//     try {
//       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery.value.toLowerCase()}`);
//       pokemons.value = [response.data];
//     } catch (error) {
//       const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
//       pokemons.value = [response.data];
//     }
//   }
//   return
// });

</script>

<style lang="scss" scoped>
.img {
  position: absolute;
  left: 320px;
  width: 100px;
}
</style>
