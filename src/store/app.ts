// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      isOverlay: false,
    }
  },
  actions: {
    toggleOverlay(){
      if (this.isOverlay) {
        this.isOverlay = false;
      } else {
        this.isOverlay = true;
      }
    },
  },

})

