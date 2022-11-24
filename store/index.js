
export const state = () => ({
  apikey: ''
})

export const getters = {
  getCounter(state) {
    return state.apikey
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
   fetchCounter({ state }) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  }
}