import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
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
const Last = styled.p`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 500;
`;


const Loginscreen_otp = () => {

  const [number, setNumber] = useState(8555923032);

  const navigate = useNavigate();

  const handleclickOtp = () => {
    navigate("/")
  };
  const handleclickPassword = () => {
    navigate("/login_password")
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
              <p>Please enter 4 digit OTP sent on {number}</p>
            </P>
          </Middlediv>
          <Input>
            <TextField
              style={{ width: "90%", marginLeft: "13px" }}
              required
              id="outlined-required"
              label="Enter OTP"
            />
          </Input>
          <p
            style={{
              display: "flex",
              marginLeft: "30px",
              marginTop: "15px",
              cursor: "pointer",
            }}
          >
            Didn't receive the OTP yet?{" "}
            <span style={{ color: "#0065ff", fontWeight: "bold" }}>
              Resend OTP
            </span>
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
              onClick={handleclickOtp}
            >
              Confirm OTP
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
              }}
              variant="primary"
              size="lg"
              active onClick={handleclickPassword}
            >
              Sign in with Password
            </Button>
          </Buttongroup>
          <Last>
            First time user?{" "}
            <Card.Link
              style={{ textDecoration: "none", fontWeight: "bold" }}
              href="/register"
            >
              Sign Up
            </Card.Link>{" "}
          </Last>
          <Alert variant="filled" severity="success" style={{width:"90%",marginLeft:"30px",background:"none",color:"green"}}>
          OTP has been sent on your entered mobile no.
         </Alert>
        </Card.Body>
      </Card>
    </Carddiv>
  );
};

export default Loginscreen_otp;
