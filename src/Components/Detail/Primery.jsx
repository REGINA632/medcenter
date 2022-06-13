import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ListInfo from "../Comments/ListInfo";
import AddCom from "../Comments/AddCom";
import ListCom from "../Comments/ListCom";

const Primery = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Grid sx={{ display: "flex", textAlign: "start" }}>
          <Grid xs={12}>
            {/* <Typography variant="h5" align="center" m="20px 0">
              Осмотр кардиолога (первичный)
            </Typography> */}
            <AddCom />
            <ListCom />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Primery;
