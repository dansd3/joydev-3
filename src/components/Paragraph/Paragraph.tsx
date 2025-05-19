import React from 'react';
import styles from './Paragraph.module.scss';
import classNames from 'classnames';

export interface ParagraphProps {
  size?: 300 | 400 | 500;
  className?: string;
  children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({ size = 400, children, className }) => {
  const classes = classNames(styles.paragraph, styles[`paragraph--size--${size}`], className);

  return <p className={classes}>{children}</p>;
};
