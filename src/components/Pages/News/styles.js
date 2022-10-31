import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    maxWidth: 350,
    margin: "0 20px",
    backgroundColor: "#009dff",
  },
  cardTypo: {
    color: "whitesmoke",
  },
  newsContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
  newsHeader: {
    padding: 50,
    color: "#07285d",
    fontWeight: 700,
  },
  newscard: {
    display: "flex",
    justifyContent: "center",
  },
  newsSVG: {
    marginBottom: "-2%",
  },

  newsContent: {
    backgroundColor: "#f0f7ff",
    padding: "50px 0",
  },
});
