// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
// import firebase from 'firebase'

Vue.use(VueFire)

Vue.config.productionTip = false

// var config = {
//   apiKey: 'AIzaSyBkmrCaNIfJo8zXJODKD51NHjU9HWtSTxM',
//   authDomain: 'kanban-vue.firebaseapp.com',
//   databaseURL: 'https://kanban-vue.firebaseio.com',
//   projectId: 'kanban-vue',
//   storageBucket: 'kanban-vue.appspot.com',
//   messagingSenderId: '429292777928'
// }
// firebase.initializeApp(config)
// Vue.prototype.$db = firebase.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
