import Todos from './../pages/todos/project/projects';
import Budgets from './../pages/budgets/Budgets';
import Dashboard from './../pages/Dashboard';
import Calendar from './../pages/Calendar';
import ProjectDetails from './../pages/todos/project/project_crud/show_project';

import Expenses from './../pages/budgets/Expenses';
import Incomes from './../pages/budgets/Incomes';

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
        name: 'project',
        path: '/admin/todos/project/:project_slug',
        component: ProjectDetails,
        meta:{title: 'Project Details'}
    },
    {
        name: 'budgets',
        path: '/admin/budgets',
        component: Budgets,
        meta:{title: 'Budgets'}
    },
    {
        name: 'incomes',
        path: '/admin/budgets/incomes',
        component: Incomes,
        meta:{title: 'Incomes'}
    },
    {
        name: 'expenses',
        path: '/admin/budgets/expenses',
        component: Expenses,
        meta:{title: 'Expenses'}
    },

];
