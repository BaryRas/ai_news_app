import { Grid, Typography } from "@material-ui/core";
import NewsCards from "../../NewsCards/NewsCards";

const Home = ({ newsState, activeArticle }) => {
  return (
    <>
      <div className="hero">
        <Grid container spacing={2} className="hero-description">
          <Grid item xs={12} sm={8}>
            <Typography variant="h5" component="h5">
              ABOUT
            </Typography>
            <Typography variant="h1" component="h1">
              AI NEWS APP
            </Typography>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              doloribus nostrum, ullam asperiores eveniet facilis, incidunt
              labore eaque officia culpa beatae vel dolor doloremque harum.
            </p>
          </Grid>
          <Grid item sm={4}></Grid>
        </Grid>
      </div>
      <div className="news">
        <div className="news-svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f7f7f7"
              fill-opacity="1"
              d="M0,64L60,80C120,96,240,128,360,117.3C480,107,600,53,720,53.3C840,53,960,107,1080,106.7C1200,107,1320,53,1380,26.7L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
        <NewsCards articles={newsState} activeArticle={activeArticle} />
        <div className="news-svg" style={{ marginBottom: "-2%" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f7f7f7"
              fill-opacity="1"
              d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,192C672,224,768,256,864,272C960,288,1056,288,1152,266.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Home;
