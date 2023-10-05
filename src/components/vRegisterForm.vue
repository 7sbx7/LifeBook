<template>
  <v-form title="Create Account">
    <v-input-with-icon type="text" placeholder="Login" icon="fa-regular fa-user" />
    <v-input-with-icon type="email" placeholder="Email" icon="fa-regular fa-envelope" />
    <v-input-with-icon type="password" placeholder="Password" icon="fa-solid fa-lock" />
    <v-input-with-icon type="password" placeholder="Repeat Password" icon="fa-solid fa-lock" />

    <button class="auth-form__button" type="submit" @click.prevent="handleLogin">Register</button>

    <span class="auth-form__note">Already registered?<span @click="$emit('showLoginForm')"> Log in!</span></span>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import vForm from './atoms/vForm.vue';
import vInputWithIcon from './atoms/vInputWithIcon.vue';

export default defineComponent({
  name: 'vHamburger',
  components: {
    vInputWithIcon,
    vForm,
  },
  setup() {
    const authType = ref<string>('login');

    function handleLogin() {
      console.log('12321');
    }

    return {
      handleLogin,
      authType,
    };
  },
});
</script>
