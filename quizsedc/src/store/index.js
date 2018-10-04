import Vue from 'vue';
import Vuex from 'vuex';

import {axiosQuiz} from '../axiosConfig';

Vue.use(Vuex);

export default new Vuex.Store({
    state : {

    },
    getters : {

    },
    mutations : {

    },
    actions : {
        getQuizes({commit},payload){
           axiosQuiz.get('')
           .then((response) =>{
                console.log(response);
           })
           .catch((error) => {
               alert(error);
           }) 
        }
    }
})