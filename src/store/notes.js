import { api } from "@/service/api";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";
const route = useRoute();

export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: null,
    noteById: null,
  }),
  getters: {},
  actions: {
    // Get All Notes
    async fetchNotes() {
      api
        .get("/note")
        .then((response) => {
          if (response.data && response.data.data) {
            this.notes = response.data.data;
          }
        })
        .catch((error) => {
          if (error.response?.status === 401) {
            localStorage.clear();
            window.location.reload();
          }
        });
    },
    // Get All Notes
    async fetchNotesById() {
      api
        .get(`/note/${route.params.id}`)
        .then((response) => {
          if (response.data && response.data.data) {
            this.noteById = response.data.data;
          }
        })
        .catch((error) => {
          if (error.response?.status === 401) {
            localStorage.clear();
            window.location.reload();
          }
        });
    },

    // Create Note
  },
});
