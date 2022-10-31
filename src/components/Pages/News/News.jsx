import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import NewsCard from "../../NewsCard/NewsCard.jsx";
import GridLayout from "../../Layout/GridLayout.jsx";
import useStyles from "./styles.js";

const News = ({ articles, activeArticle }) => {
  const classes = useStyles();

  return (
    <div className={classes.news}>
      <div className={classes.newsContainer}>
        <div>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            className={classes.newsHeader}
          >
            Ask Alan what you want
          </Typography>
        </div>
        <div className={classes.newscard}>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h5"
                align="center"
                className={classes.cardTypo}
              >
                Try to say
              </Typography>
              <Typography variant="body2" className={classes.cardTypo}>
                "open the article number 4" or "open article number 4" or "open
                number 4" : to open article
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h5"
                align="center"
                className={classes.cardTypo}
              >
                Try to say
              </Typography>
              <Typography variant="body2" className={classes.cardTypo}>
                "Go back" : to go back to the previous page
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className={classes.newsSVG}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f0f7ff"
            fill-opacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,229.3C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className={classes.newsContent}>
        <GridLayout container={classes.container}>
          {articles.map((article, i) => (
            <Grid
              item
              key={i}
              xs={12}
              sm={6}
              lg={3}
              style={{ display: "flex" }}
            >
              <NewsCard article={article} i={i} activeArticle={activeArticle} />
            </Grid>
          ))}
        </GridLayout>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f0f7ff"
          fill-opacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,229.3C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default News;
