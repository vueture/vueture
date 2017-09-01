/* ============
 * Main File
 * ============
 *
 * Will initialize the application
 */
import Vue from 'vue';
import App from './App';
import './bootstrap';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
