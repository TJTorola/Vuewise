import Vue from 'vue';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
  });
});
