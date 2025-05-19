import styles from './Toast.module.scss';
import { Card } from '../Card/Card';
import { Text } from '../Text/Text';

import { CheckIcon } from '../Icons/CheckIcon';
import { InfoIcon } from '../Icons/InfoIcon';
import { WarningIcon } from '../Icons/WarningIcon';
import { CloseIcon } from '../Icons/CloseIcon';
import { DangerIcon } from '../Icons/DangerIcon';
import { Trim } from '../Icons/Trim';

interface ToastProps {
  type: 'success' | 'info' | 'warning' | 'danger';
  title: string;
  description?: string;
}

export const Toast = ({ type, title, description }: ToastProps) => {
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

  return (
    <Card elevation={3} className={styles.toast}>
      <Trim type={type} className={styles.toast__trim} />
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
