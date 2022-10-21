import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";
import NewsCards from "./components/NewsCards/NewsCards";

function App() {
  const [newsState, setNewsState] = useState([]);
  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_API_KEY,
      onCommand: ({ command, data }) => {
        if (command === "newHeadlines") {
          setNewsState(data);
          console.log(newsState, "app");
        }
      },
    });
  }, [newsState]);

  return (
    <div className="App">
      <h1>AI NEWS APP</h1>
      <NewsCards articles={newsState} />
    </div>
  );
}

export default App;
