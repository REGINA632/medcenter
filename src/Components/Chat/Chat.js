import { useAuth } from "../../Contexts/AuthContextProvider";
import React, { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import { database, firestore } from "../../firebase";
import { collection, doc, Firestore, setDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Chat = () => {
  const { currentUser } = useAuth();

  const [value, setValue] = useState("");
  // const [messages, loading] = useCollectionData(
  //   firestore.collection("messages").orderBy("createdAt")
  // );

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: currentUser.uid,
      displayName: currentUser.displayName,
      text: value,
    });
    setValue("");
  };

  return (
    <Container>
      <Grid
        container
        justify={"center"}
        style={{ height: window.innerHeight - 50, marginTop: 20 }}
      >
        <div
          style={{
            width: "80%",
            height: "60vh",
            border: "1px solid gray",
            overflowY: "auto",
          }}
        >
          {/* {messages.map((message) => (
            <div
              style={{
                margin: 10,
                border:
                  currentUser.uid === message.uid
                    ? "2px solid green"
                    : "2px dashed red",
                marginLeft: currentUser.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
                padding: 5,
              }}
            >
              <Grid container>
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))} */}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "80%" }}
        >
          <TextField
            fullWidth
            rowsMax={2}
            variant={"outlined"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={sendMessage} variant={"outlined"}>
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
