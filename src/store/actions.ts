import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import router from '@/router';
import { db } from '../firebase/init'
import { doc, setDoc } from "firebase/firestore"; 

const auth = getAuth()


export default {
    async register({ commit }, { email, password, login }) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, 'users', user.uid), {
          userName: login,
          // TODO: add more fields there when expanding registration form
        });
        router.go(0);
      } catch (error) {
        console.error('Error registering user: ', error);
      }
    },

    async login({ commit }, { email, password }) {
      try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        const user = response.user;
  
        commit('setUser', user);
        router.push({ name: 'home' });
      } catch (error) {
        console.error('Error logging in: ', error);
      }
    },

    async logout({ commit }) {
      try {
        await signOut(auth);
        commit('setUser', null);
        router.push('/auth');
      } catch (error) {
        console.error('Logout error:', error);
      }
    },
};