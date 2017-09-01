/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */

/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/pages/home/index'),
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
