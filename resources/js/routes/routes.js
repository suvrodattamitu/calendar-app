import Todos from './../pages/Todos';
import Budgets from './../pages/Budgets';
import Dashboard from './../pages/Dashboard';
import Calendar from './../pages/Calendar';

export const routes = [

    {
        name:'dashboard',
        path: '/admin',
        component: Dashboard,
    },
    {
        name: 'calendar',
        path: '/admin/calendar',
        component: Calendar,
        meta:{title: 'calendar'}
    },
    {
        name: 'todos',
        path: '/admin/todos',
        component: Todos,
        meta:{title: 'Todos'}
    },
    {
        name: 'budgets',
        path: '/admin/budgets',
        component: Budgets,
        meta:{title: 'Budgets'}
    }

];
