<template>
  <span class="logo">life<span>book</span></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'vLogo',
});
</script>

<style lang="scss">
.logo {
  text-transform: uppercase;
  font-size: 48px;
  color: $purple-2;
  text-shadow: 0px 0px 3px $grey-4;
  font-family: 'Roboto';
  font-weight: 800;
  letter-spacing: -3px;
  padding: 10px;
  span {
    margin-left: 6px;
    color: $white;
    letter-spacing: 2px;
    text-shadow: 0px 0px 5px $black;
  }
}
</style>
