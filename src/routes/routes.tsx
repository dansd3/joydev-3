import WelcomePage from '../pages/WelcomePage/WelcomePage';
import HeadingsPage from '../pages/HeadingsPage/HeadingsPage';
import TextPage from '../pages/TextsPage/TextsPage';
import ParagraphsPage from '../pages/ParagraphsPage/ParagraphsPage';
import ButtonsPage from '../pages/ButtonsPage/ButtonsPage';
import CardsPage from '../pages/CardsPage/CardPage';
import BadgesPage from '../pages/BadgesPage/BadgesPage';
import ToastsPage from '../pages/ToastsPage/ToastsPage';

export const routes = [
  { path: '/', label: 'Приветствие', element: <WelcomePage /> },
  { path: '/headings', label: 'Headings', element: <HeadingsPage /> },
  { path: '/text', label: 'Texts', element: <TextPage /> },
  { path: '/paragraphs', label: 'Paragraphs', element: <ParagraphsPage /> },
  { path: '/buttons', label: 'Buttons', element: <ButtonsPage /> },
  { path: '/cards', label: 'Cards', element: <CardsPage /> },
  { path: '/badges', label: 'Badges', element: <BadgesPage /> },
  { path: '/toasts', label: 'Toasts', element: <ToastsPage /> },
];
