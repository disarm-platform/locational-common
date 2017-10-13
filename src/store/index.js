import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {},
  state: {
    config: {},
    data: []
  },
  getters: {},
  mutations: {
    set_config: (state, config) => {
      state.config = config
    },
    add_data (state, {id, row}) {
      const data_to_add_to = state.data.find(d => d.id === id)
      data_to_add_to.rows.push(row)
    },
    push_data (state, data_to_push) {
      state.data.push(data_to_push)
    }
  },
  actions: {
    async get_data (context, id) {
      const res = await fetch(`/static/data/${id}.json`)
      const json = await res.json()
      context.commit('push_data', json)
    }
  }
})
