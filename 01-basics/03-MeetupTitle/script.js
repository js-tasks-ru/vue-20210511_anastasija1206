 import Vue from './vendor/vue.esm.browser.js';

// Требуется создать Vue приложение
const app = new Vue({
    el: '#app',
    data(){
        return{
            countMeetups: [1, 2, 3, 4, 5],
            pickedId: '',
            title: ''
        }
    },
    watch: {
        pickedId(){
            this.getMetups()
        }

    },
    methods: {
        getMetups() {
            fetch(`https://course-vue.javascript.ru/api/meetups/${this.pickedId}`)
            .then(response => response.json())
            .then(result => this.title = result.title)
        }
    }
})