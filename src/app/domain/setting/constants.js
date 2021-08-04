import Home from "../../infrastructure/views/pages/Home";
import Career from "../../infrastructure/views/pages/Career";

const APP_ROUTES = [
  {
    id: 1,
    path: "/",
    component: Home,
  },
  {
    id: 2,
    path: "/career/:slug",
    component: Career,
  },
];

export { APP_ROUTES };
