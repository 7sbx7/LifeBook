<template>
  <div class="home">home</div>
  <button @click.prevent="handleLogout">Log out</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { signOut, getAuth } from 'firebase/auth';
import router from '@/router';

export default defineComponent({
  name: 'HomeView',
  components: {
  },
  setup() {
    const auth = getAuth();

    const handleLogout = async () => {
      try {
        await signOut(auth);
        router.push('/auth')
      } catch (error) {
        console.error(error);
      }
    }

    return {
      handleLogout
    }
  }
});
</script>
