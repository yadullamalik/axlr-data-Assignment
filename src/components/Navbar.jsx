import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material";

const NavbarDiv = styled(AppBar)`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 600;
`;
const Heading = styled("h2")`
  color: #505565;
  font-size: 20px;
  line-height: 24px;
  margin-left: 8.54%;
`;
const Tab1 = styled(Link)`
  font-size: 14px;
  line-height: 14px;
  color: #059588;
  text-decoration: none;
  margin-left: 18%;
  margin-top: 2%;
`;
const Tab2 = styled(Link)`
  font-size: 14px;
  line-height: 14px;
  color: #059588;
  text-decoration: none;
  margin-left: 5%;
  margin-top: 2%;
`;
const Btn = styled(Button)`
  font-size: 14px;
  line-height: 17px;
  color: #3f4753;
  margin-left: 35%;
`;

export const Navbar = () => {
  return (
    <NavbarDiv>
      <Heading>Company Name</Heading>
      <Tab1 to={"/"}>Categories</Tab1>
      <Tab2 to={"/location"}>Location</Tab2>
      <Btn>Logout</Btn>
    </NavbarDiv>
  );
};
