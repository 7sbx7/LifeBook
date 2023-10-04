<template>
  <router-link
    :to="to"
    class="nav-button"
    :class="{
      'nav-button--purple': primaryNav,
      'nav-button--grey': secondaryNav,
      'no-border': noBorderDesktop,
    }"
  >
    {{ content }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "vNavButton",
  props: {
    to: {
      type: [Object, String],
      default: null,
    },
    content: {
      type: String,
    },
    secondaryNav: {
      type: Boolean,
    },
    primaryNav: {
      type: Boolean,
    },
    noBorderDesktop: {
      type: Boolean,
    },
  },
});
</script>

<style lang="scss">
.nav-button {
  text-decoration: none;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  border-radius: 20px;
  padding: 8px 20px;
  margin: 0 5px;
  transition: 0.3s;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 15px;
    border-radius: 30px;
    margin: 10px 15px;
  }
  @media (min-width: 768px) {
    &.no-border {
      border: none;
    }
  }
  &--purple {
    color: $purple-2;
    border: 2px solid $purple-2;
    &.router-link-active {
      box-shadow: 0px 0px 6px 0px $purple-3;
      font-weight: 800;
    }
    @media (min-width: 768px) {
      &:hover {
        background: $purple-2;
        color: $white;
      }
    }
  }

  &--grey {
    color: $grey-7;
    border: 2px solid $grey-7;
    &.router-link-active {
      box-shadow: 0px 0px 6px 0px $grey-7;
      font-weight: 800;
    }
    @media (min-width: 768px) {
      &:hover {
        background: $purple-3;
        color: $white;
      }
    }
  }
}
</style>
