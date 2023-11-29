<template>
  <div class="home">home</div>
  <button @click="showUser">Show user</button>
  <button @click.prevent="handleLogout">Log out</button>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useAuth } from '@/composables/useAuth';
import { getAuth } from 'firebase/auth';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'HomeView',
  components: {
  },
  setup() {
    const auth = getAuth();
    const handleLogout = async () => useAuth(auth).handleLogout()

    const store = useStore();

    onMounted(() => {
      store.dispatch('user/fetchCurrentUser');
    });
    
    const currentUser = computed(() => store.getters['user/currentUser']);

    const showUser = () => {
      console.log(currentUser);
    };

    return {
      handleLogout,
      showUser
    }
  }
});
</script>
