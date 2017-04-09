// The Vue build version to load with the `import` command
import Vue from 'vue';
import router from './routes';
import store from './store';
import App from './App';
// import Filters from './assets/filters';

new Vue({
    router,
    store,
    template: '<App/>',
    components: { App }
}).$mount('#app');
