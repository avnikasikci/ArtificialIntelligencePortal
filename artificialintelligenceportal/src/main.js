import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
/*
!!Boostrap İnsert
*/
///



// import BootstrapVue from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-vue.css';
// Vue.use(BootstrapVue);
// Vue.config.productionTip = false;
///


// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './components/ArtificialFace/artificialface.js';
// import './components/ArtificialFace/face-api.min.js';
/*

!! Boostrap İnsert Two Model
*/
// import 'bootstrap-vue';
// import  BootstrapVue  from 'bootstrap-vue';

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
//  import 'bootstrap/dist/css/bootstrap.css';
//  import 'bootstrap-vue/dist/bootstrap-vue.css';
//  import './assets/scss/app.scss';
// Vue.use(BootstrapVue);

// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

createApp(App).use(store).use(router).mount("#app");


// /*
// !! Vue Start Change Compenet.
// */ 
// new Vue({
// render :h=> h(App)
// }).$mount('#app')
