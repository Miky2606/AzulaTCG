import type { NextPage } from "next";
import { Box, Grid, Paper, styled } from "@mui/material";
import {
  cardsYGO,
  CardsYGO,
  ListYGOInterface,
} from "../functionsFrontEnd/consts";
import { CardsView } from "../components/cards_view";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",

        width: "70vw",
        padding: "10px",
        justifyContent: "center",
      }}
    >
      <Grid container justifyContent="flex-start" direction="row" spacing={2}>
        {cardsYGO.map((e) => {
          return <ListYGO {...e} />;
        })}
      </Grid>
    </Box>
  );
};

const ListYGO = (card: CardsYGO): JSX.Element => {
  return (
    <Grid item key={card.name} xs={12} sm={6} md={6} lg={4}>
      <CardsView {...card} />
    </Grid>
  );
};

export default Home;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(6),

  textAlign: "center",
  color: theme.palette.text.secondary,
}));
