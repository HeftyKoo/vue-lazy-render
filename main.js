import lazy from './src/lazy.vue'

const install = function (Vue) {
    if (install.installed) return;
    Vue.component(lazy.name,lazy)
}


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};


export default {
    install,
}
