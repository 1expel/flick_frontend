import styled, {createGlobalStyle} from 'styled-components'
import {AiFillExclamationCircle} from "react-icons/ai"
import logoImg from './assets/logo.svg'
import signupBackgroundImg from './assets/signup-background-img.svg'
import loginBackgroundImg from './assets/login-background-img.svg'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    padding: 0;
    font-family: Manrope, sans-serif;
}
`;

export const SignupBackground = styled.div`
    background-image: url(${signupBackgroundImg});
    background-size: stretch;
    display: flex;
    max-width: 1440px;
    justify-content: center;
    align-items: center;
`;

export const LoginBackground = styled.div`
    background-image: url(${loginBackgroundImg});
    background-size: 100%;
    display: flex;
    max-width: 1440px;
    justify-content: center;
    align-items: center;
`;

export const Frame = styled.div`
    display: inline;
    max-width: 450px;
    justify-content: flex-start;
    width: 100%;
    border-radius: 49px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-right: 62px;
    padding-left: 62px;
    background-color: rgba(255, 255, 255, 1);
    flex-direction: column;
    align-items: stretch;
    margin-top: 100px;
    margin-bottom: 100px;
    height: 100%;
    flex-grow: 1;    
`;

export const WelcomeHeader = styled.div`
  max-width: 350px;
  justify-content: flex-start;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const WelcomeText = styled.div`
    display: flex;
    max-width: 500px;
    justify-content: flex-start;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    `;

export const Button = styled.button`
    display: flex;
    max-width: 65px;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    height: auto;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15000000596046448);
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 162px;
    padding-left: 162px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    min-height: 20px;
    flex-grow: 0;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: left;
    font-family: Manrope, sans-serif;
    cursor: pointer;
`;

export const Icon = styled(AiFillExclamationCircle)`
    display: flex;
    position: relative;
    min-width: 20px;
    min-height: 20px;
    max-width: 20px;
    width: 100%;
    margin-top: auto;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: auto;
`;

export const Input = styled.input`
    display: flex;
    outline: none;
    flex-direction: column;
    align-items: stretch;
    position: relative;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: #ccc;
    width: 350px;
    width: 100%;
    align-self: stretch;

    &::placeholder {
        color: #dedede;
    }
    &:focus {
        box-shadow: 0 0 0 2px rgb(169,172,255,0.5);
    }
`;

export const Logo = styled.div`
    display: flex;
    max-width: 350px;
    justify-content: center;
    align-items: stretch;
    height: auto;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 0px;
    padding-right: 10px;
    padding-left: 10px;
    min-height: 100px;
    flex-grow: 0;
    border: 0px none white;
    outline: none;
`;

export const LogoImg = styled.img`
    background-image: url(${logoImg});
    display: flex;
    position: relative;
    min-width: 10px;
    min-height: 10x;
    max-width: 218px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    border: 0px none white;
    outline: 0;
`;

export const Heading = styled.h1`
  max-width: 158px;
  color: rgba(40, 44, 64, 1);
  font-size: 32px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: left;
  font-family: Manrope, sans-serif;
  padding-bottom: 10px;
`;

export const Subheading1 = styled.h2`
  max-width: 376px;
  color: rgba(40, 44, 64, 0.6000000238418579);
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: left;
  font-family: Manrope, sans-serif;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

export const RedirectContainer = styled.div`
    display: flex;
    max-width: 350px;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    height: auto;
    flex-grow: 0;
`;

export const AccentFrame = styled.div`
  display: flex;
  max-width: 75px;
  flex-direction: row;
  margin-top: 5px;
  margin-right: 5px;
`;

export const AccentLine = styled.div`
  display: flex;
  max-width: 115px;
  height: 1px;
  background-color: rgba(196, 196, 196, 1);
  min-height: 1px;
  flex-grow: 1;
  width: 115px;
`;

export const Subheading2 = styled.h3`
    color: rgba(130, 134, 154, 1);
    font-size: 14px;
    line-height: 189.9999976158142%;
    letter-spacing: 0%;
    text-align: center;
    white-space: nowrap;
    font-family: Manrope, sans-serif;
    max-width: 197px;
    margin-left: auto;
    margin-right: auto;
`;

export const ErrorText = styled.div`
max-width: 300px;
white-space: nowrap;
color: rgba(211, 59, 59, 1);
font-size: 14px;
line-height: 100%;
letter-spacing: 0%;
text-align: right;
font-family: Manrope, sans-serif;
margin-left: auto;
`;


export default GlobalStyle;
