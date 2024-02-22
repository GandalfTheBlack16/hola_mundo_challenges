import { MessagesPage } from './pages/Messages';
import { UsersPage } from './pages/Users';
import { CategoriesPage } from './pages/Categories';

export const routes = [
    { label: 'Messages', href: '/', component: MessagesPage },
    { label: 'Categories', href: '/categories', component: CategoriesPage},
    { label: 'Users', href: '/users', component: UsersPage},
]