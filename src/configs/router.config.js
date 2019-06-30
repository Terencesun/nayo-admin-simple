/*
* router config file
* */

import { home } from "@/pages";

let routers = [
    {
        tag: "home",
        name: "首页",
        path: "/home",
        icon: "ivu-icon-md-home",
        template: home,
        independent: true
    }
];

routers.before = [
    (to, from, next) => {
        if (to.path != "/home") {
            next("/home");
        } else {
            next();
        }
    }
]


export default routers;