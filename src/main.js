import Vue from 'vue'
import App from './App.vue'

  /* import the fontawesome core */
  import { library } from '@fortawesome/fontawesome-svg-core'

  /* import font awesome icon component */
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  import {
    faCartShopping,
    faMagnifyingGlass,
    faWaveSquare,
    faArrowRight,
    faPlay,
    faFolder,
    faDollarSign,
    faAngleRight,
    faClock,
    faDumbbell,
    faChildReaching,
    faArrowRightLong,
    faAngleUp


  } from "@fortawesome/free-solid-svg-icons";

  // Import icone regular /
import {} from "@fortawesome/free-regular-svg-icons";

// Import icone brands /

import {
  faYoutube,
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn

} from "@fortawesome/free-brands-svg-icons"

// add icons to the library /
library.add(faCartShopping, faMagnifyingGlass, faWaveSquare, faYoutube,faArrowRight, faPlay,faFolder,faDollarSign,
  faAngleRight,faClock,faDumbbell,faChildReaching,faArrowRightLong, faFacebookF, faTwitter, faInstagram, faLinkedinIn,
  faAngleUp);
// add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
