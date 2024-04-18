import TheHome from "../view/home/TheHome.vue";
import TheSent from "../view/sent/TheSent.vue";
import TheTrash from "../view/trash/TheTrash.vue";
import Content from "../view/content/TheContent.vue";
import TheLoginRegister from "../view/login-register/TheLoginRegister.vue";
const routes = [
  {
    path: "/all",
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
    path: "/",
    component: TheLoginRegister,
  },
  {
    path: "/login-register",
    redirect: "/",
  },
];
export default routes;
