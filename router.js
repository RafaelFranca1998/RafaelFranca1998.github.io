import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Signin from '@/views/user/Signin.vue';
import Signup from '@/views/user/Signup.vue';
import PatientIdentification from '@/views/attendance/new/PatientIdentification.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/signin',
            name: 'Signin',
            component: Signin,
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup,
        },
        {
            path: '/attendance/new/identification',
            name: 'PatientIdentification',
            component: PatientIdentification,
        },
    ],
});
