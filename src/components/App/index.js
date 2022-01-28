import "./App.css";
import articles from "../../libs/articles";

function App() {
  return (
    <div className="App">
      <h1>WikiPigeon</h1>
      <article className="post">
        <h2>{articles[0].title}</h2>
        {articles[0].paragraphs.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
        <button className="like-button">Like 👍</button>
        <section className="comment-section">
          {articles[0].comments.map((comment) => {
            return (
              <div className="comment">
                <h4>{comment.name} says:</h4>
                <p>{comment.text}</p>
              </div>
            );
          })}
        </section>
      </article>
      <h2>{articles[1].title}</h2>
      {articles[1].paragraphs.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
      <button className="like-button">Like 👍</button>
      <section className="comment-section">
        {articles[1].comments.map((comment) => {
          return (
            <div className="comment">
              <h4>{comment.name} says:</h4>
              <p>{comment.text}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
