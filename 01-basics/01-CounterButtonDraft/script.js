import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
  template: `#app`,
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

app.$mount('#app');