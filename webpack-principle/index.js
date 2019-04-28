//index.js
// const p = document.querySelector('.p');
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', function() {
//     //只有触发事件才回家再对应的js 也就是异步加载
//     require.ensure([], function() {
//         const data = require('./src/js/test');
//         p.innerHTML = data;
//     })
// })

import Vue from 'vue';
import $ from 'jquery';

new Vue({
    el: '#app',
    data: {
        vue_test: 'vue is loaded!'
    }
})

$(function() {
    $('.jq_test').html('jquery is loaded!')
})
