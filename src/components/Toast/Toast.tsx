import classNames from 'classnames';
import styles from './Toast.module.scss';
import { Card } from '../Card/Card';
import { Text } from '../Text/Text';
import  CheckIcon  from '../Icons/CheckIcon.svg?react';
import  InfoIcon  from '../Icons/InfoIcon.svg?react';
import  WarningIcon  from '../Icons/WarningIcon.svg?react';
import  CloseIcon  from '../Icons/CloseIcon.svg?react';
import  DangerIcon  from '../Icons/DangerIcon.svg?react';
import  Trim  from '../Icons/Trim.svg?react';

interface ToastProps {
  type: 'success' | 'info' | 'warning' | 'danger';
  title: string;
  description?: string;
  className?: string;
}

export const Toast = ({ type, title, description, className }: ToastProps) => {
  const renderIcon = () => {
    switch (type) {
      case 'success':
        return <CheckIcon />;
      case 'info':
        return <InfoIcon />;
      case 'warning':
        return <WarningIcon />;
      case 'danger':
        return <DangerIcon />;
    }
  };

  const trimClass = classNames(
    styles.toast__trim,
    styles[`toast__trim--${type}`]
  );

  return (
    <Card elevation={3} className={classNames(styles.toast, className)}>
      <Trim className={trimClass} />
      <div className={styles.toast__main}>
        <div className={styles.toast__iconWrapper}>{renderIcon()}</div>
        <div className={styles.toast__content}>
          <div className={styles.toast__header}>
            <Text size={400} weight="semibold" className={styles.toast__text}>
              {title}
            </Text>
            <CloseIcon className={styles.toast__close} />
          </div>
          {description && (
            <Text size={400} weight="default" className={styles.toast__desc}>
              {description}
            </Text>
          )}
        </div>
      </div>
    </Card>
  );
};
