<template>
  <nav class="navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'vHeader'
});
</script>

<style lang="sass" scoped>
  .navigation
    display: flex
    justify-content: center
    width: 100%
    border: 1px solid red
    height: 40px
</style>