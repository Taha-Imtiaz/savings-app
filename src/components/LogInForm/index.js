import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../Input";
import * as S from "./styles";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const LogInForm = () => {
  const history = useHistory();
 

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  let handleChange = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  let validate = () => {
    if (!values.email || !values.password) {
      return false;
    }
    return true;
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = values;
    if (validate()) {
      console.log(email, password);
      axios
        .post('/login', {
          ...values,
        })
        .then((res) => {
          if (res.data.status === 200) {
            localStorage.setItem('saving-token', res.data.token)
            history.push("/profile")
          }
          // toast(res.data.message);
          // setShouldSubmit(true);
        }).catch((e) => {
        });
    } else {
      toast("Please fill the valid values.");
    }
  };
  return (
    <S.AuthFormContainer>
      {/* <ToastContainer /> */}
      <form onSubmit={handleSubmit}>
        <S.AuthFormArea>
          <S.LoginHeader>
            <Heading fontSize = {22} fontWeight = "bold" color = "#0a1f44" >Login</Heading>
          </S.LoginHeader>

          <S.LoginFormFields>
            <S.EmailField>
              <Input
                type="email"
                name="email"
                id="Email"
                placeholder="Email"
                value={values.email || ""}
                onChange={handleChange}
              />
            </S.EmailField>
            <S.PasswordField>
              <Input
                type="password"
                name="password"
                id="Password"
                placeholder="Password"
                value={values.password || ""}
                onChange={handleChange}
              />
            </S.PasswordField>

            <S.LoginBtn>
              <Button type="submit">
                Login
              </Button>
            </S.LoginBtn>
          </S.LoginFormFields>

          <S.FormText>
            <S.FormTextSpan>Don't have account?</S.FormTextSpan>
            <Link to="/signup">SignUp</Link>
          </S.FormText>
        </S.AuthFormArea>
      </form>
    </S.AuthFormContainer>
  );
};

export default LogInForm;
