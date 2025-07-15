<template>
  <main>
    <header>
      <img v-if="dataUser && dataUser.datos_personales?.foto?.url"
        :src="getProfilePicture(dataUser.datos_personales.foto.url)"
        :alt="dataUser.datos_personales.nombres ?? 'profile-picture'" class="header__photo" />
      <div class="header__text">
        <h1 v-if="dataUser && dataUser.datos_personales">
          Bienvenido, {{ dataUser.datos_personales.nombres }}
          {{ dataUser.datos_personales.apellidos }}
        </h1>
      </div>
    </header>
    <div class="home__content">
      <div class="home__actions">
        <h2>Datos personales</h2>
        <div class="home__buttons">
          <button class="button button--secondary" @click.prevent="save()">
            <img src="~/assets/images/save-green.png" alt="" /> Guardar 
          </button>
        </div>
      </div>

      <form ref="formPersonalData" class="form">
        <div class="form__group">
          <h2>Sobre tí</h2>
          <div class="two-columns">
            <BaseFileInput label="Foto de perfil" name="foto" @file-updated="captureFile($event)" />
            <BaseInputImageFromWebcam label="Foto de perfil de webcam" name="fotoWebcam"
              @file-updated="captureFile($event)" />

            <BaseInput v-model="names" type="text" label="Nombres" :disabled="false" class="new-line" name="nombres" />
            <BaseInput v-model="lastnames" type="text" label="Apellidos" :disabled="false" name="apellidos" />

            <BaseInput v-model="company" type="text" label="Compañia" :disabled="false" name="compania" />

            <BaseInput v-model="idRuc" type="text" label="Ruc" name="cedula_ruc" :disabled="false" />

            <BaseInput v-model="iCedula" type="text" label="Cedula" name="cedula" :disabled="false" />

            <BaseInput v-model="passport" type="text" label="Pasaporte" name="pasaporte" :disabled="false" />

            <BaseInput v-model="nationality" type="text" label="Nacionalidad" :disabled="false" name="nacionalidad" />

            <BaseInput v-if="!(!isAdmin || !isEstablecimiento)" v-model="civilState" type="text" label="Estado Civil"
              :disabled="false" name="estado_civil" />

            <BaseInput v-model="country" type="text" label="Pais" :disabled="false" name="pais" />

            <BaseInput v-model="city" type="text" label="Ciudad" :disabled="false" name="ciudad" />

            <BaseInput v-model="direction" type="text" label="Direccion" :disabled="false" name="direccion" />

            <BaseInput v-model="province" type="text" label="Provincia" :disabled="false" name="provincia" />

            <BaseInput v-if="!(!isAdmin || !isEstablecimiento)" v-model="typeperson" type="text" label="Tipo de persona"
              :disabled="false" name="tipo_persona" />

            <BaseInput v-model="cellphone" type="text" label="Celular" :disabled="false" name="celular" />

            <BaseInput v-model="phone" type="text" label="Teléfono Convencional" :disabled="false"
              name="telefono_convencional" />

            <BaseInput v-model="email" type="email" label="Correo" name="correo" />

            <BaseSelect v-model="gender" label="Sexo" :options="sexOptions" name="sexo" />
            <BaseSelect v-model="disability" label="Discapacidad fisica o mental" :options="yesNoOptions"
              name="discapacidad" />
          </div>
        </div>
      </form>
    </div>
    <div v-if="!(isAdmin || isEstablecimiento || authStore.user?.role?.name === 'establecimiento')
        " class="home__content">
      <p style="font-weight: bold; font-size: 18px">
        1. Asegurate de llenar los campos correctamente
      </p>
      <p style="font-weight: bold; font-size: 18px">
        2. Si tienes más de 2 planes debes presionar el botón por cada plan.
      </p>
      <p style="font-weight: bold; font-size: 18px">
        3. Una vez que que completes todos los campos y presiones guardar, no podras modificar los planes
      </p>
      <div class="home__actions">
        <h2>Planes</h2>

        <div class="home__buttons">
          <button class="button button--secondary" @click.prevent="savePlans()">
            <img src="~/assets/images/save-green.png" alt="" /> Guardar y Activar
          </button>

        </div>
      </div>
      <form class="form" ref="formPlanData">
        <div v-if="dataPlans?.length === 0">No dispone de planes</div>
        <button class="plans" v-if="dataPlans?.length > 1" v-for="plan in dataPlans" :key="plan.id"
          @click.prevent="updatePlan(plan)">
          {{ plan.producto }}
        </button>
        <div class="form__group two-columns">
          <BaseInput v-model="plane" type="text" label="Plan" :disabled="true" name="plan" />

          <BaseInput v-model="birthDate" type="date" label="Fecha de Nacimiento" :disabled="planDisabled"
            name="fecha_nacimiento" />

          <BaseInput v-model="pVehicle" type="text" label="Marca Vehiculo" :disabled="planDisabled"
            name="marca_vehiculo" />

          <BaseInput v-model="pModel" type="text" label="Modelo" :disabled="planDisabled" name="modelo" />

          <BaseInput v-model="pAno" type="text" label="Año" :disabled="planDisabled" name="anio" />

          <BaseInput v-model="pColor" type="text" label="Color" :disabled="planDisabled" name="color" />

          <BaseInput v-model="pPlaca" type="text" label="Placa" :disabled="planDisabled" name="placa" />

          <BaseInput v-model="pMotor" type="text" label="Motor" :disabled="planDisabled" name="motor" />

          <BaseInput v-model="pChasis" type="text" label="Chasis" :disabled="planDisabled" name="chasis" />
        </div>
      </form>
    </div>
  </main>
