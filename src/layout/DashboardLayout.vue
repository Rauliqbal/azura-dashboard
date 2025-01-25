<script setup>
import Footer from "@/components/Dashboard/Footer.vue";
import Header from "@/components/Dashboard/Header.vue";
import Sidebar from "@/components/Dashboard/Sidebar.vue";
</script>
<template>
   <div class="flex h-screen overflow-hidden">
      <!-- Sidebar -->
      <Sidebar />

      <!-- Content Navbar -->
      <div class="relative flex flex-1 flex-col overflow-hidden h-screen">
         <!-- Header -->
         <Header />

         <!-- Body -->
         <main class="z-10 rounded-3xl bg-background overflow-y-auto">
            <div class="mx-auto max-w-screen-2xl p-4 lg:px-10 mt-4">
               <slot />
            </div>
         </main>

         <!-- Footer -->
         <Footer />
      </div>
   </div>
</template>
