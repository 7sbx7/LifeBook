<template>
  <div class="navigation">
    <v-logo />
    <v-hamburger
      v-if="isMobile"
      :navigation-opened="navigationOpened"
      @openNav="navigationOpened = !navigationOpened"
    />
    <nav
      :class="{
        'nav-desktop': !isMobile,
        'nav-mobile': isMobile,
        open: navigationOpened,
      }"
    >
      <v-nav-button
        to="/login"
        content="Login"
        secondary-nav
        noBorderDesktop
        @click="navigationOpened = false"
      />
      <v-nav-button
        to="/"
        content="Home"
        primary-nav
        @click="navigationOpened = false"
      />
      <v-nav-button
        to="/about"
        content="About"
        primary-nav
        @click="navigationOpened = false"
      />

    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import vLogo from "./atoms/vLogo.vue";
import vNavButton from "./atoms/vNavButton.vue";
import vHamburger from "./atoms/vHamburger.vue";
import useWindowWidth from "../composables/useWindowWidth";

export default defineComponent({
  name: "vHeader",
  components: { vLogo, vNavButton, vHamburger },
  setup() {
    let { isMobile } = useWindowWidth();

    return {
      isMobile,
    };
  },
  data() {
    return {
      navigationOpened: false,
    };
  },
});
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-mobile {
  display: flex;
  opacity: 0;
  position: absolute;
  top: 80px;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: white;
}

.open {
  transition: 0.2s;
  opacity: 1;
}
</style>