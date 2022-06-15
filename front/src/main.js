import {createApp} from "vue";
import App from "./App.vue";
import router from "./router"; // <---

// Taiwlwind
import "./index.css";

// Axios
import axios from "axios";
import VueAxios from "vue-axios";

// Auth0
import {createAuth0} from "@auth0/auth0-vue";

const app = createApp(App);

app.use(router);

app.use(
    createAuth0({
        domain: "dev-epk7auvt.us.auth0.com",
        client_id: "HJyw63LiVUTXnUat6QQyXjNAEX4O9SQQ",
        redirect_uri: window.location.origin,
    })
);
app.use(VueAxios, axios);
app.mount("#app");
