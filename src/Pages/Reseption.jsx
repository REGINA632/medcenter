import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Add from "../Components/Admin/Add/Add";

const Reseption = () => {
  const [register, setRegister] = useState(false);

  const btnRegister = () => {
    if (register) {
      setRegister(false);
    } else {
      setRegister(true);
    }
  };

  function createData(name, mon, wens, th, thday, fr) {
    return { name, mon, wens, th, thday, fr };
  }

  const rows = [
    createData(
      "Намозов Улугбек Тагойбекович",
      "9:00-13:00",
      "9:00-13:00",
      "9:00-13:00",
      "9:00-13:00",
      "9:00-13:00"
    ),
    createData(
      "Магоматова Лариса Руслановна",
      "9:00-13:00",
      "9:00-13:00",
      "9:00-13:00",
      "9:00-13:00",
      "9:00-13:00"
    ),
    createData(
      "Ряскин Владимир Иванович",
      "9:00-13:00",
      "9:00-13:00",
      "9:00-13:00",
      "9:00-13:00",
      "9:00-13:00"
    ),
    createData(
      " Жаринова Мария Владимировна",
      "9:00-13:00",
      "9:00-13:00",
      "9:00-13:00",
      "9:00-13:00",
      "9:00-13:00"
    ),
    createData(
      "Маленков Дмитрий Андреевич",
      "9:00-13:00",
      "9:00-13:00",
      "9:00-13:00",
      "9:00-13:00",
      "9:00-13:00"
    ),
  ];

  return (
    <div>
      <Container>
        <Button onClick={btnRegister}>
          <h2 style={{ color: "black" }}>Записаться на прием</h2>
        </Button>
      </Container>
      <Container
        sx={{
          marginTop: "20px",
          backgroundColor: "white",
          paddingTop: "20px",
          display: register ? "block" : "none",
        }}
      >
        <Add />
      </Container>
      <Container sx={{ display: register ? "none" : "block" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ФИО</TableCell>
                <TableCell align="right">Понедельник</TableCell>
                <TableCell align="right">Вторник</TableCell>
                <TableCell align="right">Среда</TableCell>
                <TableCell align="right">Четверг</TableCell>
                <TableCell align="right">Пятница</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.mon}</TableCell>
                  <TableCell align="right">{row.wens}</TableCell>
                  <TableCell align="right">{row.th}</TableCell>
                  <TableCell align="right">{row.thday}</TableCell>
                  <TableCell align="right">{row.fr}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default Reseption;
