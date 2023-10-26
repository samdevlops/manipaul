import { Box, Container, Grid } from "@mui/material";
import { HeroImageGeneric } from "../components/hero-image/here-image-generic";
import CardComponent from "../components/cardComponent";
import hospitals from "../assets/data/hospitals";

export const HomePage = () => {
  return (
    <Box minHeight={"50vh"} justifyContent={"center"} width={"100%"}>
      <HeroImageGeneric />

      <Container sx={{ m: 4 }}>
        <Grid container spacing={3}>
          {hospitals.map((hospital) => {
            return <CardComponent name={hospital.name} description={hospital.description} image={hospital.imageUrl}/>;
          })}
        </Grid>
      </Container>
    </Box>
  );
};
