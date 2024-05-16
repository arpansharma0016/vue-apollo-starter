import Vue from "vue";
import VueRouter from "vue-router";
import { gql } from "apollo-boost";
import { apolloClient } from "./vue-apollo";

const ME_QUERY = gql`
  query Query($token: String!) {
    meQuery(token: $token) {
      email
    }
  }
`;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./components/home/homePage.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./components/home/registerUser.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/home/loginUser.vue"),
      meta: { redirectIfLoggedIn: true },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("./components/dashboard/homePage.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/dashboard/qwerty",
      name: "qwerty",
      component: () => import("./components/dashboard/homePage2.vue"),
    },
    {
      path: "*",
      name: "notFound",
      component: () => import("./components/home/notFound.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // to.matched.some(({meta}) => {
  //   document.title = meta.pageTitle;
  //   return false;
  // });
  console.log(1, to);
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log(2);
    if (localStorage.getItem("token") == null) {
      console.log(3);
      next({
        name: "login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      console.log(4);
      const token = localStorage.getItem("token");
      if (token) {
        console.log(5);
        apolloClient
          .query({
            query: ME_QUERY,
            fetchPolicy: "no-cache",
            variables: {
              token,
            },
          })
          .then((userResponse) => {
            console.log("response - ", userResponse);
            next();
          })
          .catch((error) => {
            console.log("error - ", JSON.stringify(error));
            next({
              name: "login",
              params: { nextUrl: to.fullPath },
            });
          });
      }
    }
  } else if (to.matched.some((record) => record.meta.redirectIfLoggedIn)) {
    if (localStorage.getItem("token")) {
      next({ name: "dashboard" });
    } else {
      console.log(7);
      next();
    }
  } else {
    next();
  }
  console.log(6, from);
});

export default router;
