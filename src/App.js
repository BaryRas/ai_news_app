import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
// import "./App.css";
import NewsCards from "./components/NewsCards/NewsCards";
import wordsToNumbers from "words-to-numbers";
function App() {
  const [newsState, setNewsState] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_API_KEY,
      onCommand: ({ command, data, number }) => {
        if (command === "newHeadlines") {
          setNewsState(data);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = data[parsedNumber - 1];

          if (parsedNumber > data.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, [newsState]);

  return (
    <div className="App">
      <h1>AI NEWS APP</h1>
      <NewsCards articles={newsState} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
