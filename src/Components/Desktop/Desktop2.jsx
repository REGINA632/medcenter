import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProdList from "../Movies/ProdList/ProdList";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import List2 from "../Admin/List/List2";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Desktop2() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Пациенты" {...a11yProps(0)} />
        <Tab label="Анкетные данные" {...a11yProps(1)} />
        <Tab label="Записи пациентов" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ProdList />
      </TabPanel>
      <TabPanel value={value} index={1}>
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
      <TabPanel value={value} index={2}>
        <List2 />
      </TabPanel>
    </Box>
  );
}
