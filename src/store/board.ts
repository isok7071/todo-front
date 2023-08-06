// Utilities
import { defineStore } from 'pinia'
import axios from 'axios';

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
        { boardId: 0, name: 'Доска' },
        { boardId: 1, name: 'Доска 1' },
        { boardId: 2, name: 'Доска 2' },
        { boardId: 3, name: 'Доска' },
        { boardId: 4, name: 'Доска 1' },
        { boardId: 5, name: 'Доска 2' },
        { boardId: 6, name: 'Доска' },
        { boardId: 7, name: 'Доска 1' },
        { boardId: 8, name: 'Доска 2' },
        { boardId: 9, name: 'Доска' },
        { boardId: 10, name: 'Доска 1' },
        { boardId: 11, name: 'Доска 2' },
        { boardId: 12, name: 'Доска' },
        { boardId: 13, name: 'Доска 1' },
        { boardId: 14, name: 'Доска 2' },
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
    async createBoard() {
      const result = await axios.post('http://localhost/api/' + 'boards/create', null, {
        params: {
          name: "Новая",
        }
      });
      console.log(result.data);
    },
    async getBoardsList() {
      const result = await axios.get('http://localhost/api/' + 'boards');
      console.log(result.data);
    },
  },

})

