// Utilities
import { defineStore } from 'pinia'
import axios from 'axios';
import { useAppStore } from './app';
//TODO переписать на composition api
export const useBoardStore = defineStore('board', {
  state: () => {
    return {
      activeBoard: <activeBoard>{
        id: 0,
        content: '',
        name: '',
        stages_id: 0,
      },
      boardsList: <boardType[]>{},
      isBoardListLoading: false,
      boardForm: <boardForm>{
        isOpened: false,
        data: {
          name: '',
        }
      },
      appStore: useAppStore(),

    }
  },
  actions: {

    //TODO убрать url в env
    //Сделать проверку на то что может быть пустой массив досок
    openBoardCreationForm() {
      // this.card.isOpened = false;
      this.boardsList
    },
    async getBoardsList() {
      this.appStore.toggleOverlay()
      const result = await axios.get('http://localhost/api/' + 'boards');
      this.boardsList = result.data;
      this.appStore.toggleOverlay()

    },
    async deleteBoard(id: number | undefined) {
      if (id === undefined) {
        return;
      }
      this.appStore.toggleOverlay()
      await axios.post('http://localhost/api/' + 'boards/delete', null, {
        params: {
          id: id,
        },
      });
      this.getBoardsList();
      this.appStore.toggleOverlay()

    },
    async sendBoardForm() {
      //TODO обработка ошибки, валидация
      if (!this.boardForm.data.name?.length) {
        return;
      }
      this.appStore.toggleOverlay()
      await axios.post('http://localhost/api/' + 'boards/create', null, {
        params: {
          name: this.boardForm.data.name,
        }
      });
      this.boardForm.isOpened=false;
      this.resetForm();
      this.getBoardsList();
      this.appStore.toggleOverlay()
    },
    resetForm() {
      this.boardForm.data.name = null;
    },
    // toggleAttribute(attrToToggle: boolean) {
    //   if (attrToToggle) {
    //     attrToToggle = false;
    //   } else {
    //     attrToToggle = true;
    //   }
    // },
  },

})

