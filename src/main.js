import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

library.add(
  faArrowLeftLong,
  faTrashCan,
  faPaperPlane,
  faGooglePlusG,
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTriangleExclamation
);

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
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});
app.use(vuetify);
app.mount("#app");
