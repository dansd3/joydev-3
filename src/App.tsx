import { Routes, Route } from 'react-router-dom';
import { routes } from './routes/routes';
import { Menu } from './components/Menu/Menu';
import styles from './styles/App.module.scss';

function App() {
  return (
      <div className={styles.app}>
        <Menu className={styles.app__menu} />
        <main className={styles.app__content}>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </main>
      </div>
  );
}

export default App;
