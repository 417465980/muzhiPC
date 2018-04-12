import * as types from './mutation-types' 

const mutations = {
    [types.SET_NEWS_INFO](state, newsInfo) {
        state.newsInfo = newsInfo
    }
}

export default mutations
