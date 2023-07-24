// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      card: {
        isOpened: false,
        title: '',
        content: '',
      },
    }
  },
  actions: {
    closeCard() {
      this.card.isOpened = false;
    },
    openCard() {
      this.card.isOpened = true;
    }
  },

})
