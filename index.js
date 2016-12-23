import lazy from 'src/lazy.vue'

const install = function (Vue) {
    Vue.component(lazy.name,lazy)
}

export default install