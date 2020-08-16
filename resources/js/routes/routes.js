// import Todos from './../pages/todos/project/projects';
// import Budgets from './../pages/budgets/Budgets';
// import Dashboard from './../pages/Dashboard';
// import Calendar from './../pages/Calendar';
// import ProjectDetails from './../pages/todos/project/project_crud/show_project';
// import Settings from '../pages/Settings';
// import StickyNote from '../pages/sticky-notes/StickyNote';
// import Expenses from './../pages/budgets/Expenses';
// import Incomes from './../pages/budgets/Incomes';

import Reports from './../pages/budgets/reports/Reports';//problem in lazy load

const Dashboard = ()    => import(/* webpackChunkName: "js/dashboard" */'./../pages/Dashboard');
const Calendar = ()     => import(/* webpackChunkName: "js/calendar" */'./../pages/Calendar');
const Todos = ()        => import(/* webpackChunkName: "js/todos" */'./../pages/todos/project/projects');
const Expenses = ()     => import(/* webpackChunkName: "js/expenses" */'./../pages/budgets/Expenses');
const Incomes = ()      => import(/* webpackChunkName: "js/incomes" */'./../pages/budgets/Incomes');
const Budgets = ()      => import(/* webpackChunkName: "js/budgets" */'./../pages/budgets/Budgets');
const Settings = ()      => import(/* webpackChunkName: "js/settings" */'../pages/Settings');
const StickyNote = ()      => import(/* webpackChunkName: "js/stickyNote" */'../pages/sticky-notes/StickyNote');
const ProjectDetails = ()  => import(/* webpackChunkName: "js/projectDetails" */'./../pages/todos/project/project_crud/show_project');

export const routes = [

    {
        name:'dashboard',
        path: '/admin',
        component: Dashboard,
        meta:{title: 'Dashboard'}
    },
    {
        name: 'calendar',
        path: '/admin/calendar',
        component: Calendar,
        meta:{title: 'Calendar'}
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
        name: 'notes',
        path: '/admin/notes',
        component: StickyNote,
        meta:{title: 'Notes'}
    },
    {
        name: 'settings',
        path: '/admin/settings',
        component: Settings,
        meta:{title: 'Settings'}
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

    {
        name: 'budget-report',
        path: '/admin/budgets/reports',
        component: Reports,
        meta:{title: 'Reports'}
    },

];
