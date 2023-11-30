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
import { collection, doc, getDoc } from "firebase/firestore"; 
import { db } from '../firebase/init'

export default defineComponent({
  name: 'HomeView',
  components: {
  },
  setup() {
    const auth = getAuth();
    const handleLogout = async () => useAuth(auth).handleLogout()

    let store = useStore()
    let currentUserUid = ref(store.getters.user.uid)

    const showUser = async () => {
      const usersRef = await getDoc(doc(db, 'users', 'mnobF1CZDuWqiKI4LNkx'))
      console.log(usersRef.data());
    };

    return {
      handleLogout,
      showUser
    }
  }
});
</script>
