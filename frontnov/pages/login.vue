<template>




<!-- Container -->
<div class="flex flex-wrap min-h-screen w-full content-center justify-center bg-[#fbf8ff] py-10">
  
  <!-- Login component -->
  <div class="flex shadow-md">
    <!-- Login form -->
    <div class="flex flex-wrap content-center justify-center rounded-l-md bg-white" style="width: 24rem; height: 32rem;">
      <div class="w-72">
        <!-- Heading -->
        <h1 class="text-xl font-semibold">Bienvenidos</h1>
        <small class="text-gray-400">Ingresa tu usuario y contraseña </small>

        <form class="mt-4" @submit.prevent="login">
   
          <div class="mb-3">

            

            <BaseInput
  class="svgIcon mb-2 block text-sm font-normal"
  v-model="formLogin.idDocument"
  :v="vuelidate.idDocument"
  label="Email"
  for="id"
  :has-icon="true" 
  placeholder="ejm: juan@gmail.com"
>
  <template #icon>
    <img src="~/assets/icons/MaterialSymbolsMarkEmailRead.png"  width="1.5em" height="1.5em" viewBox="0 0 24 24" />
  </template>
</BaseInput>

          </div>

          <div class="mb-3">


            <div>
              <BaseInput class="mb-2 block text-sm font-normal" v-model="formLogin.password"
                label="Contraseña"
                for="password"
                name="password"
                :has-icon="true"
               placeholder="********" 
                :type="showPassword ? 'text' : 'password'">
                <template #icon>
                  <img src="~/assets/icons/MaterialSymbolsPasswordRounded.png"  width="1.5em" height="1.5em" viewBox="0 0 24 24" />
                </template>
                <template #icon-right>

                </template>
              </BaseInput>
            </div>

          </div>

          <div class="mb-3 flex flex-wrap content-center">
            <NuxtLink class="text-xs font-nornmal text-[#232c4d]" to="/recuperar">¿Olvidaste tu contraseña?</NuxtLink>
     
          </div>

          <div class="mb-3 ">


           
            <BaseButton class="mb-1.5 block w-full text-center text-white bg-[#232c4d] hover:bg-[#40496d] px-2 py-1.5 rounded-md" type="submit" :disabled="loading">
              <template #text>
                <span v-if="loading">
                  <Loader />
                </span>
                <span  v-else>
                 Ingresar
           
                </span>
              </template>
            </BaseButton>

          </div>
        </form>

        <!-- Footer -->
      
      </div>
      <AccountNotExistModal v-if="showModal" @close="hideAccountNotExistModal" @action="sendMailto" />
    </div>

    <!-- Login banner -->
    <div class="deg flex flex-wrap content-center justify-center rounded-r-md  responsive-hide" style="width: 24rem; height: 32rem; overflow: hidden;">
  <img class="max-w-full max-h-full rounded-r-md" src="~/assets/images/wafidelyblanco.png" alt="Logo">
</div>

  </div>

 
</div>

</template>

<script lang="ts" setup>
import useVuelidate from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
import { POSITION, useToast } from "vue-toastification";
import BaseButton from "~/components/common/buttons/base-button.vue";
import BaseInput from "~/components/common/inputs/base-input.vue";
import BaseSelect from "~/components/common/inputs/base-select.vue";
import Loader from "~/components/login/Loader.vue";
import { useAuthStore } from '~/store/auth';
import { defineComponent, ref, reactive } from 'vue'; // Importa las utilidades de Vue
import AccountNotExistModal from "~/components/login/AccountNotExistModal.vue";
definePageMeta({
  name: "LoginPage",
  components: {
    BaseInput,
    BaseSelect,
    BaseButton,
    AccountNotExistModal,
    Loader
  },
})


const formLogin = reactive({
  documentType: 'correo',
  idDocument: '',
  password: '',
});


const showPassword = ref(false); // Define la referencia para mostrar/ocultar contraseña
const loading = ref(false); // Define la referencia para mostrar/ocultar el loader

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const showModal = ref(false)

const showAccountNotExistModal = () => {
  showModal.value = true
}

const hideAccountNotExistModal = () => {
  showModal.value = false
}

const { public: { MAILTO } } = useRuntimeConfig()

const sendMailto = () => {
  window.open(`mailto:${MAILTO}`)
}

const toast = useToast()
const rules = {
 
  idDocument: {
    required: helpers.withMessage("El email es requerido", required),
  },
  password: {
    required: helpers.withMessage("La contraseña es requerida", required),
  },
};
const vuelidate = useVuelidate(rules, formLogin)
const authStore = useAuthStore()
const router = useRouter()
if (authStore.isAuthenticated) {
    router.push({ path: "/" })
}
const login = async () => {
  try {
    vuelidate.value.$touch();
    if (!await vuelidate.value.$validate()) {
      return;
    }
    loading.value = true; // Show the loader
    const { response, data } = await authStore.login({
      documentType: formLogin.documentType,
      identifier: formLogin.idDocument,
      password: formLogin.password,
    })
    if (response.status === 400) {
      if (data.message[0].messages[0].id === "Auth.form.error.account.not-exist") {
        showAccountNotExistModal()
        return;
      }
      if (data.message[0].messages[0].id === "Auth.form.error.invalid") {
        toast.error('Usuario o contraseña incorrectos', {
          position: POSITION.BOTTOM_RIGHT,
          timeout: 3000,
          closeOnClick: true,
        })
        return;
      }
    }
    
    const config_res = await fetch(`http://localhost:1337/config-pagos?user=${authStore.user?.id}&estado=Pending`)
    const config_res_json = await config_res.json()
    console.log(config_res_json)
    if (config_res_json.length > 0) {
      toast.error('Tienes una compra pendiente de pago', {
        position: POSITION.TOP_RIGHT,
        timeout: 3000,
        closeOnClick: true,
      })
      return;
    }

    if (authStore.user?.role.name == 'admin' || authStore.user?.role.name == 'establecimiento') {
      await router.push('/resumen')
    } else {
      await router.push('/resumen')
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false; // Hide the loader
  }
}
</script>

<style scoped>
.login {
  display: flex;
  min-height: 100vh;
}

.login>* {
  flex: 50% 1;
}

.login__content {
  max-width: 423px;
}

.login__container {
  display: grid;
  place-items: center;
  padding: 1rem;
}

.logo {
  width: 250px;
  height: auto;
}

.login__text {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.login__form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}



.login__image>span {
  font-size: var(--heading-2);
  line-height: var(--heading-line-height);
  color: var(--white);
  max-width: 497px;
}

.forgot-password-link {
  color: #38f5b3;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
}

.deg {
background-image: linear-gradient(360deg, #232c4d, #38f5b3);
}

@media (max-width: 800px) {
  .login__image {
    display: none;
  }
}

@media (max-width: 768px) {
  .responsive-hide {
    display: none;
  }
}
</style>
