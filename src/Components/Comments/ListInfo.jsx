import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { useAuth } from "../../Contexts/AuthContextProvider";
import { notify } from "../Tostify/Toastify";
import { useParams } from "react-router-dom";
import { useComContext } from "../../Contexts/ComContextProvider";
import { Container } from "@mui/material";

const ListInfo = () => {
  const { comments, getCom, delCom } = useComContext();
  const { prodId } = useParams();
  const { currentUser } = useAuth();

  useEffect(() => {
    getCom(prodId);
  }, []);

  return (
    <Container maxWidth="xl">
      {comments && comments.length > 0 ? (
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 300 }}
            aria-label="simple table"
            className="list-page"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Дата</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Жалобы пациента
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  В течение какого времени считает себя больным?
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Факторы, способствовавшие началу заболевания.
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  С каких признаков началось заболевание?
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Первое обращение к врачу, результаты проводившихся
                  исследований.
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Предварительный диагноз и лечение
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comments.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.data}
                  </TableCell>
                  <TableCell align="left">{item.title}</TableCell>
                  <TableCell align="left">{item.title1}</TableCell>
                  <TableCell align="left">{item.title2}</TableCell>
                  <TableCell align="left">{item.title3}</TableCell>
                  <TableCell align="left">{item.title4}</TableCell>
                  <TableCell align="left">{item.title5}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        "Первичный осмотр отсутствует"
      )}
      <Container>
        {comments.map((e) => (
          <img width="60%" style={{ margin: "20px" }} src={e.img} alt="" />
        ))}
      </Container>
    </Container>
  );
};

export default ListInfo;
