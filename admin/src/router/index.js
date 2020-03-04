import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/blogs/List',
        name: 'BlogsList',
        component: () => import('../views/BlogsList.vue')
      },
      {
        path: '/blogs/editor/:id',
        name: 'BlogsEditor',
        component: () => import('../views/BlogsEditor.vue')
      },
      {
        path: '/comment/List',
        name: 'CommentList',
        component: () => import('../views/CommentsList.vue')
      },
      {
        path: '/comment/editor/:id',
        name: 'CommentEditor',
        component: () => import('../views/CommentsEditor.vue')
      },
      {
        path: '/users/List',
        name: 'UsersList',
        component: () => import('../views/UsersList.vue')
      },
      {
        path: '/users/editor/:id',
        name: 'UsersEditor',
        component: () => import('../views/UsersEditor.vue')
      },
      {
        path: '/messages/List',
        name: 'MessagesList',
        component: () => import('../views/MessagesList.vue')
      },
      {
        path: '/messages/editor/:id',
        name: 'MessagesEditor',
        component: () => import('../views/MessagesEditor.vue')
      },
      {
        path: '/friends/List',
        name: 'FriendsList',
        component: () => import('../views/FriendsList.vue')
      },
      {
        path: '/Friends/editor/:id',
        name: 'FriendsEditor',
        component: () => import('../views/FriendsEditor.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
