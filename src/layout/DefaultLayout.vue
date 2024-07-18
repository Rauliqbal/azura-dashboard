<script setup>
import Header from "@/components/Dashboard/Header.vue";
import Sidebar from "@/components/Dashboard/Sidebar.vue";
</script>
<template>
  <div class="flex h-screen overflow-hidden bg-gray-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Content Navbar -->
    <div
      class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
    >
      <div class="bg-primary w-full h-96 absolute top-0 left-0"></div>
      <!-- Header -->
      <Header />

      <!-- Body -->
      <main class="z-10">
        <div class="mx-auto max-w-screen-2xl p-4 lg:px-10">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
