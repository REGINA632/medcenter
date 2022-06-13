import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { green } from "@mui/material/colors";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import DiagnosCenter from "../Components/Price/DiagnosCenter";
import LabCenter from "../Components/Price/LabCenter";
import Hospital from "../Components/Price/Hospital";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function Price() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Container
      maxWidth="xl"
      style={{ textAlign: "center", marginBottom: "20px" }}
    >
      <Typography variant="h4" m="20px 0">
        ПРЕЙСКУРАНТ ЦЕН
      </Typography>

      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "background.paper",
          position: "relative",
          marginTop: "20px",
        }}
      >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab label="Услуги диагностических центров" {...a11yProps(0)} />
            <Tab label="Лабораторные исследования" {...a11yProps(1)} />
            <Tab label="Услуги стационара" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <DiagnosCenter />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <LabCenter />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Hospital />
          </TabPanel>
        </SwipeableViews>
      </Container>
    </Container>
  );
}
