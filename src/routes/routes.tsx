import WelcomePage from '../pages/WelcomePage/WelcomePage';
import { PostsPage } from '../pages/PostsPage/PostsPage';

export const routes = [
  { path: '/', label: 'Приветствие', element: <WelcomePage /> },
  { path: '/posts', label: 'Posts', element: <PostsPage /> },
];
