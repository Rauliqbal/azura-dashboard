<script setup>
import { api } from "@/service/api";
import { useUserStore } from "@/store/user";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toast-notification";

const router = useRouter();
const $toast = useToast();
const user = reactive({
  email: "",
  password: "",
});

function login() {
  const response = api
    .post("/login", {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      $toast.success("Berhasil login!", {
        position: "top-right",
        duration: 3000,
      });

      const token = response.data.token;
      localStorage.setItem("access_token", token);
      router.push("/dashboard");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error.response.data.message);
      $toast.error(error.response.data.message, {
        position: "top-right",
        duration: 3000,
      });
    });

  // try {
  //   $toast.success("Berhasil login!", {
  //     position: "top-right",
  //     duration: 3000,
  //   });

  //   const token = response.data.token;
  //   localStorage.setItem("access_token", token);
  //   console.log(token);
  // } catch (error) {
  //   $toast.error("Email atau Password Salah!", {
  //     position: "top-right",
  //     duration: 3000,
  //   });
  // }
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
        <h3 class="text-4xl font-bold">Welcome Back👋🏻</h3>
        <p class="text-slate-500 mt-2">
          Jangan lupa untuk mengerjakan harianmu
        </p>
      </div>

      <form class="mt-10" @submit.prevent="login">
        <label class="block">
          <span class="text-sm text-gray-700">Email</span>
          <input
            v-model="user.email"
            type="email"
            class="block px-3 py-2 w-full mt-1 bg-transparent border-2 border-gray-300 rounded-md focus:ring focus:ring-indigo-500 ring-[1px] ring-gray-200 focus:outline-none transition-all"
            placeholder="your@domain.com"
          />
        </label>

        <label class="block mt-4">
          <span class="text-sm text-gray-700">Password</span>
          <input
            v-model="user.password"
            type="password"
            class="block px-3 py-2 w-full mt-1 bg-transparent border-2 border-gray-300 rounded-md focus:ring focus:ring-indigo-500 ring-[1px] ring-gray-200 focus:outline-none transition-all"
            placeholder="•••••••"
          />
        </label>

        <div class="flex items-center justify-between mt-4">
          <div>
            <a
              class="block text-sm text-indigo-700 fontme hover:underline"
              href="#"
              >Forgot your password?</a
            >
          </div>
        </div>

        <div class="mt-8">
          <button type="submit" class="w-full btn-primary">Sign in</button>
        </div>
        <div class="mt-4">
          <p class="text-sm text-center">
            Don't have an account?
            <router-link
              to="/register"
              class="font-medium text-indigo-500 hover:text-indigo-600 transition-all"
              >Sign up now</router-link
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
