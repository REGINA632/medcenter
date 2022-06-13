import { Container, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(number, name, time, price) {
  return { number, name, time, price };
}

const rows = [
  createData(
    1,
    "Стационарное лечение с пребыванием в палате «СТАНДАРТ» (включено: медикаменты по профилю, услуги мед. персонала)",
    "Сутки",
    2800
  ),
  createData(
    2,
    "Стационарное лечение с пребыванием в палате «КОМФОРТ » (включено: медикаменты по профилю, услуги мед. персонала)",
    "Сутки",
    3300
  ),
  createData(
    3,
    "Стационарное лечение с пребыванием в палате «ЛЮКС» (включено: медикаменты по профилю, услуги мед. персонала)",
    "Сутки",
    5500
  ),
  createData(
    4,
    "Пребывание в ПАЛАТЕ ИНТЕНСИВНОЙ ТЕРАПИИ (включено: медикаменты по профилю, услуги мед. персонала, санитарно-гигиенический уход)",
    "Сутки",
    4000
  ),
  createData(
    1,
    "Пребывание в РЕАНИМАЦИИ (включено: медикаменты по профилю, услуги мед. персонала, санитарно-гигиенический уход, подключение систем жизнеобеспечения и следящей аппаратуры)",
    "Сутки",
    5500
  ),
];

const Hospital = () => {
  return (
    <Container
      maxWidth="xl"
      style={{ textAlign: "center", marginBottom: "20px" }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>№</StyledTableCell>
              <StyledTableCell>Наименование</StyledTableCell>
              <StyledTableCell align="right">Ед.изм</StyledTableCell>
              <StyledTableCell align="right">Стоимость</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.number}
                </StyledTableCell>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.time}</StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Hospital;
