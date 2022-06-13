import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Link, Outlet, useLocation } from "react-router-dom";
import ProdList from "../Movies/ProdList/ProdList";
import List2 from "../Admin/List/List2";
import { Button } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Desktop() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // todo Добавить пациента
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="basic tabs example"
        >
          <Tab label="Анкетные данные пациентов" {...a11yProps(0)} />
          <Tab label="Записи на прием" {...a11yProps(1)} />
          <Tab label="Общие сведения о пациентах" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {pathname !== "/admin/add" ? (
          <Button
            component={Link}
            to="add"
            variant="outlined"
            style={{ textDecoration: "none" }}
          >
            Добавить нового пациента
          </Button>
        ) : //   <Link to="add">
        //     <IconButton>
        //       <AddIcon />
        //       <Typography variant="h5">Добавить нового пациента</Typography>
        //     </IconButton>
        //  </Link>
        null}
        <Outlet />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <List2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProdList />
      </TabPanel>
      {/* {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              value === index ? transitionDuration.exit : 0
            }ms`,
          }}
          unmountOnExit
        >
          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))} */}
    </Box>
  );
}