</template>
<script setup lang="ts">
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
import { useAuthStore } from '~/store/auth';
import BaseInput from "~/components/common/inputs/base-input.vue";
import axios, { type AxiosRequestConfig, type AxiosRequestHeaders } from "axios";
import BaseFileInput from "~/components/common/inputs/file-input.vue";
import useAdmin from "~/composables/useAdmin";
import type {
  User,
  ConfiguracionPago,
  EstableCimientos,
} from "~/common/interfaces/user.interface";

import { useToast } from "vue-toastification";
import BaseInputImageFromWebcam from "~/components/common/inputs/file-input-image-webcam.vue";
definePageMeta({
  title: "Socios",
  name: "Socios Page",
  components: {
    BaseInput,
    BaseFileInput,
    BaseInputImageFromWebcam,
  },
  layout: "private",
  middleware: ["auth"],
});

// const { isAdmin, isEstablecimiento } = useAdmin();
const authStore = useAuthStore();
const router = useRouter();


const {
  public: { baseURL },
} = useRuntimeConfig();
const BASE_URL = baseURL;

const getProfilePicture = (url: string) => `${BASE_URL}${url}`;

const generateRandomString = (num) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result1 = Math.random().toString(36).substring(0, num);

  return result1;
};

console.log(generateRandomString(7));

// Usar useFetch para obtener dataPlans
const { data: dataPlans } = useFetch<ConfiguracionPago[]>(
  `${BASE_URL}/config-pagos?user.id=${authStore.user?.id}`,
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
);

// const sortDataPlans = () => {
//   const sortedData = [...dataPlans.value];
//   sortedData.sort((a, b) => a.producto.localeCompare(b.producto));
//   dataPlans.value = sortedData;
//   console.log(dataPlans.value);
// };

// Verificar si los datos de la API se han cargado correctamente
watch(dataPlans, () => {
  if (dataPlans.value && dataPlans.value.length > 0) {
    if (dataPlans.value?.length === 1) {
      updatePlan(dataPlans.value[0]);
    }
    dataPlans.value.sort((a, b) => b.producto.localeCompare(a.producto));
    console.log(dataPlans.value);
  }
});

onMounted(() => {
  if (dataPlans.value && dataPlans.value.length > 0) {
    if (dataPlans.value?.length === 1) {
      updatePlan(dataPlans.value[0]);
    }
  }
});

