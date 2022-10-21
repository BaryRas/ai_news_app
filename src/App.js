import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";
import NewsCards from "./components/NewsCards/NewsCards";

function App() {
  const [newsState, setNewsState] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_API_KEY,
      onCommand: ({ command, data }) => {
        if (command === "newHeadlines") {
          setNewsState(data);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
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
