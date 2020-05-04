import {Layout} from 'components/Layout';
import {PageNotFound} from 'pages/PageNotFound';
import {Author} from "components/Author";

export const routes = [
    {
        path: '/',
        exact: true,
        component: Layout,
    },
    {
        path: '/author/:id([0-9]+)',
        exact: true,
        component: Layout,
    },
    {
        path: '*',
        component: PageNotFound,
    }
];