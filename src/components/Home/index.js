import articles from "../../libs/articles";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Article from "../Article";
import Header from "../Header";
import PostInput from "../ArticleInput";
import styles from "./Home.module.css";

function Home() {
  const [articlesList, setArticlesList] = useState(articles);
  const { isAuthenticated } = useAuth0();

  function addPost(newPost) {
    setArticlesList([...articlesList, newPost]);
  }

  function deletePost(index) {
    setArticlesList([...articlesList.slice(0, index), ...articlesList.slice(index + 1)]);
  }

  return (
    <div className={styles.container}>
      <Header />
      {!isAuthenticated && <h3 className={styles.message}>Please log in to view posts.</h3>}
      {isAuthenticated && (
        <main className={styles.content}>
          <PostInput addPost={addPost} />
          {articlesList.map(({ title, paragraphs, comments }, index) => (
            <Article
              key={index}
              index={index}
              title={title}
              text={paragraphs}
              defaultComments={comments}
              deletePost={deletePost}
            />
          ))}
        </main>
      )}
    </div>
  );
}

export default Home;
