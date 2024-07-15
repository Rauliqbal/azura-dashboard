<script setup>
import DefaultLayout from "@/layout/DefaultLayout.vue";
import { useNotesStore } from "@/store/notes";
import { onMounted } from "vue";

const noteStore = useNotesStore();
const notes = computed(() => noteStore.notes);

onMounted(() => {
  noteStore.fetchNotesById;
});
</script>
<template>
  <DefaultLayout>
    <div>
      <h1>Hello WOrld {{ $route.params.id }}</h1>
    </div>
  </DefaultLayout>
</template>
