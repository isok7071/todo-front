// Utilities
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', {
  state: () => {
    return {
      activeBoard: <activeBoard>{
        boardId: 0,
        content: '',
        name: '',
        stages_id: 0,
      },
      boardsList: <boardType[]>[
        { boardId: 0, name: 'Доска'},
        { boardId: 1, name: 'Доска 1' },
        { boardId: 2, name: 'Доска 2' }
      ],
      boardCreationForm: {

      }
    }
  },
  actions: {
    openBoardCreationForm() {
      // this.card.isOpened = false;
      this.boardsList
    },
  },

})
