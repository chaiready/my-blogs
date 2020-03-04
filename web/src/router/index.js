import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Index,
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
        meta: {
          title: '曼巴'
        }
      },
      {
        path: "/blogs",
        name: "Blogs",
        component: () => import("../views/BlogsList.vue"),
        meta: {
          title: '博文'
        }
      },
      {
        path: "/blogs/:id",
        name: "BlogsDetails",
        component: () => import("../views/BlogsDetails.vue"),
        meta: {
          title: '博文详情'
        }
      },
      {
        path: "/thoughts",
        name: "Thoughts",
        component: () => import("../views/Thoughts.vue"),
        meta: {
          title: '生活随感'
        }
      },
      {
        path: "/messages",
        name: "Messages",
        component: () => import("../views/Messages.vue"),
        meta: {
          title: '留言'
        }
      },
      {
        path: "/webFriends",
        name: "webFriends",
        component: () => import("../views/WebFriends.vue"),
        meta: {
          title: 'web圈'
        }
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  },
  {
    path: "/aboutMe",
    name: "AboutMe",
    component: () =>
      import("../views/AboutMe.vue"),
      meta: {
        title: '关于我'
      }
  },
  {
    path: "/aboutBlogs",
    name: "aboutBlogs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutBlogs.vue"),
      meta: {
        title: '关于博客'
      }
  },
  
  {
    path: "/computed",
    name: "computed",
    component: () => import("../views/computed.vue"),
    meta: {
      title: '曼巴'
    }
  },  
  {
    path: "/emojiPicker",
    name: "EmojiPicker",
    component: () => import("../EmojiPicker.vue"),
    meta: {
      title: '曼巴'
    }
  },

];
const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  // to and from are both route objects
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router;
