import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/movies",
    name: "movies",
    component: () => import("./views/MoviesList.vue")
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("./views/EditMovie.vue"),
    props: true
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./views/AddMovie.vue")
  },
  {
    path: "/view",
    name: "view",
    component: () => import("./views/ViewMovie.vue"),
    props: true
  },
  {
    path: "/addLesson",
    name: "addLesson",
    component: () => import("./views/AddLesson.vue"),
    props: true
  },
  {
    path: "/editLesson",
    name: "editLesson",
    component: () => import("./views/EditLesson.vue"),
    props: true
  }
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/movie-frontend-1/',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;