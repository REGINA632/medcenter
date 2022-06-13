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
  createData(
    1,
    "Консультация сердечно-сосудистого хирурга, профессора, заслуженного врача КР",
    1000
  ),
  createData(
    2,
    "Консультация Главного врача, Кардиолога высшей категории, Кандидата медицинских наук",
    800
  ),
  createData(
    3,
    "Консультация заведующего отделением реанимации, Кардиолога высшей категории ",
    800
  ),
  createData(
    4,
    "Консультация заведующего отделением кардиологии, Кардиолога высшей категории",
    800
  ),
  createData(
    5,
    "Консультация заведующего отделением кардиохирургии, Врача высшей категории, Кандидата медицинских наук",
    800
  ),
  createData(
    6,
    "Консультация инвазивного хирург-аритмолога, Кандидата медицинских наук",
    800
  ),
  createData(7, "Консультация кардиохирурга", 600),
  createData(8, "Консультация кардиолога", 600),
  createData(9, "Консультация невролога", 700),
  createData(10, "Консультация эндокринолога", 700),
  createData(11, "Электрокардиограмма", 300),
  createData(12, "Эхокардиографическое исследование (детей и взрослых)", 1000),
  createData(
    13,
    "Внутриутробное Эхокардиографическое исследование (сердце плода)",
    1000
  ),
  createData(14, "Суточное АД - мониторирование", 100),
  createData(15, "Суточное ЭКГ- мониторирование", 1100),
  createData(16, "Велоэргометрия (ВЭМ)", 1500),
  createData("УЗИ органов"),
  createData(
    1,
    "Комплексное обследование внутренних органов (печень, желчный пузырь, поджелудочная железа, селезёнка, почки)",
    1500
  ),
  createData(2, "Плевральные синусы", 300),
  createData(3, "Щитовидная железа", 550),
  createData(4, "	Печень", 300),
  createData(5, "Желчный пузырь", 300),
  createData(6, "Поджелудочная железа", 300),
  createData(7, "Селезёнка", 300),
  createData(8, "Надпочечники", 300),
  createData(9, "Почки", 300),
  createData(10, "Мочевой пузырь", 300),
  createData(11, "Предстательная железа", 300),
  createData(12, "Матка с придатками", 300),
  createData(13, "Беременность 1-й триместр", 350),
  createData(14, "Беременность 2-3-й триместр", 400),
  createData(15, "Мошонка", 400),
];

const DiagnosCenter = () => {
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

export default DiagnosCenter;
