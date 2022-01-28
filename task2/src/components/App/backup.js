import "./App.css";
import posts from "../../libs/posts";

function App() {
  return (
    <div className="App">
      <h1>Ben's Pigeon Blog</h1>
      <article className="post">
        <h2>Pigeon Facts</h2>
        <p>
          A study showed that pigeons can learn abstract numerical rules –
          something that, until recently, it was believed only humans and other
          primates could do. Pigeons can also pass the self-awareness mirror
          test, which only a handful of other animal species have done. They can
          also recognise each letter of the human alphabet, differentiate
          between photographs, and even distinguish different humans within a
          photograph.
        </p>
        <p>
          Pigeons mate for life and tend to raise two chicks at the same time.
          Mother and father birds also share the parental duties equally. Both
          sexes take turn incubating the eggs and both feed the chicks 'pigeon
          milk', a special secretion from the lining of the crop which both
          sexes produce.
        </p>
        <p>
          Pigeons and humans have lived in close proximity for thousands of
          years. The first recordings of this date back to Mesopotamia, modern
          Iraq, in 3000 BC.
        </p>
        <p>
          Pigeons can fly at altitudes up to and beyond 6000 feet, and at an
          average speed of 77.6 mph. Their fastest recorded speed is 92.5 mph.
        </p>
        <button className="like-button">Like 👍</button>
        <section className="comment-section">
          <div className="comment">
            <h4>James</h4>
            <p>I didn't know that.</p>
          </div>
          <div className="comment">
            <h4>Liz</h4>
            <p>Neato!</p>
          </div>
        </section>
      </article>
      <h2>Pigeon History</h2>
      <p>
        Throughout their domestication, pigeons have both been allowed to breed
        freely and have been bred with hand-picked mates with the most desirable
        traits. During this selective breeding, pigeon fanciers noticed how
        manipulable many of the physical traits were in these birds. First
        recorded in the 16th century by the Italian natural historian Ulisse
        Aldrovandi, groups of pigeon bred specifically for their looks likely
        existed as far back as the Late Medieval period of Western Europe.
        Though many were enamored with the species, one of the greatest pleasure
        breeders was the 16th-century Mughal ruler, Akbar the Great. His flock
        of 10,000 pigeons moved with him wherever he went, and he spent many
        hours in his dovecotes, picking mates for young squabs, and escaping the
        pressures of ruling an empire.
      </p>
      <p>
        During the Victorian era, “fancy pigeons” became the fascination of
        choice for many upper and middle-class hobbyists, and formal bird shows
        have been held nearly as long as formal dog shows. By the early 1900s,
        pigeons were popular pets even among the working classes—and they got
        into more than just the feral squabs that lived on their rooftops and
        windowsills. In London, one could buy a pair of the distinctive-looking
        Pouter pigeons for 10p, far cheaper than any other fancy breed of pet.
        Pigeons were a little luxury that almost anyone could enjoy.
      </p>
      <button className="like-button">Like 👍</button>
      <section className="comment-section">
        <div className="comment">
          <h4>Tao</h4>
          <p>Wow, that's pretty rad.</p>
        </div>
      </section>
      <article>
        <h2></h2>
      </article>
    </div>
  );
}

export default App;
