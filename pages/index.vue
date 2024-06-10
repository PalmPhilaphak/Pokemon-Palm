<template>
  <div class="row d-flex justify-content-center">
    <router-link to="/pokemon/list" class="card p-5 d-flex col-xl-3 mt-3">
      <div class="col-xl-6">
        <h4>Pokemon</h4>
        <img class="img" src="../public/pikachu.png" alt="">
      </div>
    </router-link>
  </div>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.img {
  position: absolute;
  left: 320px;
  top: 0px;
  width: 100px;
}
</style>
