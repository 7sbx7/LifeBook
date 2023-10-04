<template>
  <v-header />
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import vHeader from '@/components/vHeader.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    vHeader
  },
});
</script>

<style lang="sass">


</style>
