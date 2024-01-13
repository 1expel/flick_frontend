import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '../globalStyles';

const SignInButton = styled(Button)`
    background-image: linear-gradient(
        to left,
        rgba(226, 58, 58, 1) 0%,
        rgba(226, 58, 58, 0.7135416865348816) 99.98999834060669%,
        rgba(226, 58, 58, 0) 100%
    );
    color: rgba(255, 255, 255, 1);

    ${Button}
`;

const SignUpButton = styled(Button) `
    background-image: linear-gradient(
        to left,
        rgba(140, 172, 196, 1) 0%,
        rgba(149, 160, 181, 0.9686654806137085) 99.97999668121338%,
        rgba(226, 58, 58, 0.7135416865348816) 99.98999834060669%,
        rgba(226, 58, 58, 0) 100%
    );
    color: rgba(255, 255, 255, 1);

    ${Button}
`;

function StyledButton(props) {
    const buttonType = props.buttonType;
    if (buttonType === "login") {
        return <SignInButton>Sign In</SignInButton>;
    } else if (buttonType === "signup") {
        return <SignUpButton>Sign Up</SignUpButton>;
    }
}

StyledButton.propTypes = {
    buttonType: PropTypes.string
}

export default StyledButton;
