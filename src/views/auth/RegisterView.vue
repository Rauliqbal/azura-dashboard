<script setup>
import RegisterForm from "@/components/Authentication/RegisterForm.vue";
</script>
<template>
  <div
    class="grid lg:grid-cols-5 h-screen overflow-hidden items-center justify-center"
  >
    <div
      class="col-span-3 overflow-hidden rounded-r-2xl h-full hidden lg:block"
    >
      <img
        class="object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="NotesPad Image"
      />
    </div>

    <RegisterForm class="col-span-2" />
  </div>
</template>
