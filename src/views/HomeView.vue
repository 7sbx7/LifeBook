<template>
  <div class="home">home</div>
  <button @click="showUser">Show user</button>
  <button @click.prevent="handleLogout">Log out</button>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
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

    let store = useStore()
    let currentUserUid = ref(store.getters.user.uid)

    const showUser = () => {
      console.log(currentUserUid.value);
    };

    return {
      handleLogout,
      showUser
    }
  }
});
</script>
