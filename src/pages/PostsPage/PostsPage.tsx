import { usePosts } from '../../context/PostsContext';
import { Post } from '../../components/Post/Post';
import styles from './PostsPage.module.scss';

export const PostsPage = () => {
  const { posts } = usePosts();

  return (
    <div className={styles.page}>
      <h1 className={styles.page__title}>Посты</h1>
      <div className={styles.page__grid}>
        {posts.map((post) => (
          <Post key={post.id} userId={post.userId} title={post.title} body={post.body} completed={post.completed} />
        ))}
      </div>
    </div>
  );
};
