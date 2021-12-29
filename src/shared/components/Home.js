import React, { useState } from "react";
import { ButtonContainer, Content, FormContainer, InputField, InputHolder, InputLabel, LoginHolder, Logo, LogoHolder, NameInput, PasswordInput, SignUpButton } from "./HomeStyles";
import LogoMetin2 from '../../assets/logo_metin2.png'
import { Field, Form } from "react-final-form";
import { Input } from 'antd';
import { Users } from "../../client/Client";
import {Navigate} from 'react-router-dom'

const Home = () => {
  const [redirect, setRedirect] = useState(false)

  const validateUser = (values) => {
    let result = 0
    Users.forEach(user => {
      if (user.user === values.username && user.password === values.password) {
        result = 1
      }
    });
    if (result === 1) {
      setRedirect(true)
    }
  }

  if (redirect) {
    return (<Navigate to='/list' />)
  }

  return (
    <Content>
      <LogoHolder>
        <Logo src={LogoMetin2} alt='metin2 logo'/>
      </LogoHolder>
      <LoginHolder>
        <Form onSubmit={validateUser} render={({handleSubmit, submitting, pristine}) => (
          <FormContainer onSubmit={handleSubmit}>
          <InputHolder>
          <InputField name="username">
              {({ input, meta }) => (
                <div>
                  <InputLabel>Username</InputLabel>
                  <NameInput {...input} type="text" placeholder="Username" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </InputField>
          </InputHolder>
          <InputHolder>
            <InputField name="password">
              {({ input, meta }) => (
                <div>
                  <InputLabel>Password</InputLabel>
                  <NameInput {...input} type="password" placeholder="Password" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </InputField>
          </InputHolder>
            <ButtonContainer>
              <SignUpButton type="submit" disabled={submitting || pristine}>
                Submit
              </SignUpButton>
            </ButtonContainer>
        </FormContainer>
        )} />
      </LoginHolder>
    </Content>
  )
}

export default Home