<template>
  <form class="w-full max-w-lg m-auto" @submit.prevent="next()">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div
        class="form-group w-full md:w-1/2 px-3 mb-6 md:mb-0"
        :class="v$.form.firstname.$errors.length"
      >
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          First Name
        </label>
        <input
          @blur="v$.form.firstname.$touch"
          v-model="v$.form.firstname.$model"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Jane"
        />
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.firstname.$errors"
          :key="index"
        >
          <div class="error-msg text-xs text-red-600 text-left">
            {{ error.$message }}
          </div>
        </div>
      </div>
      <div
        class="w-full md:w-1/2 px-3"
        :class="v$.form.lastname.$errors.length"
      >
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Last Name
        </label>
        <input
          @blur="v$.form.lastname.$touch"
          v-model="v$.form.lastname.$model"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="Doe"
        />
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.lastname.$errors"
          :key="index"
        >
          <div class="error-msg text-xs text-red-600 text-left">
            {{ error.$message }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap -mx-3 mb-6"
      :class="v$.form.lastname.$errors.length"
    >
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-password"
        >
          CNIC
        </label>
        <input
          @blur="v$.form.cnic.$touch"
          v-model="v$.form.cnic.$model"
          v-mask="'#####-#######-#'"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          type="text"
          placeholder="31301-1234567-8"
        />
        <!-- <p class="text-gray-600 text-xs italic">
          Make sure the CNIC is 13 digit without the dashes, and 15 digit with
          dashes
        </p> -->
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.cnic.$errors"
          :key="index"
        >
          <div class="error-msg text-xs text-red-600 text-left">
            {{ error.$message }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap -mx-3 mb-2"
      :class="v$.form.lastname.$errors.length"
    >
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          City
        </label>
        <input
          v-model="v$.form.city.$model"
          @blur="v$.form.city.$touch"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-city"
          type="text"
          placeholder="Albuquerque"
        />
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.city.$errors"
          :key="index"
        >
          <div class="error-msg text-xs text-red-600 text-left">
            {{ error.$message }}
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-state"
        >
          State
        </label>
        <div class="relative">
          <select
            v-model="form.selectedState"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option disabled value="">Please Select a State</option>
            <option>Punjab</option>
            <option>Sindh</option>
            <option>Balochistan</option>
            <option>KPK</option>
          </select>
          <!-- <span>Selected: {{ form.selectedState }}</span> -->
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        class="w-full md:w-1/3 px-3 mb-6 md:mb-0"
        :class="v$.form.zip.$errors.length"
      >
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-zip"
        >
          Zip
        </label>
        <input
          @blur="v$.form.zip.$touch"
          v-model="v$.form.zip.$model"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-zip"
          type="text"
          placeholder="90210"
        />
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.zip.$errors"
          :key="index"
        >
          <div class="error-msg text-xs text-red-600 text-left">
            {{ error.$message }}
          </div>
        </div>
      </div>
    </div>
    <div class="text-right m-auto">
      <button
        v-if="!valid"
        :disabled="v$.form.$invalid"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Proceed to KYC
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </form>
  <div>
    <div
      v-if="valid"
      class="h-auto bg-gray-800 flex rounded-lg w-1/2 shadow-lg m-auto my-24"
    >
      <div class="border-dotted border-2 h-auto w-1/2 rounded-lg m-5 mb-5">
        <input
          v-if="!url1"
          id="file-upload"
          type="file"
          @change="onFileChange"
          accept="image/*"
        />
        <label for="file-upload" class="custom-file-upload">
          <i class="fa fa-cloud-upload"></i> Upload Front Side of CNIC
        </label>
        <div id="preview">
          <img v-if="url1" :src="url1" />
        </div>
      </div>
      <div class="border-dotted border-2 h-auto w-1/2 rounded-lg m-5 mb-5">
        <input
          v-if="!url2"
          id="file-upload-2"
          type="file"
          accept="image/*"
          @change="onFileChange2"
        />
        <label for="file-upload-2" class="custom-file-upload">
          <i class="fa fa-cloud-upload"></i> Upload Back Side of CNIC
        </label>
        <div id="preview">
          <img v-if="url2" :src="url2" />
        </div>
      </div>
    </div>
    <div class="text-right m-auto">
      <button
        v-if="valid"
        :disabled="v$.form.$invalid"
        type="button"
        @click="saveData"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Save and Proceed
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
  <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
    crossorigin="anonymous"
  />
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { minLength, required } from '@vuelidate/validators';
import { mask } from 'vue-the-mask';
import service from '../services/service';
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        cnic: '',
        city: '',
        selectedState: '',
        zip: '',
      },
      valid: false,
      url1: null,
      url2: null,
    };
  },
  components: {
    // TheMask,
  },
  directives: {
    mask,
  },
  validations() {
    return {
      form: {
        firstname: {
          required,
        },
        lastname: {
          required,
        },
        cnic: {
          required,
          minLength: minLength(15),
        },
        city: {
          required,
        },
        zip: {
          required,
        },
      },
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      // if (number === 0) {
      this.url1 = URL.createObjectURL(file);
      console.log(this.url1);
      // }
    },
    onFileChange2(e) {
      const file = e.target.files[0];
      // if (number === 0) {
      this.url2 = URL.createObjectURL(file);
      // }
      console.log(this.url2);
    },
    next() {
      console.log('The function was Successfully called.');
      console.log(this.form);
      this.valid = true;
    },
    async saveData() {
      const response = await service.saveForm(this.form);
      console.log(response);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type='file'] {
  display: none;
}
.custom-file-upload {
  /* border: 1px solid #ccc; */
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  color: azure;
}
</style>
