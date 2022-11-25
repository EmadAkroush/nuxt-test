
export const state = () => ({
  apikey: '11'
})

export const getters = {
  getapi(state) {
    return state.apikey
  }
}

export const mutations = {
  getapi(state , number) {
    state.apikey = number
  }
}

export const actions = {
   fetchCounter({ state  }) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  }
}