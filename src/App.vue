<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  /* ============
   * Entry Point
   * ============
   *
   * The entry point of the application
   */
  import store from './store';
  import { router } from './bootstrap';

  export default {
    /**
     * The name of the application.
     */
    name: 'vueture',

    /**
     * The Vuex store
     */
    store,

    /**
     * The router
     */
    router,
  };
</script>
