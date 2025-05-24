import { createContext, useContext, useEffect, useState } from 'react';

export interface PostData {
  id: number;
  userId: number;
  title: string;
  body: string;
  completed: boolean;
  authorName: string;
}

const PostsContext = createContext({ posts: [] as PostData[] });

export const usePosts = () => useContext(PostsContext);

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (initialized) return;
    setInitialized(true);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        const posts = data.map((post: { id: number; userId: number; title: string; body: string }) => ({
          id: post.id,
          userId: post.userId,
          title: post.title,
          body: post.body,
          completed: true,
          authorName: `Автор ${post.userId}`,
        }));

        setPosts(posts);
      })
      .catch((error) => {
        console.error('Ошибка загрузки постов:', error);
      });
  }, [initialized]);

  return <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>;
};
