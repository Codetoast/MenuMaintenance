var Vue = require('vue/dist/vue.js');
var App = require('./app.vue');

new Vue({
    el: '#root',
    components: {
        app: App
    }
}
);