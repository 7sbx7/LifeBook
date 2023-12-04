<template>
  <v-form title="Sign In">

    <div class="form-input">
      <font-awesome-icon class="form-input__icon" icon="fa-regular fa-user" />
      <input v-model="email" type="email" placeholder="E-mail" />
    </div>

    <div class="form-input">
      <font-awesome-icon class="form-input__icon" icon="fa-solid fa-lock" />
      <input v-model="password" type="password" placeholder="Password" />
    </div>

    <input type="submit" value="Sign In"  class="auth-form__button" @click.prevent="handleLogin">

    <span class="auth-form__note">Don't have an account?<span @click="$emit('showRegisterForm')"> Create now!</span></span>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import vForm from './atoms/vForm.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'vHamburger',
  components: {
    vForm,
  },
  setup() {
    const email = ref<string>('');
    const password = ref<string>('');
    const store = useStore();

    const handleLogin = async () => {
      try {
        await store.dispatch('login', { email: email.value, password: password.value });
      } catch (error) {
        console.error('Login failed: ', error);
      }
    };

    return {
      email,
      password,
      handleLogin,
    };
  },
});
</script>
