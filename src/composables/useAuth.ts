import { ref } from 'vue';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User, Auth } from 'firebase/auth';

export function useAuth(auth: Auth) {
  const user = ref<User | null>(null);

  async function register(email:string, password:string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      user.value = userCredential.user
    } catch (error) {
      console.error('Registration error:', error);
    }
  }

  async function login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      console.log('zalogowany');
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  return {
    user,
    register,
    login,
  };
}