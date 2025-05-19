import { useLocation, NavLink } from 'react-router-dom';
import { routes } from '../../routes/routes';
import styles from './Menu.module.scss';
import classNames from 'classnames';

type MenuProps = {
  className?: string;
};

export const Menu = ({ className }: MenuProps) => {
  const location = useLocation();

  return (
    <nav className={classNames(styles.menu, className)}>
      <h2 className={styles.menu__title}>UI KIT</h2>
      <ul className={styles.menu__list}>
        {routes.map(({ path, label }) => {
          const isActive = location.pathname === path;

          return (
            <li key={path} className={styles.menu__item}>
              <NavLink
                to={path}
                className={classNames(styles.menu__link, {
                  [styles.menu__link_active]: isActive,
                })}
              >
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
