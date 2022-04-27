import {
  Button,
  Container,
  Link,
  InputLabel,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { notify } from "../Components/Tostify/Toastify";
import { useAuth } from "../Contexts/AuthContextProvider";
import LockResetIcon from "@mui/icons-material/LockReset";
import { useNavigate } from "react-router-dom";

const ResetPass = () => {
  const navigate = useNavigate();
  const { resetPass } = useAuth();
  const [inpVal, setInpVal] = useState("");

  const handleSend = () => {
    if (!inpVal) {
      notify("error", "Fill the field");
    } else {
      resetPass(inpVal);
      notify("success", "Sent to your email.");
      setInpVal("");
      navigate("/");
    }
  };
  return (
    <div style={{ margin: "auto" }}>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "400px",
            padding: "10px",
          }}
        >
          <h3 style={{ color: "black" }}>Forgot your password?</h3>
          <h4 style={{ textAlign: "center" }}>
            Enter your email address email to reset your password.
          </h4>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            value={inpVal}
            onChange={(e) => setInpVal(e.target.value)}
          />
          <Button
            onClick={handleSend}
            variant="contained"
            style={{
              height: "30px",
              maxWidth: "300px",
              marginTop: "10px",
            }}
          >
            Reset
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ResetPass;
