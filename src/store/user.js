import { api } from "@/service/api";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      username: "Rauliqbal",
    },
  }),
  getters: {},
  actions: {
    async fetcUser() {
      api
        .get("/user")
        .then((response) => {
          if (response.data && response.data.data) {
            this.user = response.data.data;
          }
          console.log(
            `Selamat Datang %c${this.user.username}!.`,
            "color: green",
          );
          console.log(
            "Organize Work And Life Easily, %cFor Productivity",
            "background-color: pink; color: black",
          );
        })
        .catch((error) => {
          if (error.response.status === 401) {
            localStorage.clear();
            window.location.reload();
          }
        });
    },
  },
});

// try {
//   const response = await api.get("/user");
//   if (response.data && response.data.data) {
//     this.user = response.data.data;
//   }

//   console.log(`Selamat Datang %c${this.user.username}!.`, "color: green");
//   console.log(
//     "Organize Work And Life Easily, %cFor Productivity",
//     "background-color: pink; color: black"
//   );
// } catch (error) {
//   if (error.response.status === 401) {
//     localStorage.clear();
//     window.location.reload();
//   }
// },
