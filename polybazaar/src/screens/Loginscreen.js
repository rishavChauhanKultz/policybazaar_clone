import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import {useDispatch,useSelector} from "react-redux"
import { loginUser } from "../actions/userAction";

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

const Loginscreen = () => {
  const [value, setValue] = useState("");

  const navigate=useNavigate()
  const dispatch=useDispatch();
 
    console.log(value)
const handleclickOtp=()=>{

  const user={
    value
  }

  console.log(user)
  dispatch(loginUser(user))
//   if(value){
//       console.log(value)
//     navigate("/login_otp")

//   } else{
// alert("Enter Required Fields");
// // navigate("/login")
//   }

}

const handleclickPassword=()=>{
    if(value){
        console.log(value)
        // dispatch(loginUser(user))
      navigate("/login_password")
  
    } else{
  alert("Enter Required Fields");
  // navigate("/login")
    }
  
  }


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
              <p>To sign in, please enter your mobile number</p>
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
              active onClick={handleclickOtp}
            >
              Sign in with OTP
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
        </Card.Body>
      </Card>
    </Carddiv>
  );
};

export default Loginscreen;
