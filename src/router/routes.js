import TheHome from "../view/home/TheHome.vue";
import TheSent from "../view/sent/TheSent.vue";
import TheTrash from "../view/trash/TheTrash.vue";
import Content from "../view/content/TheContent.vue";
import TheLoginRegister from "../view/login-register/TheLoginRegister.vue";
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
  {
    path: "/login-register",
    component: TheLoginRegister,
  },
];
export default routes;
