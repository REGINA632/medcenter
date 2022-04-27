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
import { Container, IconButton } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
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
    <Container>
      {comments.length > 0 ? (
        comments.map((item) => (
          <Container key={item.id}>
            <List sx={{ width: "100%", maxWidth: 360 }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <FaceIcon sx={{ width: "40px", height: "40px" }} />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <span
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.author}
                      </span>{" "}
                      <br />
                      <span>{item.title}</span>
                    </React.Fragment>
                  }
                />
                <IconButton onClick={() => del(item)}>
                  <DeleteOutlineIcon />
                </IconButton>
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </Container>
        ))
      ) : (
        <h2>There is no comments, yet.</h2>
      )}{" "}
    </Container>
  );
};

export default ListCom;
