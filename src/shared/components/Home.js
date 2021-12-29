import React from "react";
import { ButtonContainer, Content, FormContainer, InputField, InputHolder, InputLabel, LoginHolder, Logo, LogoHolder, NameInput, PasswordInput, SignUpButton } from "./HomeStyles";
import LogoMetin2 from '../../assets/logo_metin2.png'
import { Field, Form } from "react-final-form";
import { Input } from 'antd';

const validateUser = (values) => {
  console.log(values, 'consegui')
}

const Home = () => {
  return (
    <Content>
      <LogoHolder>
        <Logo src={LogoMetin2} alt='metin2 logo'/>
      </LogoHolder>
      <LoginHolder>
        <Form onSubmit={validateUser} render={({handleSubmit, submitting, pristine}) => (
          <FormContainer onSubmit={handleSubmit}>
          <InputHolder>
                <InputLabel>First Name</InputLabel>
                <InputField
                  name='firstName'
                  component={NameInput}
                  type='text'
                />
          </InputHolder>
          <InputHolder>
            <InputLabel>Password</InputLabel>
              <InputField
                name='password'
                component={NameInput}
                type='password'
              />
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