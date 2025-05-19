import classNames from 'classnames';
import styles from './Badge.module.scss';

interface BadgeProps {
  shape?: 'badge' | 'pill';
  type?: 'subtle' | 'solid';
  color: 'neutral' | 'green' | 'blue' | 'red' | 'orange' | 'purple' | 'yellow' | 'teal';
  children: string;
  className?: string;
}

export const Badge = ({
  shape = 'badge',
  type = 'subtle',
  color,
  children,
  className,
}: BadgeProps) => {
  const classes = classNames(
    styles.badge,
    styles[`badge--shape--${shape}`],
    styles[`badge--type--${type}--${color}`],
    className
  );

  return <span className={classes}>{children}</span>;
};
