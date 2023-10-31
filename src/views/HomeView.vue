<template>
  <div class="home">home</div>
  <button @click.prevent="handleLogout">Log out</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuth } from '@/composables/useAuth';
import { getAuth } from 'firebase/auth';

export default defineComponent({
  name: 'HomeView',
  components: {
  },
  setup() {
    const auth = getAuth();
    const handleLogout = async () => useAuth(auth).handleLogout()

    return {
      handleLogout
    }
  }
});
</script>
