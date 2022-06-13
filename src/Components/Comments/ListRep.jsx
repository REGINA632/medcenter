import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useComContext } from "../../Contexts/ComContextProvider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Container, Grid, IconButton } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAuth } from "../../Contexts/AuthContextProvider";
import { notify } from "../Tostify/Toastify";
import { useRepContext } from "../../Contexts/RepContextProvider";

const ListRep = () => {
  const { repeated, getRep } = useRepContext();
  const { prodId } = useParams();
  const { currentUser } = useAuth();

  useEffect(() => {
    getRep(prodId);
  }, []);

  return (
    <Container sx={{ mt: "20px" }}>
      {repeated.length > 0
        ? repeated.map((item) => (
            <Container key={item.id}>
              <Accordion sx={{ mt: "10px" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="subtitle1">{item.data}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h3>Врач-кардиолог. Повторный осмотр</h3>
                  <Grid
                    container
                    spacing={1}
                    sx={{ display: "flex", padding: "0" }}
                  >
                    <Grid item xs={12} md={1}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Дата
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={11}>
                      <Typography variant="subtitle1">{item.data}</Typography>
                    </Grid>
                    <Grid item xs={12} md={2.8}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Жалобы: На момент осмотра{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={9.2}>
                      <Typography variant="subtitle1">{item.title}</Typography>
                    </Grid>
                    <Grid item xs={12} md={1.9}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Общее состояние:{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={10.1}>
                      <Typography variant="subtitle1">{item.title1}</Typography>
                    </Grid>
                    <Grid item xs={12} md={1.9}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Кожные покровы:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={10.1}>
                      <Typography variant="subtitle1">{item.title2}</Typography>
                    </Grid>
                    <Grid item xs={12} md={2.1}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Видимые слизистые:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={9.9}>
                      <Typography variant="subtitle1">{item.title3}</Typography>
                    </Grid>
                    <Grid item xs={12} md={1.7}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Аускультативно:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={10.3}>
                      <Typography variant="subtitle1">{item.title4}</Typography>
                    </Grid>
                    <Grid item xs={12} md={3.7}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Периферические лимфатические узлы:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={8.3}>
                      <Typography variant="subtitle1">{item.title5}</Typography>
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Отеки:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={11}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        {item.title6}
                      </Typography>
                    </Grid>
                  </Grid>
                  <h3>Сердечно-сосудистая система</h3>
                  <Grid
                    container
                    spacing={1}
                    sx={{ display: "flex", padding: "0" }}
                  >
                    <Grid item xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Аускультация: Тоны сердца{" "}
                        <span style={{ fontWeight: "100" }}>
                          {item.title7},
                        </span>{" "}
                        ритм{" "}
                        <span style={{ fontWeight: "100" }}>
                          {item.title8},
                        </span>{" "}
                        ЧСС{" "}
                        <span style={{ fontWeight: "100" }}>{item.title9}</span>{" "}
                        в минуту.
                      </Typography>
                    </Grid>
                    {/* <Grid item xs={12} md={9.2}>
                      <Typography variant="subtitle1">{item.title7}</Typography>
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        ритм
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={11}>
                      <Typography variant="subtitle1">{item.title8}</Typography>
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        ЧСС
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={11}>
                      <Typography variant="subtitle1">{item.title9}</Typography>
                    </Grid> */}
                    <Grid item xs={12} md={2.2}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Патологические шумы:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={9.8}>
                      <Typography variant="subtitle1">
                        {item.title10}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={2.4}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Артериальное давление:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={9.6}>
                      <Typography variant="subtitle1">
                        {item.title11}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={1.1}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        ДИАГНОЗ:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={10.9}>
                      <Typography variant="subtitle1">
                        {item.title13}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={1.7}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        ПЛАН ЛЕЧЕНИЯ:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={10.3}>
                      <Typography variant="subtitle1">
                        {item.title14}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={1.7}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Врач:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={10.3}>
                      <Typography variant="subtitle1">
                        {item.currentUser}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4.5}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Лабораторно-инструментальные обследования:
                      </Typography>
                      <img src={item.title12} alt="" />
                    </Grid>
                    {/* <Grid item xs={12} md={7.5}>
                      <Typography variant="subtitle1">
                        {item.title12}
                      </Typography>
                    </Grid> */}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Container>
          ))
        : "Повторный осмотр отсутсвует"}{" "}
    </Container>
  );
};

export default ListRep;