const planDisabled = ref<boolean>(false);
const pName = ref<string>("");
const pEmail = ref<string>("");
const pVehicle = ref<string>("");
const pModel = ref<string>("");
const pAno = ref<string>("");
const pColor = ref<string>("");
const pPlaca = ref<string>("");
const pMotor = ref<string>("");
const pChasis = ref<string>("");
const pId = ref<string>("");
const fecha_compra = ref<string>("");
const fecha_fin = ref<string>("");
const birthDate = ref<string>("");
const updatePlan = (plan: any) => {
  pAno.value = plan.anio;
  pChasis.value = plan.chasis;
  pColor.value = plan.color;
  pName.value = plan.user.first_name + plan.user.last_name;
  pModel.value = plan.modelo;
  pMotor.value = plan.motor;
  pPlaca.value = plan.placa;
  pVehicle.value = plan.marca;
  pEmail.value = plan.user.email;
  plane.value = plan.producto;
  birthDate.value = plan.fecha_nacimiento;
  pId.value = plan.id;
  fecha_compra.value = plan.fecha_compra;
  fecha_fin.value = plan.fecha_fin;
  const arr = [
    pAno.value,
    pChasis.value,
    pColor.value,
    pName.value,
    pModel.value,
    pMotor.value,
    pPlaca.value,
    pVehicle.value,
  ];
  if (arr.includes("") || arr.includes(undefined)) {
    planDisabled.value = false;
  } else {
    planDisabled.value = true;
  }
};

