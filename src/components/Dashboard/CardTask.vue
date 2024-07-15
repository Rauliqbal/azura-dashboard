<script setup>
defineProps({
  title: String,
  content: String,
  createdAt: String,
});
</script>
<template>
  <RouterLink
    to="/"
    class="flex justify-between gap-10 p-4 rounded-lg bg-slate-100 transition-all duration-300 ease-out"
  >
    <div>
      <div>
        <h4 class="font-medium text-xl">{{ title }}</h4>
        <p class="text-gray-400 font-medium text-sm mt-1">
          Created at {{ createdAt }}
        </p>

        <p class="text-gray-600 line-clamp-2 mt-4">{{ content }}</p>
      </div>
      <div class="flex gap-4 mt-4">
        <div class="inline-flex gap-2 items-center">
          <i class="text-xl ai-shipping-box-v1"></i>
          <p class="text-sm font-semibold">Medium</p>
        </div>
        <div class="inline-flex gap-2 items-center">
          <i class="text-xl ai-flag"></i>
          <p class="text-sm font-semibold">In Progress</p>
        </div>
      </div>
    </div>
    <div class="inline-flex items-center">
      <button class="btn-delete">Delete</button>
    </div>
  </RouterLink>
</template>
