import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { JSDOM } from "jsdom";
import VueResource from 'vue-resource';

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
const window = new JSDOM(documentHTML).window;

window.resizeTo = (width, height) => {
  window.innerWidth = width || window.innerWidth;
  window.innerHeight = width || window.innerHeight;
  window.dispatchEvent(new Event('resize'));
};

window.scrollTo = (x, y) => {
  window.pageXOffset = 0
  window.pageYOffset = 0
}

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueResource)

