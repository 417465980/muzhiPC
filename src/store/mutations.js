import * as types from './mutation-types' 

const mutations = {
    [types.SET_NEWS_INFO](state, newsInfo) {
        state.newsInfo = newsInfo
    },
    [types.SET_USER_NAME](state, userName) {
        state.userName = userName
    }
}


export default mutations
