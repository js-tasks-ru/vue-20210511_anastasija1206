import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
  el: '#app',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    counterButton() {
      this.count++;
    },
  },
});