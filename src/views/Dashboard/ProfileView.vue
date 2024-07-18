<script setup>
import DefaultLayout from "@/layout/DefaultLayout.vue";
import { useUserStore } from "@/store/user";
import { computed, onMounted } from "vue";
import { formatDate } from "../../utils/helper";

const userStore = useUserStore();
const user = computed(() => userStore.user);

onMounted(() => {
  userStore.fetcUser();
});
</script>
<template>
  <DefaultLayout>
    <h3 class="text-2xl  font-semibold text-white">Profile</h3>
    <div class="mt-10">
      <table>
        <tr>
          <th class="text-left w-60">Username</th>
          <td>: {{ user?.username }}</td>
        </tr>
        <tr>
          <th class="text-left w-60">Email</th>
          <td>: {{ user?.email }}</td>
        </tr>
        <tr>
          <th class="text-left w-60">Tanggal Pendaftaran</th>
          <td>: {{ formatDate(user?.registrationDate) }}</td>
        </tr>
      </table>
    </div>
  </DefaultLayout>
</template>
