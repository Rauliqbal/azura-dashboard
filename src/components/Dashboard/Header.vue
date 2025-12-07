<script setup>
import { computed, onMounted, ref } from "vue";
import { useSidebar } from "../composables/useSidebar";
import { useUserStore } from "@/store/user";
import Icon from "../Icon.vue";

const dropdownOpen = ref(false);
const { isOpen } = useSidebar();

const userStore = useUserStore();
const user = computed(() => userStore.user);

function getInitials(name) {
  if (!name) return "";

  const words = name.split(" ");
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }

  return initials.toUpperCase();
}
</script>

<template>
  <header class="z-50">
    <div class="flex items-center justify-between px-6 py-5">
      <div class="flex items-center">
        <button
          class="text-gray-500 focus:outline-none lg:hidden"
          @click="isOpen = true"
        >
          <svg
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button class="btn text-gray-400 mr-4">
          <Icon name="Menu" size="20" />
        </button>

        <!-- Search input -->
        <div class="relative mx-4 lg:mx-0">
          <span
            class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"
          >
            <Icon name="Search" size="20" />
          </span>

          <input
            class="max-w-[340px] pl-10 py-2.5 pr-4 text-gray-500 shadow border border-gray-300 rounded-lg focus:border-indigo-600 focus:ring focus:ring-primary outline-none placeholder:text-sm transition-all"
            type="text"
            placeholder="Search here..."
          />
        </div>
      </div>

      <div class="flex items-center">
        <button class="btn text-gray-400 mr-4 rounded-full">
          <Icon name="Bell" size="20" />
        </button>
        <div class="relative">
          <div class="flex items-center gap-4">
            <div class="hidden md:flex flex-col items-end">
              <p class="text-gray-500 font-medium capitalize">
                Hi! {{ user?.username }}
              </p>
              <span class="text-sm text-gray-400">rauliqbal@example.com</span>
            </div>

            <button
              class="z-10 block w-12 h-12 border border-gray-300 bg-gray-200 overflow-hidden rounded-full focus:outline-none"
              @click="dropdownOpen = !dropdownOpen"
            >
              <span class="text-xl font-bold text-indigo-500">
                {{ getInitials(user?.username) }}
              </span>
            </button>
          </div>

          <div
            v-show="dropdownOpen"
            class="fixed inset-0 z-10 w-full h-full"
            @click="dropdownOpen = false"
          />

          <transition
            enter-active-class="transition duration-150 ease-out transform"
            enter-from-class="scale-95 opacity-0"
            enter-to-class="scale-100 opacity-100"
            leave-active-class="transition duration-150 ease-in transform"
            leave-from-class="scale-100 opacity-100"
            leave-to-class="scale-95 opacity-0"
          >
            <div
              v-show="dropdownOpen"
              class="flex flex-col items-start gap-1 absolute right-0 z-20 w-52 p-3 mt-2 border bg-white rounded-xl border-gray-300 shadow-md"
            >
              <div class="md:hidden flex flex-col mb-4">
                <p class="text-gray-500 font-medium capitalize">
                  Hi! {{ user?.username }}
                </p>
                <span class="text-sm text-gray-400">rauliqbal@example.com</span>
              </div>

              <RouterLink
                to="/dashboard/profile"
                class="text-left rounded-md px-4 py-2 text-sm text-gray-500 hover:bg-primary hover:text-white w-full"
                >Profile
              </RouterLink>

              <button
                @click="logout"
                class="text-left rounded-md px-4 py-2 text-sm text-gray-500 hover:bg-primary hover:text-white w-full"
              >
                Log out
              </button>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>
