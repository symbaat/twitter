import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

       state: {
           posts: [],    
       },
       mutations:{
        NEW_POST (state, newPost){
            state.posts.push(newPost)
        }
    },
       actions: {
        addNewPost({commit}, newPost){
          commit('NEW_POST', newPost)
        }
       }, 
       getters: {
           posts(state){
               return state.posts
           }
       },
      
})