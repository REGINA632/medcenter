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

function createData(number, name, price) {
  return { number, name, price };
}

const rows = [
  createData(1, "Общий развернутый анализ крови с тромбоцитами", 330),
  createData(2, "Общий развернутый анализ крови (дети до 5 лет)", 210),
  createData(3, "Подсчет количества ретикулоцитов", 270),
  createData(4, "LE - клетки (клетки красной волчанки)", 490),
  createData(5, "Обнаружение плазмодия малярии", 330),
  createData(6, "Определение группы крови и Rh-фактора", 360),
  createData(7, "Общий анализ мочи", 300),
  createData(8, "Определение желчных пигментов (билирубина) в моче", 220),
  createData(9, "Определение кетоновых тел (ацентона) в моче", 220),
  createData(10, "Количественные исследования мочи (по Нечипоренко)", 220),
  createData(11, "Суточная протеинурия", 220),
  createData(12, "Исследования кала на простейшие, в т.ч.лямблии", 270),
  createData(13, "Анализ кала на скрытую кровь", 310),
  createData(14, "Анализ на мокроту", 450),
  createData(15, "	Мокрота АК БК", 450),
  createData("Печеночные тесты"),
  createData(1, "Трансаминаза - АЛТ", 280),
  createData(2, "Трансаминаза - АСТ", 280),
  createData(3, "Билирубин общий", 280),
  createData(4, "Билирубин прямой", 300),
  createData(5, "Тимол. проба", 300),
  createData("Почечные тесты"),
  createData(1, "Общий белок сыворотки крови", 280),
  createData(2, "Альбумин в сыворотке крови", 280),
  createData(3, "Креатинин", 280),
  createData(4, "	Мочевина", 300),
  createData(5, "Остаточный азот", 300),
];

const LabCenter = () => {
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
                <StyledTableCell align="right">{row.price}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default LabCenter;
