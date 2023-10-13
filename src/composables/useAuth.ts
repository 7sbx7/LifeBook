import { ref } from 'vue';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User, Auth } from 'firebase/auth';
import { db } from '../firebase/init'
import router from '@/router';

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
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        router.push({ name: 'home' });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return {
    user,
    handleRegister,
    handleLogin,
  };
}