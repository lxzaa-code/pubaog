import { defineStore } from 'pinia'

export const useCounterStore = defineStore("admin", {

  state: () => {
    return {
      id: 0,
      account: "",
      token: ""
    }
  },
  actions: {},
  getters: {}

})
