import styled from 'styled-components/native';

export const ButtonText = styled.Text `
    color: ${props => props.textColor};
    text-align: center;
    font-size: 20px;
    font-weight: 300;
`;

export const ButtonContainer = styled.TouchableOpacity `
    margin-top: 100px;
    margin-left: 35px;
    width: 200px;
    height: 50px;
    padding: 12px;
    border-radius: 35px;
    background-color: ${props => props.backgroundColor};
    box-shadow: 0px 2px 1px rgba(35, 225, 250, 0.25);
`;