
export const state = () => ({
  apikey: '11' ,
  cookies : '' ,
  logout  : false
})

export const getters = {
  getapi(state) {
    return state.apikey
  },
  getCookies(state) {
    return state.cookies
  },
  getLogout(state) {
    return state.logout
  }


}

export const mutations = {
  getApi(state , number) {
    state.apikey = number
  },
  getCookies(state , cookie){
    state.cookies = cookie
  },
  getLogout(state , boolian) {
    state.logout = boolian
  }
}

export const actions = {
   getApiAction( context , input ) {
    // make request
    this.$cookies.set(`Tokens`, input , {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
   })
   context.commit('getCookies', this.$cookies.get('Tokens'))

  },
  setAction( context ){
    context.commit('getCookies', this.$cookies.get('Tokens'))
  }
  
}