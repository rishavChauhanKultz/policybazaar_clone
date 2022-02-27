import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

import TextField from '@mui/material/TextField';

import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const Carddiv = styled.div`
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
  box-sizing: border-box;
`;

const Middlediv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;
const Image = styled.div`
  width: 30%;
  /* border: 1px solid red; */
  display: flex;
  margin-left: 20px;

  & img {
    width: 100%;
  }
`;
const P = styled.div`
  /* border: 1px solid green; */
  text-align: center;
  display: flex;
  align-items: center;


  & p {
    font-size: 20px;
    margin-left: 30px;
    font-weight: bold;
  }
`;
const Input = styled.div`
  margin-top: 30px;
  /* border: 1px solid red; */
`;
const Buttongroup = styled.div`
  margin-top: 30px;
  /* border: 1px solid red; */
`;

const Loginscreen_password = () => {
  const [number, setNumber] = useState(8555923032);

  const navigate = useNavigate();

  const handleclickSignin= () => {
      navigate("/")
  };
  const handleclickOtp= () => {
    navigate("/login_otp")
};

  return (
    <Carddiv>
      <Card style={{padding:"20px"}}>
        <Card.Body>
          <img
            src="https://static.pbcdn.in/myaccount-cdn/images/login-logo.svg"
            alt="policy-bazaar"
          />
          <Middlediv>
            <Image>
              {" "}
              <img src="https://static.pbcdn.in/myaccount-cdn/images/login-illusion.png" />{" "}
            </Image>
            <P>
              <p>Please enter your password for {number}</p>
            </P>
          </Middlediv>
          <Input>
            <TextField
              style={{ width: "90%", marginLeft: "13px" }}
              required
              id="outlined-required"
              label="Enter Password"
            />
          </Input>
          <p
            style={{
              display: "flex",
              marginLeft: "30px",
              marginTop: "10px",
              cursor: "pointer",
              color: "#0065ff",
              fontWeight:"bold"
            }}
          >
           
           
              Forget Password?
           
          </p>
          <Buttongroup>
            <Button
              style={{
                width: "90%",
                marginLeft: "13px",
                backgroundColor: "#0065ff",
                fontWeight: "400",
                padding: "10px",
                fontSize: "20px",
              }}
              variant="primary"
              size="lg"
              active
              onClick={handleclickSignin}
            >
              Sign In
            </Button>
            <Button
              style={{
                width: "90%",
                marginLeft: "13px",
                marginTop: "15px",
                backgroundColor: "white",
                color: "black",
                fontWeight: "400",
                padding: "10px",
                fontSize: "20px",
                marginBottom:"40px"
              }}
              variant="primary"
              size="lg"
              active onClick={handleclickOtp}
            >
              Sign in with OTP
            </Button>
          </Buttongroup>
          
        </Card.Body>
      </Card>
    </Carddiv>
  );
};

export default Loginscreen_password;
