import { useState, useMemo, useEffect } from 'react';
import { usePosts, type PostData } from '../../context/PostsContext';
import { Post } from '../../components/Post/Post';
import { FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { useDebounce } from '../../hooks/useDebounce';

import styles from './PostsPage.module.scss';

export const PostsPage = () => {
  const { posts, loading } = usePosts();

  const [search, setSearch] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [onlyCompleted, setOnlyCompleted] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState<PostData[]>([]);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const runFilter = async () => {
      const filtered = posts.filter((post) => {
        const authorSelect = !selectedAuthor || post.authorName === selectedAuthor;
        const completedSelect = !onlyCompleted || post.completed;

        const words = debouncedSearch
          .toLowerCase()
          .split(/[,\s]+/)
          .filter((w) => w.trim() !== '');

        const keywordFound = words.length === 0 || words.find((word) => new RegExp(word, 'i').test(post.title + ' ' + post.body)) !== undefined;

        return authorSelect && completedSelect && keywordFound;
      });

      setFilteredPosts(filtered);
    };

    runFilter();
  }, [posts, selectedAuthor, onlyCompleted, debouncedSearch]);

  const uniqueAuthors = useMemo(() => {
    return [...new Set(posts.map((p) => p.authorName))];
  }, [posts]);

  return (
    <div className={styles.page}>
      <h1 className={styles.page__title}>Посты</h1>

      <FilterPanel
        authors={uniqueAuthors}
        search={search}
        completed={onlyCompleted}
        selectedAuthor={selectedAuthor}
        onSearchChange={setSearch}
        onAuthorChange={setSelectedAuthor}
        onCompletedToggle={setOnlyCompleted}
      />

      {loading ? (
        <p>Загрузка...</p>
      ) : filteredPosts.length === 0 ? (
        <p>По вашему запросу ничего не найдено</p>
      ) : (
        <div className={styles.page__grid}>
          {filteredPosts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      )}
    </div>
  );
};
