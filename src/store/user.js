import { api } from "@/service/api";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      username: "Rauliqbal",
      email: "example@gmail.com",
      registrationDate: "2024-07-16T02:38:31.113+00:00",
    },
    users: null,
  }),
  getters: {},
  actions: {
    async fetcUser() {
      api
        .get("/users")
        .then((response) => {
          this.users = response.data;
          console.log(
            `Selamat Datang %c${this.user.username}!.`,
            "color: green"
          );
          console.log(
            "Organize Work And Life Easily, %cFor Productivity",
            "background-color: pink; color: black"
          );
        })
        .catch((error) => {
          this.users = null;
        });
    },
  },
});
