import Vue from 'vue';
import Dev from './serve.vue';
// import Button from './../src/lib-components/vue-button.vue';
import Table from './../src/lib-components/vue-table.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');

// new Vue({
//   render: (h) => h(Button, {
//     props: {
//       x: 'test'
//     },
//     on : {
//       clicked: () => {
//         console.log('test');
//       }
//     }
//   }),
// }).$mount('#app');

// new Vue({
//   render: (h) => h(Table, {
//     props: {
//       items: [{
//         name: 'john',
//         age: 14,
//         job: 'coder'
//       }]
//     },
//     on : {
//       "row-clicked": (x) => {
//         console.log('test');
//       }
//     }
//   }),
// }).$mount('#app');
