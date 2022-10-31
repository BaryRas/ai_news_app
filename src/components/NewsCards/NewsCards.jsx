import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles.js";
import GridLayout from "../Layout/GridLayout";

const infoCards = [
  { color: "#ffffff", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#ffffff",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#ffffff",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#ffffff",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

const NewsCards = () => {
  const classes = useStyles();

  return (
    <GridLayout>
      {infoCards.map((infoCard, i) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className={classes.infoCard}
          key={i}
        >
          <div
            className={classes.card}
            style={{ backgroundColor: infoCard.color }}
          >
            <Typography variant="h5" component="h5">
              {infoCard.title}
            </Typography>
            {infoCard.info ? (
              <Typography variant="h6" component="h6">
                <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                {infoCard.info}
              </Typography>
            ) : null}
            <Typography variant="h6" component="h6">
              Try saying: <br />{" "}
              <i className={classes.typography}>{infoCard.text}</i>
            </Typography>
          </div>
        </Grid>
      ))}
    </GridLayout>
  );
};

export default NewsCards;
