<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { api } from "@/service/api";
import { useToast } from "vue-toast-notification";

const router = useRouter();
const $toast = useToast();
const form = reactive({
  username: "",
  email: "",
  password: "",
});

function register() {
  api
    .post("/register", {
      username: form.username,
      email: form.email,
      password: form.password,
    })
    .then((response) => {
      $toast.success("Akun berhasil dibuat", {
        position: "top-right",
        duration: 3000,
      });
      router.push("/login");
    })
    .catch((error) => {
      $toast.error("Email sudah terdaftar", {
        position: "top-right",
        duration: 3000,
      });
    });
}
</script>
<template>
  <div class="flex items-center justify-center">
    <div class="w-full max-w-sm">
      <div class="flex items-center">
        <img src="/images/logo.svg" class="w-8 mr-2" alt="logo notuspad" />
        <span class="text-2xl font-semibold text-gray-700">NotusPad</span>
      </div>
      <div class="mt-10">
        <h3 class="text-4xl font-bold">Get Started👋🏻</h3>
        <p class="text-slate-500 mt-2">Mari buat akun barumu</p>
      </div>

      <form class="mt-10" @submit.prevent="register">
        <label class="block">
          <span class="text-sm text-gray-700">Username</span>
          <input
            v-model="form.username"
            type="text"
            class="block px-3 py-2 placeholder:text-sm w-full mt-1 bg-transparent border-2 border-gray-300 rounded-md focus:ring focus:ring-indigo-500 ring-[1px] ring-gray-200 focus:outline-none transition-all"
            placeholder="what we will call you ?"
            required
          />
        </label>
        <label class="block mt-4">
          <span class="text-sm text-gray-700">Email</span>
          <input
            v-model="form.email"
            type="email"
            class="block px-3 py-2 placeholder:text-sm w-full mt-1 bg-transparent border-2 border-gray-300 rounded-md focus:ring focus:ring-indigo-500 ring-[1px] ring-gray-200 focus:outline-none transition-all"
            placeholder="your@domain.com"
            required
          />
        </label>

        <label class="block mt-4">
          <span class="text-sm text-gray-700">Password</span>
          <input
            v-model="form.password"
            type="password"
            class="block px-3 py-2 placeholder:text-sm w-full mt-1 bg-transparent border-2 border-gray-300 rounded-md focus:ring focus:ring-indigo-500 ring-[1px] ring-gray-200 focus:outline-none transition-all"
            placeholder="•••••••"
            required
          />
        </label>

        <!-- <div class="flex items-center justify-between mt-4">
            <div>
              <label class="inline-flex items-center">
                <input
                  type="checkbox"
                  class="text-indigo-600 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                />
                <span class="mx-2 text-sm text-gray-600">Remember me</span>
              </label>
            </div>

            <div>
              <a
                class="block text-sm text-indigo-700 fontme hover:underline"
                href="#"
                >Forgot your password?</a
              >
            </div>
          </div> -->

        <div class="mt-8">
          <button type="submit" class="w-full btn-primary">Sign up</button>
        </div>
        <div class="mt-4">
          <p class="text-sm text-center">
            Already have an account?
            <router-link
              to="/login"
              class="font-medium text-indigo-500 hover:text-indigo-600 transition-all"
              >Sign in now</router-link
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
