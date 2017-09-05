/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */
import Vue from 'vue';

/* ============
 * Plugins
 * ============
 *
 * Import and bootstrap the plugins.
 */
import './plugins/vuex';
import './plugins/axios';
import './plugins/vue-router';
import './plugins/vuex-router-sync';

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */
import App from './App';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
