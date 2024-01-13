import React from 'react'
import styled from 'styled-components'

export const InputContainer = styled.div`
    max-width: 350px;
    justify-content: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 5px;
    padding-bottom: 5px;
    label {
        display: inline-block;
        margin-bottom: 0.5rem;
        color: rgba(40, 44, 64, 0.6000000238418579);
    }
`;

function InputGroup({children}) {
    return (
        <InputContainer>
            {children}
        </InputContainer>
    );
}

export default InputGroup;