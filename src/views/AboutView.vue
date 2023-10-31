<template>
  <div class="about">about</div>
    {{ $store.state.counter }}
    <button @click="$store.commit('increaseCounter')">increase</button>
    <button @click="$store.commit('decreaseCounter')">decrease</button>
    <div></div>
    {{ $store.state.counter }}
    <sup>2</sup> = {{ $store.getters.counterSquared }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AbuotView',
});
</script>
