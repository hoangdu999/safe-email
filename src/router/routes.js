import TheHome from "../view/home/TheHome.vue";
import TheSent from "../view/sent/TheSent.vue";
import TheTrash from "../view/trash/TheTrash.vue";
import Content from "../view/content/TheContent.vue";

const routes = [
  {
    path: "/",
    component: TheHome,
  },
  {
    path: "/sent",
    component: TheSent,
  },
  {
    path: "/trash",
    component: TheTrash,
  },
  {
    path: "/:listType/content/:itemId",
    name: "Content",
    component: Content,
  },
];
export default routes;
