<script setup>
import { onMounted } from "vue";

function showHide() {
  document.getElementById("hamburger").checked = false;
}

// onMounted(() => {
//   window.addEventListener("scroll", function () {
//     let header = this.document.querySelector("header");

//     header.classList.add("fixed", window.scrollY > 0);
//     header.classList.toggle("bg-sticky", window.scrollY > 0);
//     header.classList.remove("absolute", window.scrollY > 0);
//   });
// });
</script>

<template>
  <header class="fixed inset-x-0 t z-20 py-4 transition-all bg-slate-100">
    <div class="container">
      <div class="flex items-center justify-between">
        <div class="relative">
          <router-link to="/">
            <img src="/images/logo.svg" alt="" />
          </router-link>
        </div>
        <div class="flex items-center">
          <input
            type="checkbox"
            class="peer hidden"
            name="hamburger"
            id="hamburger"
          />
          <label
            for="hamburger"
            class="relative peer-checked:hamburger z-30 block cursor-pointer md:hidden"
          >
            <span
              class="duration-200 inline-block w-7 focus:w-0 h-1 bg-black after:bg-black before:bg-black dark:bg-slate-400 dark:after:bg-slate-400 dark:before:bg-slate-400 rounded-xl after:rounded-xl before:rounded-xl"
            ></span>
          </label>
          <div
            @click="showHide"
            class="absolute inset-0 h-screen bg-gray-900/30 opacity-0 hidden peer-checked:opacity-100 peer-checked:block transition-all duration-300 md:peer-checked:hidden"
          ></div>
          <div
            class="peer-checked:translate-x-0 w-72 sm:w-96 fixed top-0 right-0 bottom-0 translate-x-full transition duration-300 md:w-auto md:static md:translate-x-0 z-20 ease-out"
          >
            <div class="flex flex-col md:items-center md:flex-row h-full">
              <ul
                class="bg-white dark:md:bg-transparent md:bg-transparent flex items-center px-7 pt-28 md:pb-0 pb-[38rem] space-y-4 md:px-0 md:space-y-0 flex-col md:flex-row md:space-x-4 md:pt-0"
              >
                <li>
                  <router-link @click="showHide" class="btn-link" to="/login"
                    >Sign in</router-link
                  >
                </li>
                <li>
                  <router-link
                    @click="showHide"
                    class="btn-signup"
                    to="/register"
                    >Sign up</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
#hamburger ~ label span::after,
#hamburger ~ label span::before {
  right: 0;
  transition-delay: 0.2s, 0s;
  transition-duration: 0.1s;
  transition-property: margin, transform;
  content: "";
  position: absolute;
  width: 20px;
  height: 4px;
}

#hamburger ~ label span::after {
  margin-top: 10px;
}

#hamburger ~ label span::before {
  margin-top: -10px;
}

#hamburger:checked ~ label span {
  background-color: transparent;
}

#hamburger:checked ~ label span:before,
#hamburger:checked ~ label span:after {
  transition-delay: 0s, 0.2s;
  margin-top: 0;
}

#hamburger:checked ~ label span:before {
  transform: rotate(45deg);
}

#hamburger:checked ~ label span:after {
  transform: rotate(-45deg);
}
</style>
