import React from 'react';
import {Button, InputGroup} from '../components';
import {LoginBackground, WelcomeHeader, WelcomeText, Logo, LogoImg, Frame, ErrorText, Heading, Subheading1, Subheading2, RedirectContainer, AccentFrame, AccentLine} from '../globalStyles';
import {LoginUser} from '../controllers/UserController';
import {Input} from '../globalStyles';

import {useHistory} from 'react-router-dom';
import {isLoggedIn, logOut, setToken, setUserID} from '../controllers/UserAuthentication';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

const formSchema = Yup.object().shape({
    username: Yup.string()
      .required("Required")
      .min(3, "Must be minimum 3 characters.")
      .max(25, "Must be maximum 25 characters."),
    password: Yup.string()
      .required("Required")
      .min(8, "Must be minimum 8 characters.")
      .max(16, "Must be maximum 16 characters.")
});

function validateToken(token) {
    if (!token) {
        return false;
    } else {
        return true;
    }
};

function Login() {
    const history = useHistory();

    // Create form submission handler
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

    // Logout User
    logOut();

    const handleOnSubmit = async data => {
        // Get authentication token
        const response = await LoginUser(data.username,data.password);
        console.log(response);
        try {
            const token = response.token;
            const userID = response.userid;

            // Validate token
            const validToken = validateToken(token);
            
            if (validToken) {
                setToken(token);
                setUserID(userID); 
                console.log(token);              
            }
        } catch (error) {
            console.log(error);
            alert('Incorrect Username or Password.')
        } 

        if (isLoggedIn()) {
            // Redirect to Theatre List page
            history.push('/theatreList')
        }
    }
    
    return (
        <LoginBackground>
            <Frame
                margin-left="auto"
                margin-right="auto"
            >
                <WelcomeHeader>
                <Logo>
                    <LogoImg
                        backgroundPosition="center"
                        backgroundSize="contain"
                        aspectRatio={0.463302752293578}
                    />
                </Logo>
                <WelcomeText>
                    <Heading>Sign In</Heading>
                    <Subheading1>Welcome back, we missed you!</Subheading1>
                </WelcomeText>
                </WelcomeHeader>
                <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <InputGroup>
                        <label htmlFor="login-username">Username</label>
                        <Input 
                            id="username"
                            type="text"
                            placeholder="username"
                            {...register("username")}
                        />
                    </InputGroup>
                    {/* Error Message for Username input, if required*/}
                    <ErrorText>{errors.username?.message}</ErrorText>
                    <InputGroup>
                        <label htmlFor="login-password">Password</label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="password"
                            {...register("password")}
                        />
                    </InputGroup>
                    {/* Error Message for Password input, if required*/}
                    <ErrorText>{errors.password?.message}</ErrorText>
                    <a href="/selectMovies" style={{textDecoration: "none"}}>
                        <Button type="submit" buttonType="login"/>
                    </a>
                </form>
                <RedirectContainer>
                    <AccentFrame>
                        <AccentLine />
                    </AccentFrame>
                    <Subheading2>Don’t have an account?</Subheading2>
                    <AccentFrame>
                        <AccentLine />
                    </AccentFrame>
                </RedirectContainer>
                <a href="/signup" style={{textDecoration: "none"}}>
                    <Button type="button" buttonType="signup"/>
                </a>
            </Frame>
        </LoginBackground>
    );
}

export default Login;
