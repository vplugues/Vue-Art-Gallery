import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
 state: {
   currentUser: {
     username: '',
     firstName: '',
     lastName: '',
   },
   error: '',
   loggedIn: false,
  },
 mutations: {
    // Takes the value entered by the user and assigns it to Current User
    SET_CURRENT_USER(state, currentUser) {
      state.currentUser = currentUser;
    },
    // Takes the value of Logged In Status and assigns it to Logged In
    SET_CURRENT_USER_STATUS(state, status) {
      state.currentUser.loggedIn = status;
    },
 },
 actions: {
     // Sets the Current User Object
     setCurrentUser({commit}, currentUser) {
         commit('GET_CURRENT_USER', currentUser);
     },

     // Sets the Status of Logged In
     setCurrentUserStatus({commit}, status) {
         commit('GET_CURRENT_USER_STATUS', status);
     }
 },
 getters: {
    username: state => state.currentUser.username,   // gets me the current user name
    logged_in: state => state.currentUser.logged_in, // gets me the current user logged-in
    error: state => state.error,                     // gets me the current error
    first: state => state.currentUser.firstName,     // gets me the current user firstName
    last: state => state.currentUser.lastName,       // gets me the current user lastName
  }
});