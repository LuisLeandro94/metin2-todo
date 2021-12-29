import { Input } from "antd";
import { Field } from "react-final-form";
import styled from "styled-components";

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LogoHolder = styled.div`
  width: 50%;
  height: 50%;
  position: relative;
  text-align: center;
`

export const Logo = styled.img`
  height: 100%;
`

export const LoginHolder = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`


export const NameInput = styled.input`
  width: 100%;
  background: #cecece;
  border: 1px solid #00a6aa;
  box-sizing: border-box;
  border-radius: 10px;
  height: 30px;
  .ant-input {
    background: #cecece;
  }
`

export const InputHolder = styled.div`
  width: 50%;
`

export const InputField = styled(Field)`
`

export const ButtonContainer = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  margin-top: 10px;
`

export const SignUpButton = styled.button`
  background: #00a6aa;
  max-width: 150px;
  width: 100%;
  height: 30px;
  border: 3px solid #00a6aa;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #cecece;
  cursor: pointer;
  &:hover {
    background: rgba(0, 166, 170, 0.6);
    border: none;
    color: #cecece;
    transition: all 0.5s ease;
  }
`

export const InputLabel = styled.label`
  color: white;
  width: 100%;
  display: block;
  padding: 15px 0px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
` 