import * as types from './mutation-types'

const actions = {

  [types.SET_SHOW]({
    commit
  }) {
    setTimeout(() => {
      commit('SET_SHOW')
    }, 1000)
  }
}

export default actions
