import Vue from 'vue'
import Router from 'vue-router'
import BaseTable from "@/components/Main/Table/BaseTable";
import BaseCard from "@/components/Main/Card/BaseCard";

Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            redirect: '/table'
        },

        {
            path: '/table',
            component: BaseTable,
        },

        {
            path: '/card',
            component: BaseCard,
        }
    ]
})
