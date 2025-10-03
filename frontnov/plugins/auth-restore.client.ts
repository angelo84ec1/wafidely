import { useAuthStore } from '~/store/auth';

export default defineNuxtPlugin(() => {
  const authStore = useAuthStore();
  
  // Restaurar autenticación al cargar la app
  authStore.restoreAuth();
});