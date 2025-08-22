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
        <small class="text-gray-400">Crea tu Landig Page por 5 dias GRATIS</small>

        <form class="mt-4" @submit.prevent="register">
   
          <div class="mb-3">

            



            <BaseSelect v-model="formLogin.documentType" :v="vuelidate.documentType" label="Tipo de identificación"
                for="tipo de identificacion" :options="options" />
              <BaseInput v-model="formLogin.idDocument" :v="vuelidate.idDocument" label="Identificación" for="id"
                :has-icon="true">
                <template #img>
                  <img src="~/assets/images/account_rosado.png" alt="User icon" class="image-container"/>
                </template>
              </BaseInput>
              <BaseInput class="svgIcon mb-2 block text-sm font-normal" v-model="formLogin.email" :v="vuelidate.email" label="Email" for="email"
                :has-icon="true">
                <template #img>
                  <img src="~/assets/images/email_estableci.png" alt="Email icon" />
                </template>
              </BaseInput>
              <BaseInput v-model="formLogin.establecimientos" :v="vuelidate.establecimientos" label="Nombre del establecimiento" label-class="text-sm" for="establecimientos"
                :has-icon="true">
                <template #img>
                  <img src="~/assets/images/estable_mientos.png" alt="User icon" />
                </template>
              </BaseInput>
              <BaseInput v-model="formLogin.password" :v="vuelidate.password" label="Contraseña" for="password"
                name="password" :has-icon="true" type="password">
                <template #img>
                  <img src="~/assets/images/Password.png" alt="Left icon" />
                </template>
              </BaseInput>
              <BaseButton class="mt-4 mb-1.5 block w-full text-center text-white bg-[#232c4d] hover:bg-[#40496d] px-2 py-1.5 rounded-md" type="submit" :disabled="loading">>
                <template #text>
                  <span v-if="loading">
                    <Loader />
                  </span>
                  <span v-else>
                    Crear Cuenta
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
  import AccountNotExistModal from "~/components/login/AccountNotExistModal.vue";
  definePageMeta({
    name: "CrearCuentaPage",
    components: {
      BaseInput,
      BaseSelect,
      BaseButton,
      AccountNotExistModal,
      Loader
    }
  })
  const options = ref([
    { text: "Pasaporte", value: "pasaporte" },
    { text: "Cedula", value: "cedula" },
    { text: "RUC", value: "ruc" },
  ]);
  const formLogin = reactive({
    documentType: 'pasaporte',
    idDocument: '',
    password: '',
    establecimientos: '',
    email: ''
  });
  
  const showModal = ref(false)
  const loading = ref(false); // Define la referencia para mostrar/ocultar el loader

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
    documentType: {
      required: helpers.withMessage("El tipo de documento es requerido", required),
    },
    idDocument: {
      required: helpers.withMessage("El documento es requerido", required),
    },
    password: {
      required: helpers.withMessage("La contraseña es requerida", required),
    },
    establecimientos: {
      required: helpers.withMessage("La establecimientos es requerida", required),
    },
    email: {
      required: helpers.withMessage("El email es requerido", required),
    },
  };
  const vuelidate = useVuelidate(rules, formLogin)
  const authStore = useAuthStore()
  const router = useRouter()
  const register = async () => {
      try {
        vuelidate.value.$touch();
        if (!await vuelidate.value.$validate()) {
          return;
        }
        loading.value = true; // Show the loader
        const res = await fetch("https://wafiapi.wafidely.com/establecimientos", {
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre:formLogin.establecimientos,
            correo:formLogin.email
          }),
        }
        )
        const establecimiento = await res.json()
        const { response, data } = await authStore.register({
          documentType: formLogin.documentType,
          identifier: formLogin.idDocument,
          password: formLogin.password,
          establecimientos: establecimiento.id,
          email: formLogin.email,
          role: "establecimiento"
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
        authStore.user = data.user;
        authStore.token = data.jwt;
        if (authStore.getUser?.role.name === 'admin') {
          await router.push('/usuarios')
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
