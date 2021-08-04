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

const CONTEXT_STATE_FILTERS = {
  location: "",
  description: "",
  isFullTime: false,
};

const DEFAULT_LOCATIONS = ["london", "amsterdam", "new york", "berlin"];

export { APP_ROUTES, DEFAULT_LOCATIONS, CONTEXT_STATE_FILTERS };
