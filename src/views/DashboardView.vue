<script setup>
import { useUserStore } from "@/store/user";
import { computed, onMounted } from "vue";

import DashboardLayout from "@/layout/DashboardLayout.vue";
import { VsxIcon } from "vue-iconsax";
import { STATS } from "@/utils/data";
import ChartBar from "@/components/Charts/ChartBar.vue";
import ChartLine from "@/components/Charts/ChartLine.vue";

const userStore = useUserStore();
const users = computed(() => userStore.users);
const user = computed(() => userStore.user);

onMounted(() => {
   userStore.fetcUser();
});
</script>
<template>
   <DashboardLayout>
      <div>
         <h3 class="text-2xl md:text-3xl font-semibold">
            Welcome <span class="font-normal">{{ user?.username }}👋</span>
         </h3>

         <div class="mt-10">
            <!-- START:Stats -->
            <div class="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-5">
               <div v-for="item in STATS" :key="item" class="card">
                  <div
                     class="w-12 h-12 flex items-center justify-center bg-gradient-to-b from-primary/70 to-primary rounded-2xl"
                  >
                     <VsxIcon
                        :iconName="item.icon"
                        :size="24"
                        class="text-white"
                        type="bulk"
                     />
                  </div>

                  <div class="mx-5">
                     <h4 class="text-2xl font-medium text-gray-700">
                        {{ item.goal }}
                     </h4>
                     <div class="text-gray-500 text-sm">
                        {{ item.label }}
                     </div>
                  </div>
               </div>
            </div>
            <!-- END:Stats -->

            <!-- START: BentoGrid -->
            <div class="mt-8 grid md:grid-cols-4 gap-8 lg:grid-cols-5">
               <div class="col-span-3">
                  <ChartLine />
               </div>

               <div class="col-span-2">
                  <ChartBar />
               </div>

               <div class="col-span-3">
                  <div
                     class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
                  >
                     <div
                        class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow-md sm:rounded-lg lg:rounded-2xl"
                     >
                        <div class="px-6 py-5 bg-gray-50">
                           <h6 class="text-gray-600 text-lg">Users Table</h6>
                        </div>

                        <table class="min-w-full">
                           <thead>
                              <tr>
                                 <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                 >
                                    Name
                                 </th>
                                 <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                 >
                                    Email
                                 </th>
                                 <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                 >
                                    status
                                 </th>
                                 <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                 >
                                    Role
                                 </th>
                                 <th
                                    class="px-6 py-3 border-b border-gray-200 bg-gray-50"
                                 />
                              </tr>
                           </thead>

                           <tbody class="bg-white">
                              <tr v-for="i in users">
                                 <td
                                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                                 >
                                    <div class="flex items-center">
                                       <div class="flex-shrink-0">
                                          {{ i.name }}
                                       </div>

                                       <div class="ml-4">
                                          <div
                                             class="text-sm font-medium leading-5 text-gray-900"
                                          ></div>
                                          <div
                                             class="text-sm leading-5 text-gray-500"
                                          ></div>
                                       </div>
                                    </div>
                                 </td>

                                 <td
                                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                                 >
                                    <div class="leading-5 text-gray-900">
                                       {{ i.email }}
                                    </div>
                                 </td>

                                 <td
                                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                                 >
                                    <span
                                       class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                                       >active</span
                                    >
                                 </td>

                                 <td
                                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                                 >
                                    member
                                 </td>

                                 <td
                                    class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                                 >
                                    <a
                                       href="#"
                                       class="text-gray-400 font-medium hover:text-gray-500"
                                       >Edit</a
                                    >
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
            <!-- END: BentoGrid -->
         </div>
      </div>
   </DashboardLayout>
</template>
