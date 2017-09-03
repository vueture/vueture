/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
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
