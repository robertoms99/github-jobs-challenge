import Home from "../../infrastructure/views/pages/Home";

const APP_ROUTES = [
  {
    id: 1,
    path: "/",
    component: Home,
  },
  {
    id: 2,
    path: "/job/:slug",
    component: Home,
  },
];

export { APP_ROUTES };
