import React from "react";

import { Box, Container } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";

// import { Link, Outlet, useLocation } from "react-router-dom";
import Desktop from "../Components/Desktop/Desktop";
import LiveSearch from "../Components/LiveSearch/LiveSearch";
import Desktop2 from "../Components/Desktop/Desktop2";

const Admin = () => {
  // const { pathname } = useLocation();
  return (
    <div>
      <Box>
        {/* <Desktop2 /> */}
        <Desktop />
      </Box>
      {/* <Container maxWidth="xl"> */}
      {/* <LiveSearch /> */}
      {/* {pathname !== "/admin/add" ? (
          <Link to="add">
            <IconButton>
              <AddIcon />
              <Typography variant="h5">Add new product</Typography>
            </IconButton>
          </Link>
        ) : null} */}
      {/* <Outlet /> */}
      {/* </Container> */}
    </div>
  );
};

export default Admin;
