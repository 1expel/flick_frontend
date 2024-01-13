import React from 'react'
import {Button, InputGroup} from '../components';
import {SignupBackground, WelcomeHeader, WelcomeText, Logo, LogoImg, Frame, ErrorText, Heading, Subheading1, Subheading2, RedirectContainer, AccentFrame, AccentLine} from '../globalStyles';
import {SignUpUser} from '../controllers/UserController'
import {Input} from '../globalStyles';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const formSchema = Yup.object().shape({
    username: Yup.string()
        .required("Required")
        .min(3, "Must be minimum 3 characters.")
         .max(25, "Must be maximum 25 characters."),
    password: Yup.string()
        .required("Required")
        .min(8, "Must be minimum 8 characters.")
        .max(16, "Must be maximum 16 characters."),
    confirmPassword: Yup.string()
        .required("Required")
        .test('passwords-match', 'Passwords must match', function(value){
            return this.parent.password === value
        })
});

function validateUser(userID) {
    if (!userID) {
        return false;
    } else {
        return true;
    }
}

function Signup() {
    const history = useHistory();

    // Create form submission handler
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

    const handleOnSubmit = async data => {
        const userID = await SignUpUser(data.username,data.password);

        // Validate token
        const validUserID = validateUser(userID);

        if (validUserID) {
            // Redirect to Login
            alert("New User has been created. Please log in.")
            history.push('/')
        } else {
            alert('Username already taken. Please choose another one.')
        }
    }

    return (
        <SignupBackground>
            <Frame
                margin-left="auto"
                margin-right="100px"
            >
                <WelcomeHeader>
                <Logo style={{textDecoration: "none"}}>
                    <LogoImg
                        backgroundPosition="center"
                        backgroundSize="contain"
                        aspectRatio={0.463302752293578}
                    />
                </Logo>
                <WelcomeText>
                    <Heading>Sign Up</Heading>
                    <Subheading1>Join the community!</Subheading1>
                </WelcomeText>
                </WelcomeHeader>
                
                <form onSubmit = {handleSubmit(handleOnSubmit)}>
                    <InputGroup>
                        <label htmlFor="signup-username">Username</label>
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
                        <label htmlFor="signup-password">Password</label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="password"
                            {...register("password")}
                        />
                    </InputGroup>
                    {/* Error Message for Password input, if required*/}
                    <ErrorText>{errors.password?.message}</ErrorText>
                    <InputGroup>
                        <label htmlFor="signup-password">Confirm Password</label>
                        <Input
                             id="confirmPassword"
                             type="password"
                             placeholder="confirm password"
                             {...register("confirmPassword")}
                        />
                    </InputGroup>
                    {/* Error Message for Password input, if required*/}
                    <ErrorText>{errors.confirmPassword?.message}</ErrorText>
                    <Button type ="submit" buttonType="signup"/>
                </form>
                <RedirectContainer>
                    <AccentFrame>
                        <AccentLine />
                    </AccentFrame>
                    <Subheading2 whitespace="nowrap">Already have an account?</Subheading2>
                    <AccentFrame>
                        <AccentLine />
                    </AccentFrame>
                </RedirectContainer>
                <a href="/" style={{textDecoration: "none"}}>
                    <Button type="button" buttonType="login"/>
                </a>
            </Frame>
        </SignupBackground>
    );
}

export default Signup;
