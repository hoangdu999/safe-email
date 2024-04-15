import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
library.add(faArrowLeftLong, faTrashCan);

// import { library } from "@fortawesome/fontawesome-svg-core";
// import * as Icons from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Object.keys(Icons).forEach((icon) => {
//   if (icon.startsWith("fa")) library.add(Icons[icon]);
// });
let app = createApp(App);
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.config.globalProperties.$state = store.state;
app.mount("#app");
