import PhotoGridComponent from './components/PhotoGridComponent.vue'

export default {
  install: function (Vue, options) {
    Vue.component('photoGrid', PhotoGridComponent)
  }
}
