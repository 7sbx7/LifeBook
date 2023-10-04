<template>
  <button
    class="hamburger app"
    :class="{
      'hamburger--is-open': navigationOpened,
    }"
    @click="$emit('openNav')"
  ></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "vHamburger",
  props: {
    navigationOpened: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
.hamburger {
  position: relative;
  background: transparent;
  display: flex;
  height: 80px;
  width: 80px;
  border: 0;
  cursor: pointer;
  pointer-events: all;
  outline: none;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 32px;
    left: 20px;
    background: $purple-1;
    width: 40px;
    height: 4px;
    transition: transform 300ms ease-out;
  }

  &:after {
    top: auto;
    bottom: 32px;
  }

  &--is-open {
    &:before {
      transform: translateY(6px) rotate(135deg);
    }
    &:after {
      transform: translateY(-6px) rotate(45deg);
    }
  }
}
</style>
