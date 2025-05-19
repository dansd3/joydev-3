import styles from './WelcomePage.module.scss';

const WelcomePage = () => (
  <div className={styles.welcome}>
    <h1 className={styles.welcome__title}>UI KIT</h1>
    <p className={styles.welcome__author}>Надобенко Данил Евгеньевич</p>
  </div>
);

export default WelcomePage;
