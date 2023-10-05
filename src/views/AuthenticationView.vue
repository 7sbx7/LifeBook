<template>
  <div class="auth">
    <v-login-form v-if="authType === 'login'" @showRegisterForm="handleShowRegisterForm" />
    <v-register-form v-if="authType === 'register'" @showLoginForm="handleShowLoginForm" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import vLoginForm from '@/components/vLoginForm.vue';
import vRegisterForm from '@/components/vRegisterForm.vue';

export default defineComponent({
  name: 'AuthenticationView',
  components: {
    vLoginForm,
    vRegisterForm,
  },

  setup() {
    let authType = ref<string>('login');

    function handleShowRegisterForm() {
      authType.value = 'register';
    }
    function handleShowLoginForm() {
      authType.value = 'login';
    }
    return {
      authType,
      handleShowRegisterForm,
      handleShowLoginForm,
    };
  },
});
</script>

<style lang="scss">
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
