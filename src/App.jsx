import { useState } from "react";
import axios from "axios";
import setHexColor from "./utils/colors";
import TweetIcon from "./components/TweetIcon";

function App() {
  const [quote, setQuote] = useState({
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "growth",
  });
  const [color, setColor] = useState("#F39BA3");

  document.body.style = `background: ${color};`;

  const displayQuote = async () => {
    try {
      const resp = await axios({
        url: "https://api.api-ninjas.com/v1/quotes",
        headers: { "X-Api-Key": "bdH0ad6RQC1YLqvfnOyogQ==SsiqwgM4LOP2vD9S" },
      });
      setQuote(resp.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const changeColor = () => {
    setTimeout(() => {
      setColor(setHexColor());
    }, 1250);
  };

  const changeQuoteAndColor = () => {
    displayQuote();
    changeColor();
  };

  return (
    <>
      <main style={{ color: color }} className="quote-box">
        <div className="quote">
          <p className="text">&quot;{quote.quote}&quot;</p>
          <p className="author">– {quote.author}</p>
        </div>
        <div className="btn-share">
          <button
            type="button"
            onClick={changeQuoteAndColor}
            style={{ backgroundColor: color }}
            className="new-quote"
          >
            new quote
          </button>
          <a
            className="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${quote.quote}"%0D%0D${quote.author}&hashtags=quote,${quote.category}`}
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: color }}
          >
            <TweetIcon />
          </a>
        </div>
      </main>
      <footer>
        <p>
          <a
            href="https://github.com/nzubeifechukwu/quote-generator"
            target="_blank"
            rel="noreferrer"
          >
            &copy; Nzube Ifechukwu
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
