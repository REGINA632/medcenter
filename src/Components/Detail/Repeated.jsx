import { Grid, Container } from "@mui/material";
import React from "react";
import AddRep from "../Comments/AddRep";
import ListRep from "../Comments/ListRep";

const Repeated = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid sx={{ display: "flex", textAlign: "start" }}>
          <Grid xs={12}>
            {/* <Typography variant="h5" align="center" m="20px 0">
        Осмотр кардиолога (первичный)
      </Typography> */}
            <AddRep />
            <ListRep />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Repeated;
