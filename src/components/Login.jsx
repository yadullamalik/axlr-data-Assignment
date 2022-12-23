import React from "react";
import Box from "@mui/material/Box";
import "./Login.css";
import {
  InputLabel,
  TextField,
  Button,
  FormHelperText,
  styled,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../Redux/action";
import img1 from "../assets/Ellipse1550.png";
import img2 from "../assets/Ellipse1551.png";
import img3 from "../assets/Ellipse1552.png";
import img4 from "../assets/Ellipse1553.png";

const LoginBtn = styled(Button)`
  background-color: #1bc1eb;
  color: #ffffff;
  margin-left: 200px;
`;

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.isAuth);
  const handleClick = () => {
    // if (email == "test@test.com" && pass == "Test@123") {
    // }
    const payload = {
      user_email: "test@test.com",
      user_password: "Test@123",
    };
    dispatch(getLogin(payload));
  };
  console.log("isAuth:", isAuth);
  return (
    <div className="main">
      <Box className="login">
        <h2 className="heading_login">Login</h2>
        <InputLabel className="label">E-MAIL ID</InputLabel>
        <TextField
          id="standard-basic"
          label=""
          variant="standard"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputLabel className="label">PASSWORD</InputLabel>
        <TextField
          id="standard-basic"
          label=""
          variant="standard"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <FormHelperText style={{ color: "#2196f3", marginTop: "15px" }}>
          Forget your password?
        </FormHelperText>
        <LoginBtn onClick={handleClick}>Login</LoginBtn>
      </Box>
      <div>
        <img className="img2" src={img2} alt="" />
        <img src={img1} className="img1" alt="" />
        <img src={img3} className="img3" alt="" />
        <img src={img4} alt="" className="img4" />
      </div>
    </div>
  );
};
