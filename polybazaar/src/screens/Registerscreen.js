import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { registerUser } from "../actions/userAction";

import { useNavigate } from "react-router-dom";

const Carddiv = styled.div`
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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

const Registerscreen = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleclickLogin = () => {
    if (value) {
      let user = {
        value,
       };

      console.log(user);
      dispatch(registerUser(user));
      navigate("/login");
    } else {
      alert("Enter Required Fields");
    }
  };

  return (
    <Carddiv>
      <Card style={{ padding: "20px" }}>
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
              <p>To sign up, please enter your mobile number</p>
            </P>
          </Middlediv>
          <Input>
            <PhoneInput
              inputStyle={{ width: "90%", padding: "25px", fontSize: "25px" }}
              containerStyle={{ margin: " 30px" }}
              country={"in"}
              value={value}
              onChange={setValue}
            />
          </Input>
          <Buttongroup>
            <Button
              style={{
                width: "90%",
                marginLeft: "13px",
                backgroundColor: "#0065ff",
                fontWeight: "400",
                padding: "10px",
              }}
              variant="primary"
              size="lg"
              active
              onClick={handleclickLogin}
            >
              Proceed
            </Button>
          </Buttongroup>
          <Last>
            Already Signed up?{" "}
            <Card.Link
              style={{ textDecoration: "none", fontWeight: "bold" }}
              href="/login"
            >
              Sign In
            </Card.Link>{" "}
          </Last>
        </Card.Body>
      </Card>
    </Carddiv>
  );
};

export default Registerscreen;
