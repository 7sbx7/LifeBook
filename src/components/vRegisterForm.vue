<template>
  <v-form title="Create Account">
    <div class="form-input">
      <font-awesome-icon class="form-input__icon" icon="fa-regular fa-user" />
      <input v-model="login" type="text" placeholder="Login" />
    </div>

    <div class="form-input">
      <font-awesome-icon class="form-input__icon" icon="fa-regular fa-envelope" />
      <input v-model="email" type="email" placeholder="E-mail" />
    </div>

    <div class="form-input">
      <font-awesome-icon class="form-input__icon" icon="fa-solid fa-lock" />
      <input v-model="password" type="password" placeholder="Password" />
    </div>

    <button class="auth-form__button" type="submit" @click.prevent="handleRegister">Register</button>

    <span class="auth-form__note">Already registered?<span @click="$emit('showLoginForm')"> Log in!</span></span>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import vForm from './atoms/vForm.vue';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import router from '@/router';

export default defineComponent({
  name: 'vHamburger',
  components: {
    vForm,
  },
  setup() {
    const authType = ref<string>('login');

    const login = ref<string>('');
    const email = ref<string>('')
    const password = ref<string>('')

    const auth = getAuth();

    const handleRegister = async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;

        await updateProfile(user, {
          displayName: login.value,
        });

        router.go(0);
      } catch (err) {
        console.log(err);
      }
    };

    return {
      login,
      email,
      password,
      handleRegister,
      authType,
    };
  },
});
</script>
