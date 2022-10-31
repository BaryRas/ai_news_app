import { AppBar, Toolbar, Box, Button } from "@material-ui/core";
import axios from "axios";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

function Navbar({ setNewsState }) {
  const NEWS_API_URL =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=778dee95e8734ef0a018d38783f9c51c&category=";

  const getNews = (cat) => {
    axios.get(`${NEWS_API_URL}${cat}`).then((response) => {
      console.log("you did it", response.data.articles);
      setNewsState(response.data.articles);
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="inherit">
        <Toolbar style={{ margin: "0 auto" }}>
          {categories.map((category) => (
            <Button
              color="inherit"
              onClick={() => getNews(category)}
              key={category}
            >
              {category}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
