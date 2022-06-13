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

const ListCom = () => {
  const { comments, getCom, delCom } = useComContext();
  const { prodId } = useParams();
  const { currentUser } = useAuth();

  useEffect(() => {
    getCom(prodId);
  }, []);

  const del = (item) => {
    if (
      currentUser.user === item.author ||
      currentUser.user === "admin@gmail.com"
    ) {
      delCom(item.id, prodId);
      notify("warning", "Comment deleted,successfully!");
    } else {
      notify("error", "Only admin and the author can delete comments!");
    }
  };

  return (
    <Container sx={{ mt: "20px" }}>
      {comments.length > 0
        ? comments.map((item) => (
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
                  <h3>Осмотр кардиолога (первичный)</h3>
                  <Grid
                    container
                    spacing={3}
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
                    <Grid item xs={12} md={1}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Жалобы
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={11}>
                      <Typography variant="subtitle1">{item.title}</Typography>
                    </Grid>
                    <Grid item xs={12} md={3.4}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Наследственность (не) отягощена,
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={8.6}>
                      <Typography variant="subtitle1">{item.title1}</Typography>
                    </Grid>
                    <Grid item xs={12} md={3.5}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Аллергоанамнез: спокоен,отягощен
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={8.5}>
                      <Typography variant="subtitle1">{item.title2}</Typography>
                    </Grid>
                    <Grid item xs={12} md={2.8}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Перенесенные заболевания
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={9.2}>
                      <Typography variant="subtitle1">{item.title3}</Typography>
                    </Grid>
                    <Grid item xs={12} md={2.1}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Вредные привычки:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={9.9}>
                      <Typography variant="subtitle1">{item.title4}</Typography>
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
                      <Typography variant="subtitle1">{item.title5}</Typography>
                    </Grid>
                    <Grid item xs={12} md={1.3}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Особенности:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={10.7}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        {item.title6}
                      </Typography>
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
                      <Typography variant="subtitle1">{item.title7}</Typography>
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Легкие:
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
                        Хрипы:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={11}>
                      <Typography variant="subtitle1">{item.title9}</Typography>
                    </Grid>
                    <Grid item xs={12} md={3.3}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Пульс наполнение и напряжение:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={8.7}>
                      <Typography variant="subtitle1">
                        {item.title10}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Сердечные шумы-функциональные,органические.Особенности:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle1">
                        {item.title11}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3.2}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        ПРЕДВАРИТЕЛЬНЫЙ ДИАГНОЗ:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={8.8}>
                      <Typography variant="subtitle1">
                        {item.title12}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={2.5}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        ПЛАН ОБСЛЕДОВАНИЯ:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={9.5}>
                      <Typography variant="subtitle1">
                        {item.title13}
                      </Typography>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Container>
          ))
        : "Первичный осмотр отсутсвует"}{" "}
    </Container>
  );
};

export default ListCom;
