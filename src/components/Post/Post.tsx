import styles from './Post.module.scss';
import { Card } from '../Card/Card';
import { Heading } from '../Heading/Heading';
import { Paragraph } from '../Paragraph/Paragraph';
import CheckIcon from '../Icons/CheckIcon.svg?react';

interface PostProps {
  userId: number;
  title: string;
  body: string;
  completed?: boolean;
}

export const Post = ({ userId, title, body, completed }: PostProps) => {
  return (
    <Card elevation={3} className={styles.post}>
      <div className={styles.post__header}>
        <Heading size={400}>Автор: {userId}</Heading>
        {completed && <CheckIcon className={styles.post__icon} />}
      </div>

      <Heading size={500}>{title}</Heading>

      <Paragraph size={400} className={styles.post__body}>
        {body}
      </Paragraph>
    </Card>
  );
};
