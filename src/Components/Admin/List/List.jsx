import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

import "./List.css";
import { useProductContext } from "../../../Contexts/MoviesContextProvider";
import MySkeleton from "../../Skeleton/MySkeleton";

const List = () => {
  const { products, getProducts, deleteProduct } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = (prod) => {
    deleteProduct(prod);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>List of Products</h2>
      {products && products.length > 0 ? (
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            className="list-page"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Type
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Image
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Price
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Data
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Produced
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Cast
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  img2
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Trailer
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Film
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Delete/Edit
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="left">{item.type}</TableCell>
                  <TableCell align="left">
                    <img width="40px" src={item.img} alt={item.title} />
                  </TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.data}</TableCell>
                  <TableCell align="left">{item.produced}</TableCell>
                  <TableCell align="left">{item.cast}</TableCell>
                  <TableCell align="left">{item.img2}</TableCell>
                  <TableCell align="left">{item.trailer}</TableCell>
                  <TableCell align="left">{item.film}</TableCell>
                  <TableCell align="left">
                    <IconButton
                      onClick={() => handleDelete(item)}
                      sx={{ bgcolor: "warning.main" }}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                    <Link to={`edit/${item.id}`}>
                      <IconButton sx={{ bgcolor: "warning.main" }}>
                        <EditIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <MySkeleton />
      )}
    </div>
  );
};

export default List;
