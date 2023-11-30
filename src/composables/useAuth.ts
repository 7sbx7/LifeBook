import { ref } from 'vue';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, Auth } from 'firebase/auth';
import { db } from '../firebase/init'
import router from '@/router';
import { store } from '../store/index'

export function useAuth(auth: Auth) {
  const user = ref<User | null>(null);

  async function handleRegister(email:string, password:string, login:string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      try {
        const collectionRef = db.collection('users'); 
        await collectionRef.add({
          uid: user.uid,
          userName: login,
        });
        router.go(0);
      } catch (error) {
        user.delete()
        console.error('Error adding document: ', error);
      }
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }

  async function handleLogin(email: string, password: string) {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response.user) {
        store.commit('setUser', response.user)
        router.push({name: 'home'})
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLogout() {
    try {
      await signOut(auth);
      store.commit('setUser', null)
      router.push('/auth')
    } catch (error) {
      console.error(error);
    }
  }

  return {
    user,
    handleRegister,
    handleLogin,
    handleLogout
  };
}