const savePlans = async () => {
  const payload = {
    anio: pAno.value,
    chasis: pChasis.value,
    color: pColor.value,
    marca: pVehicle.value,
    modelo: pModel.value,
    motor: pMotor.value,
    placa: pPlaca.value,
    fecha_nacimiento: birthDate.value,
  };

  console.log(payload);

  try {
    const response = await fetch(`${BASE_URL}/config-pagos/${pId.value}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      toast.success("Planes actualizados correctamente");
      // update the entry in the dataPlans array
      const index = dataPlans.value?.findIndex((plan) => plan.id === pId.value);
      if (index !== undefined && dataPlans.value) {
        dataPlans.value[index].anio = payload.anio;
        dataPlans.value[index].chasis = payload.chasis;
        dataPlans.value[index].color = payload.color;
        dataPlans.value[index].marca = payload.marca;
        dataPlans.value[index].modelo = payload.modelo;
        dataPlans.value[index].motor = payload.motor;
        dataPlans.value[index].placa = payload.placa;
        dataPlans.value[index].fecha_nacimiento = payload.fecha_nacimiento;
        updatePlan(dataPlans.value[index]);
      }
      await sendDataToIPAddress()
    } else {
      toast.error("Error");
    }
  } catch (error) {
    toast.error("Error");
  }
};

const sexOptions = ref<SelectOption[]>([
  { text: "Masculino", value: "M" },
  { text: "Femenino", value: "F" },
]);
const yesNoOptions = ref([
  { text: "Si", value: true },
  { text: "No", value: false },
]);
const civilStateOptions = ref<SelectOption[]>([
  { text: "Casado", value: "casado" },
  { text: "Divorciado", value: "divorciado" },
  { text: "Viudo", value: "viudo" },
  { text: "Soltero", value: "soltero" },
]);

const file = ref<File | null>(null);
const names = ref<string>("");
const lastnames = ref<string>("");
const company = ref<string>("");
const idRuc = ref<string>("");
const iCedula = ref<string>("");
const passport = ref<string>("");
const gender = ref<string>("");
const disability = ref<boolean>(false);
const nationality = ref<string>("");
const civilState = ref<string>("");
const cellphone = ref<string>("");
const phone = ref<string>("");
const email = ref<string>("");
const country = ref<string>("");
const city = ref<string>("");
const direction = ref<string>("");
const province = ref<string>("");
const typeperson = ref<string>("");
const plane = ref<string>("");

const webCamImage = ref<File | null>(null);

const { data: dataUser } = useFetch<User>(`${BASE_URL}/users/${authStore.user?.id}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authStore.token}`,
  },
});

let lastName = "";
let secondLastName = "";
let firstName = "";
let secondName = "";

watch(dataUser, () => {


  const fullName = dataUser.value?.datos_personales?.nombres ?? "";
  const fullLastNames = dataUser.value?.datos_personales?.apellidos ?? "";

  const namesArray = fullName.split(" ");
   firstName = namesArray[0] ?? "";
  secondName = namesArray[1] ?? "";

  console.log("firstName:", firstName);
  console.log("secondName:", secondName);

  const lastNamesArray = fullLastNames.split(" ");
   lastName = lastNamesArray[0] ?? "";
  secondLastName = lastNamesArray.length > 1 ? lastNamesArray[1] : "";

  console.log("lastName:", lastName);
  console.log("secondLastName:", secondLastName);

  names.value = `${firstName ?? ""} ${secondName ?? ""}`;
  lastnames.value = `${lastName ?? ""} ${secondLastName ?? ""}`;


  company.value = dataUser.value?.datos_personales?.compania ?? "";
  idRuc.value = dataUser.value?.datos_personales?.cedula_ruc ?? "";
  iCedula.value = dataUser.value?.datos_personales?.cedula ?? "";
  passport.value = dataUser.value?.datos_personales?.pasaporte ?? "";
  gender.value = dataUser.value?.datos_personales?.sexo ?? "";
  disability.value = dataUser.value?.datos_personales?.discapacidad ?? false;
  nationality.value = dataUser.value?.datos_personales?.nacionalidad ?? "";
  civilState.value = dataUser.value?.datos_personales?.estado_civil ?? "";
  cellphone.value = dataUser.value?.datos_personales?.celular ?? "";
  phone.value = dataUser.value?.datos_personales?.telefono_convencional ?? "";
  email.value = dataUser.value?.datos_personales?.correo ?? "";
  country.value = dataUser.value?.datos_personales?.pais ?? "";
  city.value = dataUser.value?.datos_personales?.ciudad ?? "";
  direction.value = dataUser.value?.datos_personales?.direccion ?? "";
  province.value = dataUser.value?.datos_personales?.provincia ?? "";
  typeperson.value = dataUser.value?.datos_personales?.tipo_persona ?? "";
  plane.value = dataUser.value?.configuracion_pago[0]?.producto ?? "";
  console.log(plane.value, dataUser.value)

});
const formPersonalData = ref<HTMLFormElement | null>(null);
const formPlanData = ref<HTMLFormElement | null>(null);
  


const toast = useToast();

const save = async () => {
  try {
    const data: Record<string, string> = {};
    const formData = new FormData();
    const elements = [...formPersonalData.value.elements];
    // console.log(elements);
    elements.forEach(({ name, type, value, files, ...element }) => {
      if (!["submit", "file", "date"].includes(type)) {
        if (name == "") return;

        data[name] = value;
      } else if (type === "date") {
        if (value == "" || value.length === 0) return;
        data[name] = value;
      } else if (type === "file") {
        const fileList = [...files];
        fileList.forEach((file) => {
          formData.append(`files.${name}`, file, file.name);
        });
      }
    });

    if (webCamImage.value !== null) {
      formData.delete("files.foto");
      formData.append("files.foto", webCamImage.value, webCamImage.value.name);
    }
    console.log(data);
    formData.append("data", JSON.stringify(data));
    const infoUpdated = await $fetch(
      `${baseURL}/datos-personales/${dataUser.value?.datos_personales?.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authStore.token}`,
        },
        body: formData,
      }
    );
    console.log(infoUpdated);
    dataUser.value.datos_personales = infoUpdated;
    toast.success("Datos actualizados correctamente");
  } catch (error) {
    console.log(error);
    toast.error("Error al actualizar los datos");
  }
};

const sendDataToIPAddress = async () => {
  const store = useAuthStore();
  const res = await store.generateToken();
  console.log(res)
  const response = await store.sendInfo({
    "CLI_EMP": "424",
    "PLAN_CLIENTE": plane.value,
    "IDENTIFICACION": iCedula.value,
    "PRIMER_APELLIDO":  `${lastName ?? ""} `, 
    "SEGUNDO_APELLIDO": `${secondLastName ?? ""} `, 
    "PRIMER_NOMBRE": `${firstName ?? ""} `,
    "SEGUNDO_NOMBRE":  `${secondName ?? ""} `, 
    "FECHA_NACIMIENTO": birthDate.value,
    "DIRECCION": direction.value,
    "CELULAR": cellphone.value,
    "EMAIL": email.value,
    "Celular": cellphone.value,
    "FECHA_INICIO_VIGENCIA": fecha_compra.value,
    "FECHA_FIN_VIGENCIA": fecha_fin.value,
    "PLACA": pPlaca.value,
    "MARCA": pVehicle.value,
    "MODELO": pModel.value,
    "ANIO": pAno.value
  })

  console.log(response)


  if (response.status === 200) {
    toast.success("Datos enviados correctamente");
  } else {
    toast.error("Error al enviar los datos");
  }


};
</script>
<style scoped>
header {
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  border-bottom: 1px solid var(--gray-200);
}

.header__text>h1 {
  font-size: var(--heading-2);
}

.header__photo {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.home__actions>h2 {
  font-size: var(--heading-1);
}

.home__actions {
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home__buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.home__link {
  color: var(--links);
}

.home__link:hover {
  color: gray;
  /* Color al hacer hover */
}

.plans {
  margin-right: 9px;
  padding: 10px;
  background-color: #c028b9 !important;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
}

.form {
  padding: 1rem 0;
}

.form__group {
  padding: 2rem 0;
  border-bottom: 1px solid var(--gray-200);
  max-width: 670px;
}

.two-columns {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(327px, 1fr));
}

.one-column {
  display: grid;
  gap: 1rem;
  grid-template-columns: auto;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

label>input {
  height: 40px;
  padding: 0 0.5rem;
}

.new-line {
  grid-column: 1;
}

label+h3,
.one-column>h3 {
  margin-top: 1rem;
}

.form__group>h2 {
  margin-bottom: 1rem;
}

.full-column {
  grid-column: 1/-1;
}

.full-column label {
  /* Tus estilos aquí */
  color: #000;
  font-weight: 700;
  /* Grosor de fuente reducido */
  font-size: 2rem;
  /* Tamaño de fuente 1 */
}

.home_buttons {
  text-decoration: none;
  color: var(--green-400);

  align-items: center;
  justify-content: center;
  padding: 1px;
  background-color: transparent;
  border-radius: 6px;

  border: 1px solid var(--green-500);
  /* Borde de 2px sólido en color verde */
}

.home_buttons:hover {
  background-color: var(--green-400);
}

.home_buttons--primary {
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  color: var(--white);
  text-decoration: none;
  color: #000;
  font-weight: 500;
  /* Grosor de fuente reducido */
  font-size: 1rem;
  /* Tamaño de fuente 1 */
}

.button--secondary {}

@media (max-width: 767px) {
  .button--secondary {
    position: fixed;
    width: 100%;
    /* Ocupa todo el ancho disponible */
    right: 2px;
    margin-top: 402px;
    padding: 0 1rem;
    text-align: center;
    /* Centra el contenido horizontalmente */
    display: flex;

    z-index: 1;
    /* Asegúrate de que esté en un z-index superior para que esté por encima del contenido */
  }
}

.home_buttons--primary:hover {
  color: var(--white);
}

.home_buttons>img {
  width: 1.5rem;
}

.float {
  position: fixed;
  top: 180px;
  right: 21px;
  z-index: 0;
}

/* Estilos para pantallas más pequeñas (por ejemplo, menos de 768px) */
@media (max-width: 767px) {
  .home_buttons {
    justify-content: center;
    /* Mantén o ajusta los estilos según sea necesario para el diseño responsivo */
    padding: 8px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    /* Puedes ajustar el color de fondo según tu diseño */
    padding: 10px;
    /* Espacio de relleno opcional para separar el enlace del borde inferior */
    text-align: center;
    z-index: 1;
    /* Asegúrate de que esté en un z-index superior para que esté por encima del contenido */
  }
}

/*breackpoint*/
@media only screen and (max-width: 600px) {
  .d-flex {
    display: flex !important;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .full-column,
  .full-column-2 {
    width: 100% !important;
  }

  .form__group {
    max-width: 100% !important;
  }

  .one-column {
    width: 100% !important;
  }
}
</style>
