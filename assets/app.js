// import Vue from 'vue';
// import Vuex from 'vuex';
// import VueEasytable from "vue-easytable";
// import VueClipboard from 'vue-clipboard2'
// import VueToastr from 'vue-toastr'
// console.log(1111);
// Vue.use(VueClipboard);
// Vue.use(VueEasytable);
// Vue.use(Vuex);
// Vue.use(VueToastr, {
//     defaultProgressBar: false
// });
//
// Vue.filter('format_money', (money) => {
//     if(!money.amount)
//         return;
//
//     const formatter = new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: money.currency
//     });
//     return formatter.format(money.amount / 100);
// });
// Vue.filter('format_seconds', (time) => {
//     const hours = Math.floor(time / 60 / 60);
//     let minutes = Math.floor( (time - hours * 60 * 60) / 60 );
//     if(minutes < 10)
//         minutes = '0'+minutes;
//     let seconds = time - hours * 60 * 60 - minutes * 60;
//     if(seconds < 10)
//         seconds = '0'+seconds;
//
//     let result = '';
//     if(hours)
//         result = hours+':';
//     result += minutes+':'+seconds;
//
//     return result;
// })
//
// Vue.filter('format_cents', (money) => {
//     if (!money && money !== 0)
//         return;
//
//     const formatter = new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD'
//     });
//     return formatter.format(money / 100);
// })
//
// Vue.filter('capitalize', (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// });
//
// const files = require.context('./components', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
//
// import notes from './store/notes';
// import patients from "./store/patients";
// import flashes from "./store/flashes";
// import statistics from "./store/statistics";
// import reports from "./store/reports";
//
// const store = new Vuex.Store({
//     modules: {
//         notes,
//         patients,
//         flashes,
//         statistics,
//         reports
//     }
// });
//
// export const eventBus = new Vue();
//
// global.App = new Vue({
//     el: '#app',
//     store,
//
//     data: () => ({
//         modalComponent: null,
//         modalType: null,
//         modalData: {},
//         modalIsLoading: false,
//         modalId: null
//     }),
//
//     methods: {
//         openModal(modal, data, id, typeClass) {
//             this.modalComponent = modal;
//             this.modalData = data;
//             this.modalType = typeClass;
//             this.modalId = id;
//         },
//         closeModal() {
//             this.modalComponent = null;
//             this.modalType = null;
//             this.modalId = null;
//             this.modalData = {};
//             this.modalIsLoading = false;
//         },
//         toggleModalLoading() {
//             this.modalIsLoading = !this.modalIsLoading;
//         }
//     }
// });
