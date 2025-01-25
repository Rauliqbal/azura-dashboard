<script setup lang="ts">
import { ref } from "vue";
import { useSidebar } from "../composables/useSidebar";
import { NAV_LINK } from "@/utils/data";
import { VsxIcon } from "vue-iconsax";

const { isOpen } = useSidebar();
const activeClass = ref("bg-primary text-white shadow-md ");
const inactiveClass = ref(
   "text-slate-500 hover:bg-primary/10 hover:bg-opacity-25 "
);
</script>

<template>
   <div class="flex">
      <!-- Backdrop -->
      <div
         :class="isOpen ? 'block' : 'hidden'"
         class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
         @click="isOpen = false"
      />
      <!-- End Backdrop -->

      <div
         :class="
            isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
         "
         class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-white lg:translate-x-0 lg:static lg:inset-0 px-4"
      >
         <div class="flex items-center justify-center mt-8">
            <div class="flex items-center">
               <svg
                  width="40"
                  height="41"
                  viewBox="0 0 67 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M45.0353 4.66312C45.8331 3.77669 46.7195 3.04539 47.6281 2.46921C49.2236 1.47198 50.9079 0.940125 52.6364 0.940125V15.411C51.3732 11.0232 48.6475 7.25591 45.0353 4.66312ZM66.5533 40.9401H15.2957C6.87461 40.9401 0.0712891 34.1146 0.0712891 25.7157C0.0712891 17.6714 6.3206 11.0675 14.232 10.5135V0.940125C16.0048 0.940125 17.7555 1.44982 19.3954 2.46921C20.304 3.02323 21.1904 3.75453 21.9882 4.59663C25.2458 2.31409 29.1904 0.984446 33.4674 0.984446C33.4674 10.2254 30.1433 20.9734 19.3289 20.9955H33.3566C32.9577 19.2005 31.3178 17.8709 29.3677 17.8487H37.5228C35.5727 17.8487 33.9328 19.2005 33.5339 21.0177H46.6087C49.2236 21.0177 51.8164 21.5274 54.2541 22.5468C56.6696 23.544 58.8857 25.0288 60.725 26.8681C62.5865 28.7296 64.0491 30.9235 65.0464 33.339C66.0436 35.7324 66.5533 38.3252 66.5533 40.9401ZM22.8525 10.7795C23.1849 11.6437 24.0713 12.6188 25.3123 13.3279C26.5533 14.0371 27.8386 14.3252 28.7472 14.1922C28.4148 13.3279 27.5284 12.3529 26.2874 11.6437C25.0464 10.9346 23.761 10.6465 22.8525 10.7795ZM41.5117 13.3279C40.2707 14.0371 38.9854 14.3252 38.0768 14.1922C38.4092 13.3279 39.2957 12.3529 40.5367 11.6437C41.7777 10.9346 43.063 10.6465 43.9716 10.7795C43.6613 11.6437 42.7527 12.6188 41.5117 13.3279Z"
                     fill="#6575ed"
                  ></path>
               </svg>

               <span class="mx-2 text-xl font-semibold">Azura Coder</span>
            </div>
         </div>

         <!-- Route Link -->
         <nav class="mt-10">
            <router-link
               class="flex items-center gap-4 px-6 py-3 mt-4 duration-200 rounded-2xl capitalize"
               v-for="link in NAV_LINK"
               :class="[
                  $route.name === `${link.routeName}`
                     ? activeClass
                     : inactiveClass,
               ]"
               :to="'/dashboard' + link.url"
            >
               <span>
                  <VsxIcon :iconName="link.icon" :size="24" type="bulk" />
               </span>

               <span>{{ link.name }}</span>
            </router-link>
         </nav>
      </div>
   </div>
</template>
