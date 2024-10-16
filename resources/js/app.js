import Vue from "vue";
import { createInertiaApp } from "@inertiajs/vue2";

// Definir una función para resolver el nombre de la página
const resolvePageComponent = (name) => {
    return import(`./Pages/${name}.vue`).then((module) => module.default);
};

createInertiaApp({
    resolve: resolvePageComponent,
    setup({ el, App, props, plugin }) {
        Vue.use(plugin);

        new Vue({
            render: (h) => h(App, props),
        }).$mount(el);
    },
});
